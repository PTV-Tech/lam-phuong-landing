"use client";
import React, { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { RouterRoot } from "@/app/contants";

const index = () => {
  return (
    <div id={RouterRoot.Studies} className="py-10 relative">
        <div className="absolute top-0 left-0 w-full">
            <img src="../images/bg-vector.svg" alt="" className="w-full h-[150px] object-cover" />
        </div>
      <div className="container mx-auto px-8 pr-0 lg:px-0">
        <div className="grid grid-cols-3 lg:max-w-6xl mx-auto items-center">
          <h3 className="mb-5 lg:text-[48px] text-[32px] font-bold col-span-2 lg:col-span-1 uppercase">
            CASE STUDIES
          </h3>
          <div className="bg-light h-[5px] w-full lg:col-span-2 col-span-1 translate-y-[-10px]"></div>
        </div>
      </div>
      <div className="swipers ml-4 lg:ml-0">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4 rounded-md">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">
                  vietnam championship series
                </h2>
                <div className="relative">
                  <img
                    src="../images/image-1.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Chung kết VCS khép lại mùa giải thành công, đánh dấu sự trở
                    lại ấn tượng sau nhiều năm. Sự kiện thu hút đông đảo cộng
                    đồng game và vinh dự xuất hiện trên nhiều trang báo lớn, đặc
                    biệt là bản tin thể thao VTV1.
                  </div>
                </div>
                <h2 className="px-4 uppercase min-h-12 lg:text-[18px] text-[16px]">
                  TỰ HÀO VCS XUẤT HIỆN TRÊN <br /> TRUYỀN HÌNH QUỐC GIA VTV
                </h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4 rounded-md">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">
                  Teamfight tactics
                </h2>
                <div className="relative">
                  <img
                    src="../images/image-2.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Sự kiện offline Đấu Trường Chân Lý lớn nhất Việt Nam quy tụ
                    hơn 1.000 cờ thủ tham gia. Đấu Trường Hỗn Chiến mang đến
                    không khí lễ hội sôi động và quà tặng độc quyền giá trị dành
                    cho người chơi.
                  </div>
                </div>
                <h2 className="px-4 uppercase min-h-12 lg:text-[18px] text-[16px]">
                  Sự kiện quy mô lớn
                  <br /> ĐẤU TRƯỜNG HỖN CHIẾN
                </h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4 rounded-md">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">into the arcane</h2>
                <div className="relative">
                  <img
                    src="../images/image-3.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Sự kiện offline tại Việt Nam chào đón bản cập nhật Arcane
                    của Riot Games. Người chơi được trải nghiệm các hoạt động
                    hấp dẫn như xem giải đấu eSports, tham gia trò chơi nhận
                    quà.
                  </div>
                </div>
                <h2 className="px-4 uppercase min-h-12 lg:text-[18px] text-[16px]">
                  Sự kiện offline chào đón
                  <br /> arcane season 2
                </h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4 rounded-md">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">Valorant</h2>
                <div className="relative">
                  <img
                    src="../images/image-4.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Bộ sưu tập Clove ra mắt chào đón Đặc vụ 25 – Clove trong
                    VALORANT, mang đậm phong cách của nhân vật, tạo sự hào hứng
                    và mong chờ cho người chơi.
                  </div>
                </div>
                <h2 className="px-4 uppercase min-h-12 lg:text-[18px] text-[16px]">
                  BST phong cách đặc vụ
                  <br /> CLOVE VALORANT
                </h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4 rounded-md">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">
                  pubg mobile esports
                </h2>
                <div className="relative">
                  <img
                    src="../images/image-5.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    PMPL Vietnam Mùa Thu 2022 là giải đấu PUBG MOBILE hàng đầu,
                    nơi các đội tuyển tranh ngôi Vô địch quốc nội và 4 vé dự
                    PMPL SEA Championship Mùa Thu 2022. Toàn bộ sự kiện được tổ
                    chức, vận hành và phát sóng bởi đội ngũ Việt Nam.
                  </div>
                </div>
                <h2 className="px-4 uppercase min-h-12 lg:text-[18px] text-[16px]">
                  2022 PMPL VIETNAM FINALS
                </h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="group">
              <div className="bg-primary py-4 text-white flex flex-col gap-4">
                <h2 className="px-4 uppercase lg:text-[18px] text-[16px]">VCT 2024</h2>
                <div className="relative">
                  <img
                    src="../images/image-6.png"
                    alt=""
                    className="w-full object-cover lg:h-[298px] h-[208px]"
                  />
                  <div className="absolute bg-[rgba(8,8,8,0.8)] top-0 left-0 p-4 text-white h-full visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
                    Sự kiện Viewing Party VALORANT Champions 2024 là cơ hội để
                    các fan VALORANT VN nhau hòa mình vào không khí sôi động,
                    cùng nhau tận hưởng trận đấu kịch tính, bùng nổ với những
                    pha highlight đỉnh cao.
                  </div>
                </div>
                <h2 className="px-4 uppercase max-w-[320px] min-h-12 lg:text-[18px] text-[16px]">
                  VIEWING PARTY CKTG
                  <br /> VALORANT CHAMPIONS 2024
                </h2>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default index;
