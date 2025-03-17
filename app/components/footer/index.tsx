import React from 'react'

const index = () => {
  return (
    <footer className="relative">
      <div className="container mx-auto px-8 mt-8 lg:mt-0">
        <div className="border-t-5 border-light py-8">
          <img src="../images/logo.png" alt="" className="w-[160px] xl:w-[260px]" />
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 mt-10">
              <div className="max-w-64">
                  <p>©2025 Công ty Cổ phẩn Giải trí và Truyền Thông Lam Phương</p>
              </div>
              <div className="max-w-64">
                  <p>Tầng 2, Số 3, 27/16 Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Hà Nội</p>
              </div>
              <div className="max-w-64">
                  <p>Contact:</p>
                  <p>info@lamphuong.com.vn</p>
              </div>
          </div>
        </div>  
      </div>
    </footer>
  )
}

export default index
