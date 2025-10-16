"use client";
'use client';

import { useState } from 'react';
import { Monitor, Clock, Users, ChevronRight, Check, Star } from 'lucide-react';
import Image from 'next/image';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'factory-monitoring',
      title: '공장 모니터링',
      subtitle: '실시간 공정 모니터링 및 데이터 시각화 솔루션',
      icon: Monitor,
      color: 'blue',
      image: '/images/factory-monitoring.jpg', // 실제 이미지 경로
      features: [
        '실시간 생산 데이터 수집 및 분석',
        '공정별 상태 모니터링 대시보드',
        '이상 상황 자동 알림 시스템',
        '생산성 분석 및 리포팅',
        '모바일 연동 원격 모니터링'
      ],
      benefits: [
        { label: '생산 효율성', value: '35% 향상' },
        { label: '품질 개선', value: '28% 증가' },
        { label: '다운타임', value: '40% 감소' }
      ],
      description: '최신 IoT 기술과 데이터 분석을 활용하여 공장의 모든 공정을 실시간으로 모니터링하고 최적화할 수 있는 통합 솔루션입니다.'
    },
    {
      id: 'control-system',
      title: '관제 시스템',
      subtitle: '통합 모니터링 및 제어 시스템 구축',
      icon: Clock,
      color: 'green',
      image: '/images/control-system.jpg', // 실제 이미지 경로
      features: [
        '중앙 통합 관제센터 구축',
        '다중 시설 통합 모니터링',
        '자동화 제어 시스템 연동',
        '비상 상황 대응 체계',
        '운영 데이터 통합 분석'
      ],
      benefits: [
        { label: '운영 효율성', value: '42% 향상' },
        { label: '대응 시간', value: '60% 단축' },
        { label: '관리 비용', value: '25% 절감' }
      ],
      description: '여러 시설과 시스템을 하나의 통합 관제센터에서 효율적으로 모니터링하고 제어할 수 있는 고도화된 관제 솔루션입니다.'
    },
    {
      id: 'b2b-support',
      title: 'B2B 기술지원',
      subtitle: '맞춤형 소프트웨어 개발 및 기술 컨설팅',
      icon: Users,
      color: 'purple',
      image: '/images/b2b-support.jpg', // 실제 이미지 경로
      features: [
        '고객 요구사항 분석 및 설계',
        '맞춤형 소프트웨어 개발',
        '시스템 통합 및 연동',
        '기술 교육 및 지원',
        '지속적 유지보수 서비스'
      ],
      benefits: [
        { label: '개발 기간', value: '30% 단축' },
        { label: '고객 만족도', value: '98% 달성' },
        { label: '기술 지원', value: '24/7 제공' }
      ],
      description: '고객의 특별한 요구사항에 맞춘 맞춤형 소프트웨어 개발과 전문적인 기술 컨설팅을 통해 비즈니스 성공을 지원합니다.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { 
        bg: 'bg-blue-100', 
        text: 'text-blue-700', 
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600'
      },
      green: { 
        bg: 'bg-green-100', 
        text: 'text-green-700', 
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600'
      },
      purple: { 
        bg: 'bg-purple-100', 
        text: 'text-purple-700', 
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const currentService = services[activeService];
  const IconComponent = currentService.icon;
  const colorClasses = getColorClasses(currentService.color);

  return (
  <section id="solutions" className="py-10 sm:py-16 md:py-24 bg-white" aria-label="서비스 및 솔루션">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">서비스 & 솔루션</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            만송시스템의 전문적인 기술력으로 고객의 비즈니스 혁신을 이끌어갑니다.
          </p>
        </div>

        {/* 서비스 선택 탭 */}
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="md:w-1/3 space-y-3 md:space-y-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const serviceColors = getColorClasses(service.color);
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full p-4 sm:p-6 rounded-xl transition-all duration-300 text-left group font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    activeService === index
                      ? `${serviceColors.bg} ${serviceColors.border} border-2 shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  role="tab"
                  aria-selected={activeService === index}
                  aria-label={`${service.title} 상세 보기`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                      activeService === index 
                        ? `bg-gradient-to-r ${serviceColors.gradient} text-white` 
                        : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                    }`}>
                      <ServiceIcon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xs sm:text-base font-bold mb-1 sm:mb-2 tracking-wide ${
                        activeService === index ? serviceColors.text : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {service.subtitle}
                      </p>
                    </div>
                    <ChevronRight 
                      size={20}
                      className={`transform transition-transform ${
                        activeService === index ? 'rotate-90 text-blue-600' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* 선택된 서비스 상세 정보 */}
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
              
              {/* 서비스 이미지 */}
              <div className="relative h-40 sm:h-64 bg-gradient-to-r from-blue-500 to-purple-600">
                {/* 이미지 플레이스홀더 - 실제 이미지로 교체 가능 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <IconComponent size={64} className="mx-auto mb-2 sm:mb-4 opacity-80" />
                    <h3 className="text-base sm:text-xl font-extrabold">{currentService.title}</h3>
                    <p className="text-blue-100 mt-1 sm:mt-2 text-xs sm:text-base">{currentService.subtitle}</p>
                  </div>
                </div>
                
                {/* 플로팅 지표 */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Star className="text-yellow-300" size={20} />
                    <span className="text-white font-medium text-xs sm:text-base">고객 만족도 98%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-8">
                {/* 서비스 설명 */}
                <p className="text-gray-600 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  
                  {/* 주요 기능 */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-4 tracking-wide">주요 기능</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {currentService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${colorClasses.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-gray-700 text-xs sm:text-base font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 기대 효과 */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-4 tracking-wide">기대 효과</h4>
                    <div className="space-y-3 sm:space-y-4">
                      {currentService.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium text-xs sm:text-base">{benefit.label}</span>
                            <span className={`text-base sm:text-lg font-bold ${colorClasses.text}`}>{benefit.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA 버튼 */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className={`flex-1 bg-gradient-to-r ${colorClasses.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow transition-all text-xs sm:text-base`}>
                      상세보기
                    </button>
                    <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow hover:border-gray-400 transition-colors text-xs sm:text-base">
                      문의하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 text-white text-center mt-8">
          <h3 className="text-base sm:text-xl font-extrabold mb-2 sm:mb-4">맞춤형 솔루션이 필요하신가요?</h3>
          <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-base">
            고객의 특별한 요구사항에 맞춘 완전 맞춤형 솔루션을 제공합니다. 
            30년간 축적된 경험과 전문성으로 직접 상담해드립니다.
          </p>
          <button className="bg-white text-blue-600 px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition-colors text-xs sm:text-base">
            맞춤 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;