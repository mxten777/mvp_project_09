'use client';

import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const [selectedCopy, setSelectedCopy] = useState(0);

  const heroCopies = [
    "산업용 시스템 통합 솔루션으로 고객의 생산성 향상과 효율성 극대화를 실현하는 전문 기업입니다.",
    "첨단 기술과 풍부한 경험을 바탕으로 산업 현장의 복잡한 문제를 해결하는 시스템 전문가입니다.",
    "고객 맞춤형 산업용 솔루션을 통해 비즈니스 혁신과 지속가능한 성장을 지원하는 기술 파트너입니다."
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8">
            {/* 서브 헤드라인 */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              산업용 시스템 통합 솔루션
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-gradient">만송시스템</span>
              <br />신뢰할 수 있는 파트너
            </h1>

            {/* 메인 카피 (선택 가능) */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {heroCopies[selectedCopy]}
              </p>
              
              {/* 카피 선택 버튼 */}
              <div className="flex space-x-2">
                {heroCopies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCopy(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      selectedCopy === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#references"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group"
              >
                성공 사례 보기
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors"
              >
                무료 상담 신청
              </Link>
            </div>

            {/* 통계 정보 */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">년간 경험</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">고객 만족도</div>
              </div>
            </div>
          </div>

          {/* 이미지/비주얼 콘텐츠 */}
          <div className="relative">
            {/* 메인 이미지 플레이스홀더 */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                {/* 동영상 재생 버튼 */}
                <button className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all group">
                  <Play size={32} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* 플로팅 카드들 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-sm font-medium text-gray-900">실시간 모니터링</div>
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-xs text-gray-500">장비 가동률</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-sm font-medium text-gray-900">품질 예측</div>
                <div className="text-2xl font-bold text-blue-600">99.2%</div>
                <div className="text-xs text-gray-500">정확도</div>
              </div>
            </div>

            {/* 배경 요소들 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;