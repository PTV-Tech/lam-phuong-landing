"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { fetchJobTypes } from "@/app/careers/components/test";

export default function JobTypes() {
  const [jobTypes, setJobTypes] = useState<any[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchJobTypes();
      setJobTypes(response);
    };

    fetchData();
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
    (slug: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const shouldAdd = event.target.checked;
      const newQueryString = createQueryString("job_types", slug, shouldAdd);
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
          {jobTypes.map((item) => {
            const checked = searchParams.get("job_types")?.includes(item.slug);

            return (
              <div
                key={item.slug}
                className="flex items-center space-x-2 text-[18px] mb-3"
              >
                <input
                  id={item.slug}
                  type="checkbox"
                  className="h-[20px] w-[20px]"
                  onChange={handleClick(item.slug)}
                  checked={checked}
                />
                <label htmlFor={item.slug}>{item.name}</label>
              </div>
            );
          })}
        </AccordionContent>
      )}
    </AccordionItem>
  );
}
