import { database } from "@/app/database";
import { JobFields } from "@/type";
import { FieldSet, Records } from "airtable";

interface JobType extends FieldSet {
  Name: string;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const chunksSlug = slug.split("-");
    const recordID = chunksSlug[chunksSlug.length - 1];
    const response = await database(process.env.JOBS_TABLE || "").find(
      recordID,
    );
    const fields = response.fields;

    const locationId = ((fields["Khu vực"] as string[]) || [])[0] || "";
    const locationResponse = await database(
      process.env.LOCATIONS_TABLE || "",
    ).find(locationId);

    let tags: string[] = [];

    const _jobTypes = (fields["Loại công việc"] || []) as string[];
    const filterJobTypeFormula = `OR(${_jobTypes
      .map((item) => `RECORD_ID()="${item}"`)
      .join(",")})`;
    const jobTypeResponse = await database<JobType>(
      process.env.JOB_TYPES_TABLE || "",
    )
      .select({
        filterByFormula: filterJobTypeFormula,
      })
      .firstPage();
    tags = [
      ...tags,
      ...(jobTypeResponse || []).map(({ fields }) => fields["Name"] as string),
    ];
    const _jobCategories = (fields["Danh mục công việc"] || []) as string[];
    const filterJobCategoryFormula = `OR(${_jobCategories
        .map((item) => `RECORD_ID()="${item}"`)
        .join(",")})`;
    const jobCategoryResponse = await database<JobType>(
        process.env.JOB_CATEGORIES_TABLE || "",
    )
        .select({
          filterByFormula: filterJobCategoryFormula,
        })
        .firstPage();
    tags = [
      ...tags,
      ...(jobCategoryResponse || []).map(({ fields }) => fields["Name"] as string),
    ];
    const _productGroups = (fields["Nhóm sản phẩm"] || []) as string[];
    const filterProductGroupFormula = `OR(${_productGroups
        .map((item) => `RECORD_ID()="${item}"`)
        .join(",")})`;
    const productGroupResponse = await database<JobType>(
        process.env.PRODUCT_GROUPS_TABLE || "",
    )
        .select({
          filterByFormula: filterProductGroupFormula,
        })
        .firstPage();
    tags = [
      ...tags,
      ...(productGroupResponse || []).map(({ fields }) => fields["Name"] as string),
    ];

    return new Response(
      JSON.stringify({
        title: fields["Tiêu đề"],
        description: fields["Mô tả công việc"],
        requirements: fields["Yêu cầu"],
        benefits: fields["Quyền lợi"],
        location: !!locationResponse ? locationResponse.fields["Name"] : "",
        tags,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (e) {
    console.log("=>(route.ts:43) e", e);
    return new Response(JSON.stringify(null), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
