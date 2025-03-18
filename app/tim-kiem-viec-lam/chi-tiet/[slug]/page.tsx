import React, { Fragment } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import SubscribeSection from "../../components/SubscribeSection";

export const metadata = {
  title: "Tuyển dụng",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/job/${slug}`,
  );
  const data = await response.json();

  return (
    <>
      <main className="detail pt-[116px] pb-8 lg:pb-0">
        <div className="container mx-auto px-6 lg:px-0 relative min-h-screen">
          <div className="lg:max-w-6xl mx-auto lg:py-16 py-5 relative">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mt-5 lg:mt-16">
              <div className="col-span-1">
                <SubscribeSection />
              </div>
              <div className="col-span-2 flex flex-col gap-8">
                <h2 className="text-light hover:text-light text-[24px] lg:text-[36px] leading-9">
                  {data.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="group flex items-center gap-2 flex-wrap">
                    {(data.tags || []).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-light border border-light rounded-3xl px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {!!data.location && (
                    <div className="group min-w-[150px]">
                      <div className="flex items-center gap-2">
                        <svg width="13" height="18">
                          <use xlinkHref="../../images/icons.svg#icon-location"></use>
                        </svg>
                        <p className="text-light">{data.location}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-4 [&>h3]:text-light [&>h3]:text-[22px] [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul]:pl-5 [&>ul]:mb-5 whitespace-pre-line">
                  <h4 className="text-light text-[22px] mb-3">
                    Mô tả công việc
                  </h4>
                  <Markdown>{data.description}</Markdown>

                  <h4 className="text-light text-[22px] mb-3">Yêu cầu</h4>
                  <Markdown>{data.requirements}</Markdown>

                  <h4 className="text-light text-[22px] mb-3">Quyền lợi</h4>
                  <Markdown>{data.benefits}</Markdown>

                  <Link href="https://airtable.com/applRt3FQ5QTJY6sn/pag3suI5n5zwMkT6o/form">
                    <button className="mt-10 cursor-pointer text-white lg:text-[18px] border border-light bg-light rounded-3xl px-4 py-2 hover:bg-white hover:text-light">
                      Ứng tuyển ngay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
