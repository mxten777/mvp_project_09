'use client';

import { useState } from 'react';
import { Users, Award, Target, Lightbulb, User, Building2, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('company');

  const team = [
    {
      name: '임영무',
      position: '대표이사',
      role: 'Founder & CEO',
      description: '산업용 시스템 전문가. 만송시스템 설립자로 ABB 파트너십을 통한 혁신을 주도.',
      expertise: ['스마트팩토리', '관제 시스템', '산업 자동화', '시스템 통합'],
      experience: '30+',
    },
    {
      name: '임동근',
      position: 'CTO',
      role: '개발총괄',
      description: 'IoT, B2B 소프트웨어 아키텍트. 시스템 설계 및 개발 리드.',
      expertise: ['IoT 시스템', 'B2B 소프트웨어', '시스템 아키텍처', '개발 관리'],
      experience: '12+',
    },
    {
      name: '박수진',
      position: '팀장',
      role: '프로젝트 매니저',
      description: '프로젝트 관리 및 고객 커뮤니케이션 담당.',
      expertise: ['프로젝트 관리', '고객 관계', '품질 관리', '팀 리더십'],
      experience: '8+',
    },
  ];

  const companyValues = [
    {
      icon: Target,
      title: '전문성',
      description: '30년간의 산업용 시스템 경험을 바탕으로 최고 수준의 전문 서비스를 제공합니다.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: '신뢰성',
      description: '고객과의 약속을 지키며, 안정적이고 지속가능한 솔루션을 구축합니다.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Lightbulb,
      title: '혁신성',
      description: '최신 기술 트렌드를 반영하여 고객의 비즈니스 혁신을 이끌어갑니다.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Award,
      title: '품질',
      description: '철저한 품질 관리와 체계적인 프로세스로 최상의 결과물을 보장합니다.',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const companyHistory = [
    { year: '2021', event: '만송시스템 설립', description: 'ABB코리아 파트너십 체결 및 사업 시작' },
    { year: '2022', event: '첫 번째 프로젝트 수주', description: '삼성전자 천안사업장 모니터링 시스템 구축' },
    { year: '2023', event: '기술력 안정화', description: '주요 고객 확보 및 직원 충원' },
    { year: '2024', event: '사업 확장', description: '50+ 프로젝트 완료 및 강소기업 지정' },
  ];

  const companyStats = [
    { label: '설립연도', value: '2021', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: '완료 프로젝트', value: '50+', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: '협력 고객사', value: '35+', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
    { label: '고객 만족도', value: '98%', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/50" aria-label="회사소개">
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
            <Building2 size={14} />
            회사소개
          </div>
          <h2 className="section-title mb-6">
            신뢰할 수 있는 <span className="gradient-text">기술 파트너</span>
          </h2>
          <p className="section-subtitle mx-auto">
            만송시스템은 산업용 시스템 전문가들이 모여 고객의 성공을 위해 최선을 다하는 기술 파트너입니다.
          </p>
        </motion.div>

        {/* Tab Menu */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-card border border-slate-100 gap-1">
            {[
              { key: 'company', label: '회사 정보' },
              { key: 'team', label: '팀 소개' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-primary-600 text-white shadow-premium'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Company Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'company' && (
            <motion.div
              key="company"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-20"
            >
              {/* Company Overview + Stats */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">만송시스템(주)</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-6">
                      2021년 설립된 만송시스템은 산업용 시스템 통합 및 솔루션 전문기업으로,
                      고객의 비즈니스 혁신과 성장을 지원하는 신뢰할 수 있는 기술 파트너입니다.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      스마트팩토리부터 관제 시스템, B2B 기술지원까지 다양한 분야에서
                      축적된 경험과 전문성을 바탕으로 고객 맞춤형 솔루션을 제공합니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {companyStats.map((stat, i) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={i}
                          className={`${stat.bg} rounded-2xl p-6 text-center border border-slate-100/50`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <StatIcon size={20} className={`${stat.color} mx-auto mb-3`} />
                          <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                          <div className="text-sm text-slate-500">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">회사 연혁</h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-violet-500" />
                    <div className="space-y-8">
                      {companyHistory.map((item, index) => (
                        <motion.div
                          key={index}
                          className="relative flex gap-8"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          {/* Dot */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-card flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-600">{item.year}</span>
                            </div>
                          </div>
                          {/* Content */}
                          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 flex-1 hover:shadow-card-hover transition-all duration-300">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{item.event}</h4>
                            <p className="text-slate-500">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">핵심 가치</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {companyValues.map((value, index) => {
                    const ValIcon = value.icon;
                    return (
                      <motion.div
                        key={index}
                        className="card-premium p-8 text-center group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <ValIcon size={24} className="text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">{value.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Office Locations */}
              <div className="grid lg:grid-cols-2 gap-6">
                {[
                  {
                    title: '본사',
                    address: '(31471) 충남 아산시 배방읍 광정로 210, B212호',
                    phone: '010-5264-8027',
                    email: 'limyoungmu@hanmail.net',
                    gradient: 'from-primary-500 to-primary-600',
                  },
                  {
                    title: '울산지사',
                    address: '(44715) 울산광역시 남구 화합로 162, 나인파크 906호',
                    phone: '010-5264-8027',
                    email: 'limyoungmoo@mansong.kr',
                    gradient: 'from-emerald-500 to-emerald-600',
                  },
                ].map((office, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`bg-gradient-to-r ${office.gradient} px-6 py-4`}>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        <MapPin size={18} />
                        {office.title}
                      </h4>
                    </div>
                    <div className="p-6 space-y-3 text-sm">
                      <div className="flex items-start gap-3 text-slate-600">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0 text-slate-400" />
                        {office.address}
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <Phone size={16} className="flex-shrink-0 text-slate-400" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <Mail size={16} className="flex-shrink-0 text-slate-400" />
                        {office.email}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Team Header */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">만송시스템 팀 구성</h3>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  각 분야의 전문가들이 모여 고객의 성공을 위해 최선을 다하는 팀입니다.
                </p>
              </div>

              {/* Team Members */}
              <div className="grid lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    className="card-premium overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Profile Header */}
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center overflow-hidden">
                      {/* Decorative */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -right-8 -top-8 w-32 h-32 border border-white rounded-full" />
                        <div className="absolute -left-4 -bottom-4 w-24 h-24 border border-white rounded-full" />
                      </div>
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                          <User size={36} className="text-white/80" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                        <p className="text-primary-300 font-medium">{member.position}</p>
                        <p className="text-slate-500 text-sm">{member.role}</p>
                      </div>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                      <p className="text-slate-500 mb-5 leading-relaxed">{member.description}</p>
                      <div className="mb-5">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">전문 분야</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-400">경력</span>
                          <div className="text-lg font-bold text-primary-600">{member.experience}<span className="text-sm text-slate-400 ml-1">년</span></div>
                        </div>
                        <div className="flex gap-2">
                          <button className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-colors text-slate-400" aria-label={`${member.name} 이메일`}>
                            <Mail size={16} />
                          </button>
                          <button className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-colors text-slate-400" aria-label={`${member.name} 전화`}>
                            <Phone size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Team Culture Banner */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-violet-700 p-10 sm:p-14 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -left-20 -top-20 w-60 h-60 bg-white rounded-full blur-3xl" />
                  <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">함께 만들어가는 성공</h3>
                  <p className="text-primary-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                    만송시스템은 개인의 전문성과 팀워크를 바탕으로 고객의 비즈니스 혁신을 이끌어갑니다.
                  </p>
                  <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    {[
                      { value: '15+', label: '년 평균 경력' },
                      { value: '100%', label: '팀워크' },
                      { value: '24/7', label: '고객 지원' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{item.value}</div>
                        <div className="text-primary-200 text-sm">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;