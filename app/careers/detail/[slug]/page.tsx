import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React, { Fragment } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import SubscribeSection from "@/app/careers/components/SubscribeSection";

export const metadata = {
  title: "Tuyển dụng",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { slug } = await params;
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_SITE_URL}/api/career/${slug}`,
  // );
  // const data = await response.json();
  //
  // if (!data) {
  //   return <Fragment />;
  // }

  return (
    <>
      <Header />
      <main className="detail pt-[116px] pb-8 lg:pb-0">
        <div className="container mx-auto px-6 lg:px-0 relative min-h-screen">
          <div className="lg:max-w-6xl mx-auto lg:py-16 py-5 relative">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mt-5 lg:mt-16">
              <div className="col-span-1">
                <SubscribeSection />
              </div>
              <div className="col-span-2 flex flex-col gap-8">
                <h2 className="text-light hover:text-light text-[24px] lg:text-[36px] leading-9">
                 Bài vieết
                </h2>
                <div className="flex justify-between items-center">
                  <div className="group flex items-center gap-2 flex-wrap">
                    {["tag 1", "tag 1", "tag 1", "tag 1", "tag 1", "tag 1", "tag 1 tag 2", "tag 1", "tag 1 tag 2"].map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-light border border-light rounded-3xl px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="group min-w-[150px]">
                    <div className="flex items-center gap-2">
                      <svg width="13" height="18">
                        <use xlinkHref="../../images/icons.svg#icon-location"></use>
                      </svg>
                      <p className="text-light">Hồ Chí Minh</p>
                    </div>
                  </div>
                </div>
                <div className="mb-4 [&>h3]:text-light [&>h3]:text-[22px] [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul]:pl-5 [&>ul]:mb-5">
                  {/*<Markdown>{data.description}</Markdown>*/}
                  {/*<h4 className="text-light text-[22px] mb-3">*/}
                  {/*  Mô tả công việc*/}
                  {/*</h4>*/}
                  {/*<ul className="flex flex-col gap-3 list-disc pl-5 mb-5">*/}
                  {/*  <li>*/}
                  {/*    Xây dựng và duy trì mối quan hệ vững chắc với khách hàng*/}
                  {/*    hiện tại.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Phát triển kế hoạch và báo giá theo yêu cầu của khách*/}
                  {/*    hàng.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Quản lý và thực thi các dự án đang hợp tác cùng khách*/}
                  {/*    hàng.*/}
                  {/*  </li>*/}
                  {/*  <li>Phối hợp tốt với team nội bộ hoàn thành dự án.</li>*/}
                  {/*  <li>*/}
                  {/*    Theo dõi doanh số, lợi nhuận và các chỉ số hiệu suất chính*/}
                  {/*    của từng nhóm khách hàng.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Giải quyết các thắc mắc, khiếu nại và yêu cầu của khách*/}
                  {/*    hàng kịp thời và hiệu quả.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Cập nhật và báo cáo kết quả kinh doanh cho cấp trên.*/}
                  {/*  </li>*/}
                  {/*  <li>Các công việc khác theo yêu cầu của cấp trên</li>*/}
                  {/*</ul>*/}
                  {/*<h4 className="text-light text-[22px] mb-3">Yêu cầu</h4>*/}
                  {/*<ul className="flex flex-col gap-3 list-disc pl-5 mb-5">*/}
                  {/*  <li>*/}
                  {/*    Tốt nghiệp Đại học chuyên ngành Quản trị kinh doanh,*/}
                  {/*    Marketing hoặc các lĩnh vực liên quan.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Có ít nhất 1 năm kinh nghiệm làm việc trong lĩnh vực*/}
                  {/*    Account Management, ưu tiên ứng viên*/}
                  {/*  </li>*/}
                  {/*  <li>Có kinh nghiệm trong ngành games hoặc agency.</li>*/}
                  {/*  <li>*/}
                  {/*    Kỹ năng giao tiếp, đàm phán và thuyết trình xuất sắc.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Khả năng xây dựng và duy trì mối quan hệ tốt với khách*/}
                  {/*    hàng.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Tư duy phân tích, giải quyết vấn đề và ra quyết định hiệu*/}
                  {/*    quả.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Thành thạo tin học văn phòng (Word, Excel, PowerPoint),*/}
                  {/*    công cụ Canva*/}
                  {/*  </li>*/}
                  {/*  <li>Tiếng Anh thành thạo là một lợi thế.</li>*/}
                  {/*</ul>*/}
                  {/*<h4 className="text-light text-[22px] mb-3">Quyền lợi</h4>*/}
                  {/*<ul className="flex flex-col gap-3 list-disc pl-5">*/}
                  {/*  <li>Mức lương cạnh tranh và thưởng hấp dẫn.</li>*/}
                  {/*  <li>*/}
                  {/*    Được làm việc với các sản phẩm game thuộc VNGGames phát*/}
                  {/*    hành như PUBG Mobile, Liên Minh Huyền Thoại, VALORANT, Đấu*/}
                  {/*    trường chân lý, .....*/}
                  {/*  </li>*/}
                  {/*  <li>Cơ hội thăng tiến và phát triển nghề nghiệp.</li>*/}
                  {/*  <li>*/}
                  {/*    Môi trường làm việc năng động, chuyên nghiệp và thân*/}
                  {/*    thiện.*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    Chế độ bảo hiểm và phúc lợi theo quy định của pháp luật.*/}
                  {/*  </li>*/}
                  {/*</ul>*/}
                  <Link href="https://airtable.com/applRt3FQ5QTJY6sn/pag3suI5n5zwMkT6o/form">
                    <button className="mt-10 cursor-pointer text-white lg:text-[18px] border border-light bg-light rounded-3xl px-4 py-2 hover:bg-white hover:text-light">
                      Ứng tuyển ngay
                    </button>
                  </Link>
                </div>
                {/*<div className="border border-light p-7 rounded-3xl">*/}
                {/*  <form className="flex flex-col gap-5">*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Họ và chữ lót*/}
                {/*        <span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Tên<span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Email<span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Số điện thoại{" "}*/}
                {/*        <span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row items-start gap-3 justify-start border-t border-b-neutral-300 pt-8 mt-3">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Hồ sơ ứng viên{" "}*/}
                {/*        <span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <div className="">*/}
                {/*        <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3 mb-2">*/}
                {/*          <label*/}
                {/*            htmlFor="file-upload"*/}
                {/*            className="inline-flex cursor-pointer border border-light py-1 px-4 rounded-3xl text-light"*/}
                {/*          >*/}
                {/*            Chọn tệp*/}
                {/*          </label>*/}
                {/*          <input id="file-upload" type="file" />*/}
                {/*        </div>*/}
                {/*        <p className="text-[14px]">*/}
                {/*          Cho phép tệp doc, docx, xls, xlsx, ppt, pptx, pdf và*/}
                {/*          lên đến 3mb.*/}
                {/*        </p>*/}
                {/*        <p className="text-[14px]">*/}
                {/*          Tên tập tin không chứa các kí tự đặc biệt*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3 lg:mt-3 mt-2.5">*/}
                {/*      <label className="min-w-[180px]">Tập tin đính kèm</label>*/}
                {/*      <div className="">*/}
                {/*        <div className="lg:flex block gap-3 items-center mb-2">*/}
                {/*          <label*/}
                {/*            htmlFor="file-upload-2"*/}
                {/*            className="inline-flex cursor-pointer border border-light py-1 px-4 rounded-3xl text-light"*/}
                {/*          >*/}
                {/*            Chọn tệp*/}
                {/*          </label>*/}
                {/*          <input id="file-upload-2" type="file" />*/}
                {/*        </div>*/}
                {/*        <p className="text-[14px]">*/}
                {/*          Cho phép tệp doc, docx, xls, xlsx, ppt, pptx, pdf và*/}
                {/*          lên đến 3mb.*/}
                {/*        </p>*/}
                {/*        <p className="text-[14px]">*/}
                {/*          Tên tập tin không chứa các kí tự đặc biệt*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3 lg:mt-3 mt-2.5">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Biết vị trí này từ?{" "}*/}
                {/*        <span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <select className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4">*/}
                {/*        <option>Chương trình giới thiệu ứng viên (ERP)</option>*/}
                {/*        <option>Campus posting portals</option>*/}
                {/*        <option>Facebook Forum</option>*/}
                {/*        <option>IT Viec</option>*/}
                {/*        <option>Life at VNG Fanpage</option>*/}
                {/*        <option>LinkedIn</option>*/}
                {/*        <option>Recruiter</option>*/}
                {/*        <option>Search (e.g. Google)</option>*/}
                {/*        <option>Vietnamworks</option>*/}
                {/*        <option>Others</option>*/}
                {/*      </select>*/}
                {/*    </div>*/}
                {/*    <div className="group flex flex-col lg:flex-row lg:items-center items-start gap-3 lg:mt-3 mt-2.5">*/}
                {/*      <label className="min-w-[180px]">*/}
                {/*        Liên kết portfolio*/}
                {/*        <span className="text-red-600 pl-3">*</span>*/}
                {/*      </label>*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="col-span-2 rounded-3xl border border-light w-full h-[40px] px-4"*/}
                {/*        placeholder="LinkedIn / Facebook / Github / Design profile..."*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="group flex items-center space-x-2 text-[16px] mt-3">*/}
                {/*      <input type="checkbox" className="h-[20px] w-[20px]" />*/}
                {/*      <label htmlFor="terms">*/}
                {/*        Bằng việc nộp đơn ứng tuyển, tôi xác nhận rằng tôi đã*/}
                {/*        đọc hiểu và đồng ý với{" "}*/}
                {/*        <a href="" className="text-light">*/}
                {/*          Chính sách bảo mật*/}
                {/*        </a>*/}
                {/*      </label>*/}
                {/*    </div>*/}
                {/*    <div className="flex justify-end">*/}
                {/*        <button className="mt-10 cursor-pointer text-white lg:text-[18px] border border-light bg-light rounded-3xl px-4 py-2 hover:bg-white hover:text-light">*/}
                {/*          Ứng tuyển*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*  </form>*/}
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
