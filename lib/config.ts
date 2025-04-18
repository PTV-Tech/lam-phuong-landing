type Config = {
  airtable: {
    baseUrl: string;
    apiKey: string;
    baseId: string;
    tables: {
      jobs: string;
      categories: string;
      types: string;
      locations: string;
      productGroups: string;
      subscribers: string;
    };
  };
  api: {
    baseUrl: string;
  };
};

const config: Config = {
  airtable: {
    baseUrl: "https://api.airtable.com/v0",
    apiKey: process.env.AIRTABLE_API_KEY || "",
    baseId: process.env.AIRTABLE_BASE_ID || "",
    tables: {
      jobs: process.env.AIRTABLE_JOBS_TABLE || "Thông tin Job",
      categories:
        process.env.AIRTABLE_JOB_CATEGORIES_TABLE || "Danh mục công việc",
      types: process.env.AIRTABLE_JOB_TYPES_TABLE || "Loại công việc",
      locations: process.env.AIRTABLE_LOCATIONS_TABLE || "Địa điểm",
      productGroups:
        process.env.AIRTABLE_PRODUCT_GROUPS_TABLE || "Nhóm sản phẩm",
      subscribers: process.env.AIRTABLE_SUBSCRIBERS_TABLE || "Người đăng ký",
    },
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  },
};

export default config;
