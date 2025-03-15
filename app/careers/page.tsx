import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import SubscribeSection from "./components/SubscribeSection";
import { CareerListItem } from "@/type";
import Filter from "./components/Filter";

export const metadata = {
  title: "Tuyển dụng",
};

export const dynamic = "force-dynamic";
export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/careers`,
  );
  const data = (await response.json()) as CareerListItem[];

  return (
    <>
      <Header />
      <main className="carrers pt-[116px]">
        <div className="container mx-auto px-6 lg:px-0 relative">
          <div className="lg:max-w-6xl mx-auto lg:py-16 py-5 relative">
            <img src="../images/banner-page.png" alt="" className="w-full" />
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mt-5 lg:mt-16">
              <div className="col-span-1">
                <Filter />

                <SubscribeSection />
              </div>

              <div className="col-span-2 relative z-1">
                {data.map((item) => {
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
