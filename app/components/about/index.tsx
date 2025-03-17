import { RouterRoot } from '@/app/contants'
import React, { RefObject } from 'react'


const index =() => {
  return (
    <div id={RouterRoot.About} className="relative about">
      <div className="container px-6 lg:px-8 mx-auto" data-aos="fade-up">
        <div className="block lg:grid grid-cols-3 py-10 lg:py-32 lg:max-w-6xl mx-auto gap-10">
            <img src="../images/logo-3d.png" alt="" className="w-[185px] lg:w-[340px] mb-4 lg:mb-0" />
            <div className="col-span-2 flex flex-col gap-4 justify-center">
                <h3 className="uppercase text-primary text-[32px] lg:text-[48px] font-bold">ABOUT US</h3>
                <h6 className="font-bold">CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ TRUYỀN THÔNG LAM PHƯƠNG</h6>
                <p className="text-primary">Giải pháp Marketing Toàn Diện Cho Ngành Game</p>
                <p>Lam Phương cung cấp giải pháp marketing toàn diện cho ngành Game tại Việt Nam, từ Content Marketing, Creative Production, KOLs/Influencer Booking đến PR & Communication, Public Event.</p>
                <p>Với phương châm “Make it simple. Make it memorable”, chúng tôi tối ưu hóa quy trình, truyền tải thông điệp tinh tế và tạo dấu ấn bền vững cho thương hiệu.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
