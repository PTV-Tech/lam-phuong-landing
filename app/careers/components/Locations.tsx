"use server";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

export default async function Locations() {
  const locations = await base("tblwmxQvccq7bcLu6")
    .select({
      view: "Grid view",
      fields: ["fldk5qKE5puLWOXOi", "fldzfZrUAMeGdQDNh"],
      filterByFormula: "{fldMG1ksisMbgqKHe}='Active'",
      returnFieldsByFieldId: true,
    })
    .firstPage()
    .then(
      (data) =>
        data.map(({ fields }) => ({
          name: fields["fldk5qKE5puLWOXOi"],
          slug: fields["fldzfZrUAMeGdQDNh"],
        })) as { name: string; slug: string }[],
    );

  return (
    <AccordionItem value="locations">
      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
        Địa điểm
        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
      </AccordionTrigger>
      {locations?.length > 0 && (
        <AccordionContent className="pb-5 px-3">
          {locations.map((item) => {
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
