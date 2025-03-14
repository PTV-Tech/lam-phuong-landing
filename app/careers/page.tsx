import Header from "../components/header";
import Footer from "../components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import SubscribeSection from "@/app/careers/components/SubscribeSection";

export const metadata = {
  title: "Tuyển dụng",
};

export const dynamic = 'force-dynamic'
export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/careers`,
  );
  const data = await response.json() as any;

  return (
    <>
      <Header base="/" />
      <main className="carrers pt-[116px]">
        <div className="container mx-auto px-6 lg:px-0 relative">
          <div className="lg:max-w-6xl mx-auto lg:py-16 py-5 relative">
            <img src="../images/banner-page.png" alt="" className="w-full" />
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mt-5 lg:mt-16">
              <div className="col-span-1">
                <div className="border border-light lg:p-5 p-3.5 rounded-3xl bg-white">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
                        Loại công việc
                        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 px-3">
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Collaborator</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px]">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Official</label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
                        Ngành nghề
                        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Advertising & Promotion</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Customer Service</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Digital Marketing</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Generic Marketing</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Creative Services</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Account</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Finance & Accounting</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px]">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Human Resources</label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="flex justify-between cursor-pointer text-light lg:text-[30px] text-[25px] mb-5 items-center w-full [&[data-state=open]>svg]:rotate-90">
                        Địa điểm
                        <ChevronRight className="h-6 w-6 shrink-0 text-light transition-transform duration-200" />
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Hà Nội</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px] mb-3">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">TP. Hồ Chí Minh</label>
                        </div>
                        <div className="flex items-center space-x-2 text-[18px]">
                          <input
                            type="checkbox"
                            className="h-[20px] w-[20px]"
                          />
                          <label htmlFor="terms">Remote</label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <SubscribeSection />
              </div>

              <div className="col-span-2 relative z-1">
                {data.map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="group rounded-3xl p-4 border border-light shadow-[0_2px_0_rgba(66,157,165,1)] flex flex-col gap-4 mb-6 bg-white"
                    >
                      <Link href={`/careers/detail/${item.slug}`}>
                        <h2 className="group-hover:text-light hover:text-light text-[24px] lg:text-[36px] leading-9">
                          {item.title}
                        </h2>
                      </Link>
                      <p className="line-clamp-3">{item.summary}</p>
                      <div className="flex justify-between items-center">
                        <div className="group">
                          {!!item.location && (
                            <div className="flex items-center gap-2">
                              <svg width="13" height="18">
                                <use xlinkHref="../images/icons.svg#icon-location"></use>
                              </svg>
                              <p className="text-light">{item.location}</p>
                            </div>
                          )}
                        </div>
                        <Link href="https://airtable.com/applRt3FQ5QTJY6sn/pag3suI5n5zwMkT6o/form">
                          <button className="cursor-pointer text-light lg:text-[18px] border border-light rounded-3xl px-4 py-1 hover:bg-light hover:text-white">
                            Ứng tuyển ngay
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                {/*<div className="mt-16 px-8">*/}
                {/*  <button className="flex flex-col justify-center items-center text-light text-[22px] cursor-pointer text-center mx-auto lg:mx-0">*/}
                {/*    Xem thêm*/}
                {/*    <ChevronDown className=" text-light" />*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
