"use client";

import { Fragment, useState } from "react";
import Header from "@/app/components/header";
import SubscribeSection from "./SubscribeSection";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { ChevronDown } from "lucide-react";
import Banner from "@/public/images/banner-page.png";
import Image from "next/image";

type ClientViewProps = {
  offset: string | null;
  data: { title: string; summary: string; location: string; slug: string }[];
};

export default function ClientView({
  offset: initialOffset,
  data,
}: ClientViewProps) {
  const [records, setRecords] = useState<any[]>(data);
  const [offset, setOffset] = useState<string | null>(initialOffset);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = async () => {
    if (!offset) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/jobs?offset=${encodeURIComponent(offset)}`,
        {},
      ).then((res) => res.json());
      setRecords((prev) => [...prev, ...res.data]);
      setOffset(res.offset || null);
    } catch (error) {
      console.error("Error fetching more records:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />

      <main className="pt-[116px]">
        <div
          className="container mx-auto px-6 lg:px-0 relative"
          data-aos="fade-up"
        >
          <div className="lg:max-w-6xl mx-auto lg:py-16 py-5 relative">
            <Image
              className="w-full"
              src={Banner}
              alt="Banner image"
              width={1260}
              height={540}
            />

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mt-5 lg:mt-16">
              <div className="col-span-1">
                {/*<Filter />*/}

                <SubscribeSection />
              </div>

              <div className="col-span-2 relative z-1">
                {records.map((item) => {
                  return (
                    <div
                      key={item.slug}
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
                                <use xlinkHref="../images/icons.svg#icon-location" />
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
                {offset && (
                  <div className="mt-16 px-8" onClick={loadMore}>
                    <button className="flex flex-col justify-center items-center text-light text-[22px] cursor-pointer text-center mx-auto lg:mx-0">
                      Xem thêm
                      <ChevronDown className=" text-light" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
