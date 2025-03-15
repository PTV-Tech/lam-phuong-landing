import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import Airtable from "airtable";
import JobTypes from "@/app/careers/components/JobTypes";
import JobCategories from "@/app/careers/components/JobCategories";
import ProductGroups from "@/app/careers/components/ProductGroups";

export default async function Filter() {
  return (
    <div className="border border-light lg:p-5 p-3.5 rounded-3xl bg-white">
      <Accordion type="single" collapsible>
        <JobTypes />

        <JobCategories />

        <ProductGroups />
      </Accordion>
    </div>
  );
}
