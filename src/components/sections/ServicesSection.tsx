'use client';

import { useState } from 'react';
import { Monitor, Shield, Users, ChevronRight, Check, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'factory-monitoring',
      title: '공장 모니터링',
      subtitle: '실시간 공정 모니터링 및 데이터 시각화',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-500',
      bgAccent: 'bg-blue-50',
      textAccent: 'text-blue-600',
      borderAccent: 'border-blue-200',
      features: [
        '실시간 생산 데이터 수집 및 분석',
        '공정별 상태 모니터링 대시보드',
        '이상 상황 자동 알림 시스템',
        '생산성 분석 및 리포팅',
        '모바일 연동 원격 모니터링',
      ],
      benefits: [
        { label: '생산 효율성', value: '35%', suffix: '향상' },
        { label: '품질 개선', value: '28%', suffix: '증가' },
        { label: '다운타임', value: '40%', suffix: '감소' },
      ],
      description:
        '최신 IoT 기술과 데이터 분석을 활용하여 공장의 모든 공정을 실시간으로 모니터링하고 최적화할 수 있는 통합 솔루션입니다.',
    },
    {
      id: 'control-system',
      title: '관제 시스템',
      subtitle: '통합 모니터링 및 제어 시스템 구축',
      icon: Shield,
      gradient: 'from-emerald-500 to-teal-500',
      bgAccent: 'bg-emerald-50',
      textAccent: 'text-emerald-600',
      borderAccent: 'border-emerald-200',
      features: [
        '중앙 통합 관제센터 구축',
        '다중 시설 통합 모니터링',
        '자동화 제어 시스템 연동',
        '비상 상황 대응 체계',
        '운영 데이터 통합 분석',
      ],
      benefits: [
        { label: '운영 효율성', value: '42%', suffix: '향상' },
        { label: '대응 시간', value: '60%', suffix: '단축' },
        { label: '관리 비용', value: '25%', suffix: '절감' },
      ],
      description:
        '여러 시설과 시스템을 하나의 통합 관제센터에서 효율적으로 모니터링하고 제어할 수 있는 고도화된 관제 솔루션입니다.',
    },
    {
      id: 'b2b-support',
      title: 'B2B 기술지원',
      subtitle: '맞춤형 소프트웨어 개발 및 기술 컨설팅',
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
      bgAccent: 'bg-violet-50',
      textAccent: 'text-violet-600',
      borderAccent: 'border-violet-200',
      features: [
        '고객 요구사항 분석 및 설계',
        '맞춤형 소프트웨어 개발',
        '시스템 통합 및 연동',
        '기술 교육 및 지원',
        '지속적 유지보수 서비스',
      ],
      benefits: [
        { label: '개발 기간', value: '30%', suffix: '단축' },
        { label: '고객 만족도', value: '98%', suffix: '달성' },
        { label: '기술 지원', value: '24/7', suffix: '제공' },
      ],
      description:
        '고객의 특별한 요구사항에 맞춘 맞춤형 소프트웨어 개발과 전문적인 기술 컨설팅을 통해 비즈니스 성공을 지원합니다.',
    },
  ];

  const currentService = services[activeService];
  const IconComponent = currentService.icon;

  return (
    <section id="solutions" className="section-padding bg-slate-50/50" aria-label="서비스 및 솔루션">
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
            <Zap size={14} />
            핵심 솔루션
          </div>
          <h2 className="section-title mb-6">
            비즈니스를 위한{' '}
            <span className="gradient-text">스마트 솔루션</span>
          </h2>
          <p className="section-subtitle mx-auto">
            만송시스템의 전문적인 기술력으로 고객의 비즈니스 혁신을 이끌어갑니다.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Tab Buttons */}
          <motion.div
            className="lg:col-span-4 space-y-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = activeService === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full p-5 sm:p-6 rounded-2xl transition-all duration-500 text-left group ${
                    isActive
                      ? `bg-white shadow-card-hover border border-slate-100 scale-[1.02]`
                      : 'bg-transparent hover:bg-white/60 border border-transparent hover:border-slate-100'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${service.gradient} text-white shadow-lg`
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                      }`}
                    >
                      <ServiceIcon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold mb-1 transition-colors duration-300 ${
                          isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{service.subtitle}</p>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`mt-1 transition-all duration-300 flex-shrink-0 ${
                        isActive ? 'rotate-90 text-primary-500' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Service Detail Panel */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-card overflow-hidden"
              >
                {/* Service Hero */}
                <div className={`relative p-8 sm:p-10 bg-gradient-to-br ${currentService.gradient}`}>
                  <div className="relative z-10 text-white">
                    <IconComponent size={40} className="mb-4 opacity-90" />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{currentService.title}</h3>
                    <p className="text-white/80 text-lg">{currentService.subtitle}</p>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
                    <div className="absolute right-8 top-8 w-32 h-32 border-2 border-white rounded-full" />
                    <div className="absolute right-16 bottom-8 w-20 h-20 border-2 border-white rounded-full" />
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  {/* Description */}
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                        주요 기능
                      </h4>
                      <ul className="space-y-3">
                        {currentService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className={`w-5 h-5 rounded-full bg-gradient-to-br ${currentService.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <Check size={12} className="text-white" strokeWidth={3} />
                            </div>
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                        기대 효과
                      </h4>
                      <div className="space-y-4">
                        {currentService.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className={`${currentService.bgAccent} rounded-xl p-4 border ${currentService.borderAccent}`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-slate-700 font-medium">{benefit.label}</span>
                              <div className="text-right">
                                <span className={`text-xl font-bold ${currentService.textAccent}`}>
                                  {benefit.value}
                                </span>
                                <span className="text-slate-400 text-sm ml-1">{benefit.suffix}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-8 border-t border-slate-100">
                    <button className="btn-primary text-sm">
                      상세 보기
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                    <button className="btn-secondary text-sm">문의하기</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-violet-700 p-10 sm:p-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-white rounded-full blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              30년간 축적된 경험과 전문성으로 고객에게 최적의 솔루션을 제안해드립니다.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
              맞춤 상담 신청하기
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;