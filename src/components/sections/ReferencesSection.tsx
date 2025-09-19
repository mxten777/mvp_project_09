'use client';

import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Shield, Factory, Truck, Building } from 'lucide-react';

const ReferencesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      name: '제조업',
      icon: Factory,
      color: 'blue',
      problem: '생산 라인 자동화 부족, 품질관리 시스템 노후화',
      solution: '통합 생산관리 시스템 + 자동화 솔루션 구축',
      results: [
        { label: '생산성 향상', value: '35%', icon: TrendingUp },
        { label: '품질 개선', value: '28%', icon: Shield },
        { label: '운영비 절감', value: '22%', icon: DollarSign }
      ]
    },
    {
      name: '물류/유통',
      icon: Truck,
      color: 'green',
      problem: '재고관리 비효율, 배송 추적 시스템 부재',
      solution: '통합 물류관리 시스템 + 실시간 추적 솔루션',
      results: [
        { label: '재고 효율성', value: '40%', icon: TrendingUp },
        { label: '배송 정확도', value: '95%', icon: Clock },
        { label: '비용 절감', value: '18%', icon: DollarSign }
      ]
    },
    {
      name: '공공기관',
      icon: Building,
      color: 'purple',
      problem: '업무 프로세스 복잡, 데이터 관리 분산',
      solution: '업무 통합 시스템 + 데이터 표준화 플랫폼',
      results: [
        { label: '업무 효율성', value: '45%', icon: TrendingUp },
        { label: '처리 시간 단축', value: '50%', icon: Clock },
        { label: '관리비 절감', value: '25%', icon: DollarSign }
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
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            검증된 <span className="text-gradient">솔루션 성과</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 산업 분야에서 입증된 만송시스템 솔루션의 실제 성과를 확인해보세요.
          </p>
        </div>

        {/* 산업별 탭 */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedIndustry === index
                      ? `${getColorClasses(industry.color)} border`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 선택된 산업의 성과 표 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 문제와 해결방법 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">고객 문제</h3>
                <p className="text-gray-600 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  {industries[selectedIndustry].problem}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">해결 방법</h3>
                <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  {industries[selectedIndustry].solution}
                </p>
              </div>
            </div>

            {/* 주요 성과 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">주요 성과</h3>
              <div className="space-y-4">
                {industries[selectedIndustry].results.map((result, idx) => {
                  const IconComponent = result.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent size={20} className="text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{result.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 스토리텔링 섹션 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* 스토리 내용 */}
            <div className="lg:col-span-2 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{successStory.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {successStory.content}
                </p>
              </div>
              
              {/* 인용문 */}
              <blockquote className="border-l-4 border-blue-400 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <p className="text-gray-800 italic text-lg mb-2">
                  "{successStory.quote}"
                </p>
                <cite className="text-blue-600 font-medium">
                  - {successStory.author}
                </cite>
              </blockquote>
            </div>

            {/* 수치 개선 현황 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
              <h4 className="text-xl font-bold mb-6">성과 지표</h4>
              <div className="space-y-6">
                {successStory.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-sm font-medium text-blue-100">{metric.label}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-xs text-blue-200 mb-1">이전</div>
                        <div className="text-lg font-bold">{metric.before}</div>
                      </div>
                      <div className="text-blue-200">→</div>
                      <div className="text-center">
                        <div className="text-xs text-blue-200 mb-1">이후</div>
                        <div className="text-lg font-bold text-yellow-300">{metric.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            귀하의 비즈니스도 혁신할 수 있습니다
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            무료 진단을 통해 귀하의 현황을 분석하고 맞춤형 솔루션을 제안해드립니다.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
            무료 진단 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;