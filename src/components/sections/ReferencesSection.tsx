"use client";
'use client';

import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Shield, Factory, Settings } from 'lucide-react';

const ReferencesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      name: '화학공장',
      icon: Factory,
      color: 'blue',
      problem: '공정 모니터링 비효율, 안전관리 시스템 부재',
      solution: '실시간 공정관제 시스템 + 통합 안전관리 솔루션',
      results: [
        { label: '공정 효율성', value: '42%', icon: TrendingUp },
        { label: '안전사고 감소', value: '78%', icon: Shield },
        { label: '에너지 절약', value: '25%', icon: DollarSign }
      ]
    },
    {
      name: '철강/금속',
      icon: Settings,
      color: 'green',
      problem: '용광로 온도제어 불안정, 품질 편차 발생',
      solution: '고온공정 관제시스템 + AI 기반 품질예측',
      results: [
        { label: '품질 균일도', value: '45%', icon: TrendingUp },
        { label: '에너지 효율', value: '32%', icon: DollarSign },
        { label: '불량률 감소', value: '68%', icon: Shield }
      ]
    },
    {
      name: '자동차부품',
      icon: Settings,
      color: 'purple',
      problem: '라인 동기화 문제, 실시간 품질검사 한계',
      solution: '스마트 생산라인 관제 + 인라인 품질검사 시스템',
      results: [
        { label: '생산성 향상', value: '38%', icon: TrendingUp },
        { label: '품질 향상', value: '52%', icon: Shield },
        { label: '납기 단축', value: '28%', icon: Clock }
      ]
    }
  ];

  const successStory = {
    title: '중견 제조기업 B사 시스템 통합 사례',
    content: `충남 지역의 중견 제조기업 B사는 기존 시스템의 분산으로 인한 비효율성과 데이터 관리의 어려움을 겪고 있었습니다. 만송시스템의 통합 솔루션 도입 후 6개월 만에 전사 시스템이 하나로 통합되었고, 실시간 데이터 기반의 의사결정이 가능해졌습니다. 현재 B사는 연간 8억원의 운영비 절감 효과를 얻으며, 업계 선도기업으로 자리매김했습니다.`,
    quote: '만송시스템의 전문성과 체계적인 접근 방식 덕분에 우리 회사가 완전히 새롭게 태어났습니다.',
    author: 'B사 정보시스템 부장',
    metrics: [
      { label: '시스템 통합도', before: '35%', after: '95%' },
      { label: '업무 효율성', before: '62%', after: '87%' },
      { label: '연간 운영비 절감', before: '-', after: '8억원' }
    ]
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
  <section id="references" className="py-10 sm:py-16 md:py-24 bg-gray-50" aria-label="성공 사례 및 산업별 성과">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 섹션 헤더 */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            검증된 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">솔루션 성과</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업 분야에서 입증된 만송시스템 솔루션의 실제 성과를 확인해보세요.
          </p>
        </div>

        {/* 산업별 탭 */}
  <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border overflow-x-auto">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    selectedIndustry === index
                      ? `${getColorClasses(industry.color)} border`
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  role="tab"
                  aria-selected={selectedIndustry === index}
                  aria-label={`${industry.name} 성과 보기`}
                >
                  <IconComponent size={20} />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 선택된 산업의 성과 표 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-10 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* 문제와 해결방법 */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">고객 문제</h3>
                <p className="text-gray-600 bg-red-50 p-3 sm:p-4 rounded-xl border-l-4 border-red-400 text-xs sm:text-base">
                  {industries[selectedIndustry].problem}
                </p>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">해결 방법</h3>
                <p className="text-gray-600 bg-blue-50 p-3 sm:p-4 rounded-xl border-l-4 border-blue-400 text-xs sm:text-base">
                  {industries[selectedIndustry].solution}
                </p>
              </div>
            </div>

            {/* 주요 성과 */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide">주요 성과</h3>
              <div className="space-y-3 sm:space-y-4">
                {industries[selectedIndustry].results.map((result, idx) => {
                  const IconComponent = result.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <IconComponent size={20} className="text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-900 text-xs sm:text-base">{result.label}</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-blue-600">{result.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 스토리텔링 섹션 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* 스토리 내용 */}
            <div className="md:col-span-2 p-4 sm:p-8">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 sm:mb-4">{successStory.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base">
                  {successStory.content}
                </p>
              </div>
              {/* 인용문 */}
              <blockquote className="border-l-4 border-blue-400 pl-4 sm:pl-6 py-3 sm:py-4 bg-blue-50 rounded-r-xl">
                <p className="text-gray-800 italic text-xs sm:text-lg mb-1 sm:mb-2">
                  "{successStory.quote}"
                </p>
                <cite className="text-blue-600 font-semibold text-xs sm:text-base">
                  - {successStory.author}
                </cite>
              </blockquote>
            </div>

            {/* 수치 개선 현황 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-8 text-white">
              <h4 className="text-xs sm:text-sm font-extrabold mb-4 sm:mb-6">성과 지표</h4>
              <div className="space-y-4 sm:space-y-6">
                {successStory.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1 sm:space-y-2">
                    <div className="text-xs sm:text-sm font-semibold text-blue-100">{metric.label}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-xs text-blue-200 mb-0.5 sm:mb-1">이전</div>
                        <div className="text-xs sm:text-lg font-extrabold">{metric.before}</div>
                      </div>
                      <div className="text-blue-200">→</div>
                      <div className="text-center">
                        <div className="text-xs text-blue-200 mb-0.5 sm:mb-1">이후</div>
                        <div className="text-xs sm:text-lg font-extrabold text-yellow-300">{metric.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2 sm:mb-4">
            귀하의 비즈니스도 혁신할 수 있습니다
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-base">
            무료 진단을 통해 귀하의 현황을 분석하고 맞춤형 솔루션을 제안해드립니다.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow transition-colors">
            무료 진단 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;