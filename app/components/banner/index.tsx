import { RouterRoot } from "@/app/contants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const index = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  const onScroll = useCallback((id:string | null)=>{
    if(!id) return;
    if(id==RouterRoot.Home) return
    const el = document.querySelector(`#${id}`)
    el?.scrollIntoView({ behavior: "smooth" });
  },[])

  const handleScroll = ()=> {
    params.set("id",RouterRoot.About);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    onScroll(RouterRoot.About);
  };

  return (
    <div className="banner lg:h-screen h-[465px] relative flex flex-col justify-end items-center">
      <div className="container relative z-1 px-6 lg:px-8 bottom-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-3">
          <div className="heading">
            <h2 className="uppercase text-[32px] lg:text-[64px] font-bold lg:leading-20 leading-10">
              make it <span className="text-primary">simple.</span>
            </h2>
            <h2 className="uppercase text-[32px] lg:text-[64px] font-bold lg:leading-20 leading-10">
              make it <span className="text-primary">memorable.</span>
            </h2>
          </div>
          <button className="button cursor-pointer" onClick={handleScroll}>
            <svg width="70" height="22">
              <use xlinkHref="../images/icons.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="wrapper-image absolute top-0 lef-0 z-0 lg:h-screen h-auto">
        <img src="../images/bg-banner.png" alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default index;
