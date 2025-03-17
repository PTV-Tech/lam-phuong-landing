import React from 'react'
import { ScrollRefProps } from '@/type/index'
import { RefObject } from "react";
import { RouterRoot } from '@/app/contants';


const index =()=> {
  return (
    <div id={RouterRoot.Service} className="services relative">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex lg:max-w-6xl mx-auto" data-aos="fade-up">
            <div className="elements">
                <h3 className="uppercase lg:text-[48px] text-[32px] font-bold mb-4 lg:mb-10">Our services</h3>
                <div className="group mb-4 lg:mb-10 relative">
                    <img src="../images/icon-animation.gif" alt="" width={100} height={100} 
                    className="absolute left-[-85px] top-[-33px] visible h-0 group-hover:h-auto group-hover:opacity-100" />
                    <h2 className="text-light capitalize font-bold lg:text-[48px] text-[32px] title cursor-pointer leading-10 lg:leading-8">Content marketing</h2>
                    <div className="max-w-xl visible h-0 group-hover:h-auto mt-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                        <p>Xây dựng những nội dung sáng tạo, bám sát xu hướng và văn hóa game, giúp thương hiệu thu hút và kết nối sâu sắc với cộng đồng game thủ.</p>
                    </div>
                </div>
                <div className="group mb-4 lg:mb-10 relative">
                    <img src="../images/icon-animation.gif" alt="" width={100} height={100} 
                    className="absolute left-[-85px] top-[-33px] visible h-0 group-hover:h-auto group-hover:opacity-100" />
                    <h2 className="text-light capitalize font-bold lg:text-[48px] text-[32px] title cursor-pointer leading-10 lg:leading-8">Creative Production</h2>
                    <div className="max-w-xl visible h-0 group-hover:h-auto mt-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                        <p>Từ ý tưởng đến sản phẩm hoàn chỉnh, thông điệp của thương hiệu được truyền tải một cách sống động và khác biệt thông qua những ấn phẩm hình ảnh, video ấn tượng.</p>
                    </div>
                </div>
                <div className="group mb-4 lg:mb-10 relative">
                    <img src="../images/icon-animation.gif" alt="" width={100} height={100} 
                    className="absolute left-[-85px] top-[-33px] visible h-0 group-hover:h-auto group-hover:opacity-100" />
                    <h2 className="text-light capitalize font-bold lg:text-[48px] text-[32px] title cursor-pointer leading-10 lg:leading-8">KOLs/Influencer Booking</h2>
                    <div className="max-w-xl visible h-0 group-hover:h-auto mt-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                        <p>Kết nối thương hiệu với các KOLs và Influencer phù hợp, tối ưu hóa tầm ảnh hưởng và gia tăng độ nhận diện trong cộng đồng game thủ.</p>
                    </div>
                </div>
                <div className="group mb-4 lg:mb-10 relative">
                    <img src="../images/icon-animation.gif" alt="" width={100} height={100} 
                    className="absolute left-[-85px] top-[-33px] visible h-0 group-hover:h-auto group-hover:opacity-100" />
                    <h2 className="text-light capitalize font-bold lg:text-[48px] text-[32px] title cursor-pointer leading-10 lg:leading-8">PR & Communication</h2>
                    <div className="max-w-xl visible h-0 group-hover:h-auto mt-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                        <p>Chúng tôi xây dựng chiến lược truyền thông hiệu quả, lan tỏa thông điệp thương hiệu qua các kênh báo chí, truyền thông số và cộng đồng.</p>
                    </div>
                </div>
                <div className="group mb-4 lg:mb-10 relative">
                <img src="../images/icon-animation.gif" alt="" width={100} height={100} 
                    className="absolute left-[-85px] top-[-33px] visible h-0 group-hover:h-auto group-hover:opacity-100" />
                    <h2 className="text-light capitalize font-bold lg:text-[48px] text-[32px] title cursor-pointer leading-10 lg:leading-8">Public Event & Activation</h2>
                    <div className="max-w-xl visible h-0 group-hover:h-auto mt-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                        <p>Tổ chức sự kiện và kích hoạt thương hiệu sáng tạo, mang đến trải nghiệm tương tác độc đáo, giúp thương hiệu chinh phục và gắn kết người dùng.</p>
                    </div>
                </div>
            </div>    
        </div>    
      </div>
    </div>
  )
}

export default index
