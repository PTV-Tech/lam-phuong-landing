"use server";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

export default async function JobTypes() {
  const jobTypes = await base("tblgnTej3UhGhdXiT")
    .select({
      view: "Grid view",
      fields: ["fldrDEZjBskgGXFem", "fld39H9OxaPXAVXl9"],
      filterByFormula: "{flde2VaMA29XeJVUe}='Active'",
      returnFieldsByFieldId: true,
    })
    .firstPage()
    .then(
      (data) =>
        data.map(({ fields }) => ({
          name: fields["fldrDEZjBskgGXFem"],
          slug: fields["fld39H9OxaPXAVXl9"],
        })) as { name: string; slug: string }[],
    );

  return (
    <AccordionItem value="jobTypes">
      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
        Loại công việc
        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
      </AccordionTrigger>
      {jobTypes?.length > 0 && (
        <AccordionContent className="pb-5 px-3">
          {jobTypes.map((item) => {
            return (
              <div
                key={item.slug}
                className="flex items-center space-x-2 text-[18px] mb-3"
              >
                <input type="checkbox" className="h-[20px] w-[20px]" />
                <label htmlFor="terms">{item.name}</label>
              </div>
            );
          })}
        </AccordionContent>
      )}
    </AccordionItem>
  );
}
