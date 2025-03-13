import { RouterRoot } from "@/app/contants";
import React,{RefObject} from "react";

const index = () => {
  return (
    <div id={RouterRoot.Partner} className="relative py-8 lg:pb-20">
        <div className="container mx-auto px-8 pr-0 lg:px-0">
            <div className="lg:max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 grid-cols-4 items-center">
                <h3 className="mb-5 lg:text-[48px] text-[32px] font-bold col-span-3 lg:col-span-1 uppercase">
                Ours partners
                </h3>
                <div className="bg-light h-[5px] w-full lg:col-span-2 col-span-1 translate-y-[-10px]"></div>
            </div>
            </div>
        </div>
        <div className="container mx-auto px-8 lg:px-0">
            <div className="lg:max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-3 items-start gap-14">
            <div className="col-span-1">
              <p>Chúng tôi tự hào đồng hành cùng các đối tác hàng đầu trong ngành game và giải trí.</p>
              <p>Sự tin tưởng và hợp tác chặt chẽ là động lực để Lam Phương mang đến những giải pháp marketing sáng tạo, hiệu quả, góp phần tạo nên thành công bền vững cho từng thương hiệu.</p>
            </div>
            <div className="col-span-2">
                <div className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap">
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-1.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-2.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-3.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-4.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-5.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-6.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-7.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-8.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-9.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-10.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-11.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-12.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-13.png" alt="" />
                    </div>
                    <div className="flex lg:w-[22%] w-[30%] justify-center">
                        <img src="../images/logo-14.png" alt="" />
                    </div>
                </div>
            </div>
          </div>
            </div>
        </div>
    </div>
  );
};

export default index;
