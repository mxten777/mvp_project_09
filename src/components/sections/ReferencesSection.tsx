'use client';

import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Shield, Factory, Settings, Award, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReferencesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      name: '화학공장',
      icon: Factory,
      gradient: 'from-blue-500 to-cyan-500',
      problem: '공정 모니터링 비효율, 안전관리 시스템 부재',
      solution: '실시간 공정관제 시스템 + 통합 안전관리 솔루션',
      results: [
        { label: '공정 효율성', value: '42%', icon: TrendingUp, color: 'text-blue-600' },
        { label: '안전사고 감소', value: '78%', icon: Shield, color: 'text-emerald-600' },
        { label: '에너지 절약', value: '25%', icon: DollarSign, color: 'text-amber-600' },
      ],
    },
    {
      name: '철강/금속',
      icon: Settings,
      gradient: 'from-emerald-500 to-teal-500',
      problem: '용광로 온도제어 불안정, 품질 편차 발생',
      solution: '고온공정 관제시스템 + AI 기반 품질예측',
      results: [
        { label: '품질 균일도', value: '45%', icon: TrendingUp, color: 'text-blue-600' },
        { label: '에너지 효율', value: '32%', icon: DollarSign, color: 'text-amber-600' },
        { label: '불량률 감소', value: '68%', icon: Shield, color: 'text-emerald-600' },
      ],
    },
    {
      name: '자동차부품',
      icon: Settings,
      gradient: 'from-violet-500 to-purple-500',
      problem: '라인 동기화 문제, 실시간 품질검사 한계',
      solution: '스마트 생산라인 관제 + 인라인 품질검사 시스템',
      results: [
        { label: '생산성 향상', value: '38%', icon: TrendingUp, color: 'text-blue-600' },
        { label: '품질 향상', value: '52%', icon: Shield, color: 'text-emerald-600' },
        { label: '납기 단축', value: '28%', icon: Clock, color: 'text-violet-600' },
      ],
    },
  ];

  const successStory = {
    title: '중견 제조기업 B사 시스템 통합 사례',
    content:
      '충남 지역의 중견 제조기업 B사는 기존 시스템의 분산으로 인한 비효율성과 데이터 관리의 어려움을 겪고 있었습니다. 만송시스템의 통합 솔루션 도입 후 6개월 만에 전사 시스템이 하나로 통합되었고, 실시간 데이터 기반의 의사결정이 가능해졌습니다.',
    quote:
      '만송시스템의 전문성과 체계적인 접근 방식 덕분에 우리 회사가 완전히 새롭게 태어났습니다.',
    author: 'B사 정보시스템 부장',
    metrics: [
      { label: '시스템 통합도', before: '35%', after: '95%' },
      { label: '업무 효율성', before: '62%', after: '87%' },
      { label: '연간 운영비 절감', before: '—', after: '8억원' },
    ],
  };

  return (
    <section id="references" className="section-padding bg-white" aria-label="성공 사례">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge mx-auto mb-6">
            <Award size={14} />
            검증된 성과
          </div>
          <h2 className="section-title mb-6">
            산업 현장에서 <span className="gradient-text">입증된 솔루션</span>
          </h2>
          <p className="section-subtitle mx-auto">
            다양한 산업 분야에서 실제로 입증된 만송시스템 솔루션의 성과를 확인해보세요.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 gap-1">
            {industries.map((industry, index) => {
              const IconComp = industry.icon;
              const isActive = selectedIndustry === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-card'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <IconComp size={16} />
                  <span className="hidden sm:inline">{industry.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Industry Result */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Problem & Solution */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      고객 문제
                    </span>
                  </div>
                  <p className="text-slate-700 bg-white p-5 rounded-xl border border-slate-100 leading-relaxed">
                    {industries[selectedIndustry].problem}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      해결 방법
                    </span>
                  </div>
                  <p className="text-slate-700 bg-white p-5 rounded-xl border border-primary-100 leading-relaxed">
                    {industries[selectedIndustry].solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    주요 성과
                  </span>
                </div>
                <div className="space-y-4">
                  {industries[selectedIndustry].results.map((result, idx) => {
                    const ResultIcon = result.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-100 hover:shadow-card transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                            <ResultIcon size={20} className={result.color} />
                          </div>
                          <span className="font-medium text-slate-700">{result.label}</span>
                        </div>
                        <span className={`text-2xl font-bold ${result.color}`}>{result.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Success Story */}
        <motion.div
          className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Story Content */}
          <div className="lg:col-span-2 p-8 sm:p-12 bg-white">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
                {successStory.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {successStory.content}
              </p>
            </div>
            {/* Quote */}
            <div className="relative bg-primary-50 rounded-2xl p-6 sm:p-8">
              <Quote size={32} className="text-primary-200 mb-3" />
              <p className="text-slate-700 text-lg italic leading-relaxed mb-4">
                &ldquo;{successStory.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-sm">B</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{successStory.author}</div>
                  <div className="text-sm text-slate-400">고객사</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 text-white flex flex-col justify-center">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
              성과 지표
            </h4>
            <div className="space-y-8">
              {successStory.metrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="text-sm text-slate-400 mb-3">{metric.label}</div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">이전</div>
                      <div className="text-lg font-bold text-slate-400">{metric.before}</div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-primary-500 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full" />
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-primary-400 mb-1">이후</div>
                      <div className="text-lg font-bold text-primary-300">{metric.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            귀하의 비즈니스도 혁신할 수 있습니다
          </h3>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-lg">
            무료 진단을 통해 귀사의 현황을 분석하고 맞춤형 솔루션을 제안해드립니다.
          </p>
          <button className="btn-primary">무료 진단 신청하기</button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection;