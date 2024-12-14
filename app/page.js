'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomProgress = Math.floor(Math.random() * 100);
      setProgress((prevProgress) => {
        if (prevProgress >= randomProgress) {
          clearInterval(timer);
          return randomProgress;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Banner chính */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-gray-800 to-red-900">
        <Image
          src="/banner.jpg"
          alt="MdCenter Banner"
          fill
          style={{objectFit: 'cover'}}
          priority
          className="mix-blend-overlay opacity-30"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">

          
          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto mt-8">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-red-600">
                    Loading
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-white">
                    {progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                <div 
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mt-8">Coming Soon</h2>
          <p className="text-xl text-white mt-4">Mở ra cơ hội giáo dục toàn cầu</p>
        </div>
      </div>

      {/* Thông tin liên hệ */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-8">Thông tin liên hệ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">MDCENTER TRỤ SỞ CHÍNH</h4>
              <p className="text-gray-600">Địa chỉ: Số 05, ngõ 18 Mạc Thái Tổ, P.Yên Hòa, Q.Cầu Giấy, Hà Nội</p>
              <p className="text-gray-600">Số điện thoại: 0986665917 | 0971566617</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">MDCENTER CƠ SỞ 2</h4>
              <p className="text-gray-600">Địa chỉ: T02, Times City, P.Vĩnh Tuy, Q.Hai Bà Trưng, Hà Nội</p>
              <p className="text-gray-600">Số điện thoại: 0986665917 | 0971566617</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">MDCENTER CƠ SỞ 3</h4>
              <p className="text-gray-600">Địa chỉ: S5 và S2 Symphony, Vinhomes Riverside, P.Phúc Lợi, Q.Long Biên, Hà Nội</p>
              <p className="text-gray-600">Số điện thoại: 0986665917 | 0971566617</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">CÔNG TY TNHH ĐẦU TƯ VÀ PHÁT TRIỂN GIÁO DỤC MINH DUY</h4>
              <p className="text-gray-600">Địa chỉ: Số 34, LK11, Khu đô thị Văn Phú, P.Phú La, Q. Hà Đông , Hà Nội</p>
              <p className="text-gray-600">Số điện thoại: 0986665917 | 0971566617</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin thêm từ trang web */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Giới thiệu về Minh Duy Education</h3>
          <p className="text-center text-lg text-gray-700 mb-8">
            Trung tâm Tư vấn & Giáo dục Quốc tế Minh Duy được thành lập năm 2014, cung cấp đa dạng các dịch vụ tư vấn và đào tạo trong các chương trình quốc tế.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">Khóa học Cambridge</h4>
              <p className="text-gray-600">Chương trình Cambridge quốc tế từ tiểu học đến trung học.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">Chương trình gia sư quốc tế</h4>
              <p className="text-gray-600">Chương trình gia sư quốc tế được cá nhân hóa cho từng học sinh.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">Tư vấn du học</h4>
              <p className="text-gray-600">Định hướng và hỗ trợ du học tại các quốc gia hàng đầu.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-2 text-gray-800">Trải nghiệm & hướng nghiệp</h4>
              <p className="text-gray-600">Chương trình trải nghiệm và hướng nghiệp cho học sinh.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}