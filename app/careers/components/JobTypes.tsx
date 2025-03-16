"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getJobTypes } from "./getJobTypes";

export default function JobTypes() {
  const [jobTypes, setJobTypes] = useState<{ name: string }[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getJobTypes();
      setJobTypes(response);
    };

    fetchData().then();
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string, shouldAdd = true) => {
      const currentValues = searchParams.get(name) || "";
      const currentValuesArr = currentValues
        .split("|")
        .filter((item) => !!item);
      let newValuesArr = [];
      if (shouldAdd) {
        newValuesArr = [...currentValuesArr, value];
      } else {
        newValuesArr = currentValuesArr.filter((item) => item !== value);
      }
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, newValuesArr.join("|"));
      return params.toString();
    },
    [searchParams],
  );

  const handleClick = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const shouldAdd = event.target.checked;
      const newQueryString = createQueryString("job_types", name, shouldAdd);
      router.push(`${pathname}?${newQueryString}`);
    },
    [router, pathname, createQueryString],
  );

  return (
    <AccordionItem value="jobTypes">
      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
        Loại công việc
        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
      </AccordionTrigger>
      {jobTypes?.length > 0 && (
        <AccordionContent className="pb-5 px-3">
          {jobTypes.map(({ name }) => {
            const checked = searchParams.get("job_types")?.includes(name);

            return (
              <div
                key={name}
                className="flex items-center space-x-2 text-[18px] mb-3"
              >
                <input
                  id={name}
                  type="checkbox"
                  className="h-[20px] w-[20px]"
                  onChange={handleClick(name)}
                  checked={checked}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </AccordionContent>
      )}
    </AccordionItem>
  );
}
