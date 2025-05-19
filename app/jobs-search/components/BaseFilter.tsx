import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { CONFIG_BY_KEY } from "@/app/jobs-search/constants";
import { ChevronRight } from "lucide-react";
import { logger } from "@/lib/consola";

type BaseFilterProps = {
  value: string
  title: string
  data: { name: string; id: string }[]
  activeIDs: string[]
};

export default function BaseFilter({ value, title, data, activeIDs }: BaseFilterProps) {
  logger.success("data: ", data);
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
        {title}
        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
      </AccordionTrigger>

      <AccordionContent className="pb-5 px-3">
        {data.map(({ name }) => {
          const checked = activeIDs.includes(name);

          return (
            <div
              key={name}
              className="flex items-center space-x-2 text-[18px] mb-3"
            >
              <input
                id={name}
                type="checkbox"
                className="h-[20px] w-[20px]"
                // onChange={handleClick(name)}
                checked={checked}
              />
              <label htmlFor={name}>{name}</label>
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
}
