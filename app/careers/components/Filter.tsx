import { Accordion } from "@radix-ui/react-accordion";
import JobTypes from "./JobTypes";
import JobCategories from "./JobCategories";
import ProductGroups from "./ProductGroups";
import Locations from "./Locations";

export default async function Filter() {
  return (
    <div className="border border-light lg:p-5 p-3.5 rounded-3xl bg-white">
      <Accordion type="single" collapsible>
        <JobTypes />

        <JobCategories />

        <Locations />

        <ProductGroups />
      </Accordion>
    </div>
  );
}
