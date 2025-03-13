import { RouterRoot } from "@/app/contants";
import React, {RefObject} from "react";

const index = () => {
  return (
    <div id={RouterRoot.Career} className="pt-10 relative">
      <div className="container mx-auto px-8 lg:px-0">
        <div className="lg:max-w-6xl mx-auto">
            <div className="grid grid-cols-4 items-center">
                <h3 className="mb-5 lg:text-[48px] text-[32px] font-bold col-span-2 lg:col-span-1 uppercase">
                    Careers
                </h3>
                <div className="bg-light h-[5px] w-full lg:col-span-3 col-span-2 translate-y-[-10px]"></div>
            </div>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-start gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-light lg:text[48px] text-[32px] uppercase">Đồng đội nhập trận!</h2>
                    <p>Bạn có muốn trở thành một phần của Lam Phương – nơi sáng tạo đột phá được sử dụng để tạo nên những chiến dịch truyền cảm hứng, tác động đến cộng đồng và thúc đẩy sự phát triển của doanh nghiệp? Chúng tôi luôn tìm kiếm những tài năng xuất sắc và mong được đồng hành cùng bạn trên hành trình này.</p>
                    <a href="" className="text-light border border-light rounded-3xl px-4 py-3 inline-flex max-w-[160px] justify-center hover:bg-light hover:text-white">Xem công việc</a>
                </div>
                <div className="lg:translate-y-[-100px]">
                    <img src="../images/image-7.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
