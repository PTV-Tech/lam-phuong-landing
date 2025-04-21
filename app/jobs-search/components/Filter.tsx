"use client";
import { Accordion } from "@radix-ui/react-accordion";
import FilterBase from "./FilterBase";
import { FilterKeyEnum } from "@/app/tim-kiem-viec-lam/constants";

export default function Filter() {
  return (
    <div className="border border-light lg:p-5 p-3.5 rounded-3xl bg-white">
      <Accordion type="single" collapsible>
        <FilterBase filterKey={FilterKeyEnum.JobTypes} />

        <FilterBase filterKey={FilterKeyEnum.JobCategories} />

        <FilterBase filterKey={FilterKeyEnum.ProductGroups} />

        <FilterBase filterKey={FilterKeyEnum.Locations} />
      </Accordion>
    </div>
  );
}
