'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          sensitivity: 1,
          thresholdDelta: 50,
        }}
        speed={800}
        effect="fade"
        modules={[Mousewheel, EffectFade]}
        className="w-full h-full"
      >
        {/* 首页 */}
        <SwiperSlide className="bg-gradient-to-b from-[#DB2777] to-[#BE185D]">
          <div className="flex flex-col items-center justify-center h-full text-white p-8">
            <h1 className="text-4xl font-bold mb-4">CosApp</h1>
            <p className="text-xl text-center mb-8">您的智能生活助手</p>
            <div className="relative w-48 h-48 mb-8">
              {/* <Image
                src="/app-preview.png"
                alt="App Preview"
                fill
                className="object-contain"
              /> */}
            </div>
            <button className="bg-white text-[#DB2777] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              立即下载
            </button>
          </div>
        </SwiperSlide>

        {/* 功能特点 */}
        <SwiperSlide className="bg-white">
          <div className="flex flex-col items-center justify-center h-full p-8">
            <h2 className="text-3xl font-bold mb-8 text-[#DB2777]">核心功能</h2>
            <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#DB2777]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold mb-2 text-[#DB2777]">智能助手</h3>
                <p className="text-gray-600">24小时在线，随时为您服务</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#DB2777]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold mb-2 text-[#DB2777]">快速响应</h3>
                <p className="text-gray-600">毫秒级响应，极速体验</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 使用场景 */}
        <SwiperSlide className="bg-gray-50">
          <div className="flex flex-col items-center justify-center h-full p-8">
            <h2 className="text-3xl font-bold mb-8 text-[#DB2777]">使用场景</h2>
            <div className="space-y-6 w-full max-w-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2 text-[#DB2777]">日常生活</h3>
                <p className="text-gray-600">智能提醒、日程管理、生活助手</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2 text-[#DB2777]">工作学习</h3>
                <p className="text-gray-600">文档处理、笔记管理、任务追踪</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 下载页 */}
        <SwiperSlide className="bg-gradient-to-b from-[#BE185D] to-[#DB2777]">
          <div className="flex flex-col items-center justify-center h-full text-white p-8">
            <h2 className="text-3xl font-bold mb-8">立即体验</h2>
            <div className="space-y-4">
              <button className="bg-white text-[#DB2777] px-8 py-3 rounded-full font-bold w-full hover:bg-opacity-90 transition-all">
                App Store 下载
              </button>
              <button className="bg-white text-[#DB2777] px-8 py-3 rounded-full font-bold w-full hover:bg-opacity-90 transition-all">
                Google Play 下载
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
