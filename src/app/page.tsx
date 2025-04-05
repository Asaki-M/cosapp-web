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
        effect="cude"
        modules={[Mousewheel, EffectFade]}
        className="w-full h-full"
      >
        {/* 首页 */}
        <SwiperSlide className="bg-gradient-to-b from-[#DB2777] to-[#BE185D]">
          <div className="flex flex-col items-center justify-center h-full text-white p-8 pb-24">
            <h1 className="text-4xl font-bold mb-4">CosApp</h1>
            <p className="text-xl text-center mb-8">您的 Cosplay 智能应用</p>
            <div className="relative w-[280px] h-[373px] rounded-2xl overflow-hidden group shadow-2xl mb-8 animate-fadeIn">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/cosapp-home.png"
                  alt="CosApp Home"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <button className="bg-white text-[#DB2777] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              立即下载
            </button>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group">
              <div className="flex flex-col items-center animate-bounce opacity-80 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm mb-2">下滑查看 APP 功能介绍</span>
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 扫脸转换头模数据 */}
        <SwiperSlide className="bg-[#7e4d98]">
          <div className="flex flex-col items-center justify-center h-full w-full p-8 pb-24">
            <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center items-center">
              <div className="text-center mb-12 animate-fadeIn">
                <h2 className="text-4xl text-nowrap font-bold text-white mb-6 tracking-wide">
                  <span className="text-pink-200">🎭</span> 约毛头模生成 <span className="text-pink-200">🎭</span>
                </h2>
                <p className="text-white/90 text-2xl font-light leading-relaxed">
                  只需扫一扫你的脸<br />
                  就能生成专属的约毛头模数据<br />
                  <span className="text-pink-200 text-xl">(≧∇≦)ﾉ</span>
                </p>
              </div>
              <div className="relative flex justify-center items-center w-full">
                <div className="flex justify-center items-center gap-8">
                  <div className="transform opacity-0 translate-y-8 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                    <div className="relative w-[280px] h-[373px] rounded-2xl overflow-hidden group shadow-2xl">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                          src="/face-model.png"
                          alt="扫脸界面"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                        <span className="text-white text-xl font-medium">扫脸界面</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 照片动漫化展示 */}
        <SwiperSlide className="bg-[#2C3E50]">
          <div className="flex flex-col items-center justify-center h-full w-full p-8 pb-24">
            <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center items-center">
              <div className="text-center mb-12 animate-fadeIn">
                <h2 className="text-4xl text-nowrap font-bold text-white mb-6 tracking-wide">
                  <span className="text-pink-300">✨</span> Cos 照片动漫化 <span className="text-pink-300">✨</span>
                </h2>
                <p className="text-white/90 text-2xl font-light leading-relaxed">
                  用魔法般的 AI 技术<br />
                  将你的 Cos 照片变成可爱的动漫风格<br />
                  <span className="text-pink-300 text-xl">(๑•̀ㅂ•́)و✧</span>
                </p>
              </div>
              <div className="relative flex justify-center items-center w-full">
                <div className="flex justify-center items-center gap-8">
                  <div className="transform animate-slideUp" style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-[280px] h-[373px] rounded-2xl overflow-hidden group shadow-2xl">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                          src="/qinghuan.jpg"
                          alt="原始照片"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                        <span className="text-white text-xl font-medium">原图</span>
                      </div>
                    </div>
                  </div>
                  <div className="transform translate-y-24 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                    <div className="relative w-[280px] h-[373px] rounded-2xl overflow-hidden group shadow-2xl">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                          src="/qinghuan-animate.png"
                          alt="动漫化效果"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                        <span className="text-white text-xl font-medium">动漫化</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
