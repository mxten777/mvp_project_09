'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    '공장 모니터링 시스템',
    '관제 시스템',
    'B2B 기술지원',
    '시스템 통합',
    '컨설팅',
    '기타',
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 문의',
      content: '010-5264-8027',
      description: '평일 09:00 ~ 18:00',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: '이메일 문의',
      content: 'limyoungmu@hanmail.net',
      description: '24시간 접수 가능',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: '본사',
      content: '충남 아산시 배방읍 광정로 210, B212호',
      description: '(31471)',
      gradient: 'from-violet-500 to-violet-600',
    },
    {
      icon: MapPin,
      title: '울산지사',
      content: '울산광역시 남구 화합로 162, 나인파크 906호',
      description: '(44715)',
      gradient: 'from-amber-500 to-amber-600',
    },
  ];

  const processSteps = [
    { step: '01', title: '문의 접수', desc: '온라인 또는 전화' },
    { step: '02', title: '상담 진행', desc: '전문가 배정' },
    { step: '03', title: '제안서 작성', desc: '맞춤형 솔루션' },
    { step: '04', title: '프로젝트 시작', desc: '계약 및 진행' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  return (
    <section id="contact" className="section-padding bg-slate-50/50" aria-label="문의하기">
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
            <MessageSquare size={14} />
            문의하기
          </div>
          <h2 className="section-title mb-6">
            프로젝트를 <span className="gradient-text">시작하세요</span>
          </h2>
          <p className="section-subtitle mx-auto">
            만송시스템의 전문가들이 고객님의 비즈니스 혁신을 위한 최적의 솔루션을 제안해드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left Column - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon;
                return (
                  <div
                    key={index}
                    className="card-premium p-5 flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                      <InfoIcon size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{info.title}</h4>
                      <p className="text-slate-600 text-sm mt-0.5">{info.content}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Operating Hours */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-primary-400" />
                <h3 className="font-bold">운영 시간</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">평일</span>
                  <span className="font-medium">09:00 ~ 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">토요일</span>
                  <span className="font-medium">09:00 ~ 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">일요일 및 공휴일</span>
                  <span className="font-medium">휴무</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-primary-300 text-xs">긴급 상황 시 24시간 이메일 문의 가능</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a
                href="tel:010-5264-8027"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <Phone size={18} className="text-emerald-600" />
                </div>
                <span className="font-medium text-slate-700">직접 전화하기</span>
                <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="mailto:limyoungmu@hanmail.net"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <span className="font-medium text-slate-700">이메일 보내기</span>
                <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-8">온라인 문의</h3>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">문의가 접수되었습니다!</h4>
                  <p className="text-slate-500 mb-3">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
                  <p className="text-sm text-slate-400">평균 응답 시간: 2~4시간 (평일 기준)</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" autoComplete="on">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        이름 <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm outline-none"
                          placeholder="홍길동"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        회사명
                      </label>
                      <div className="relative">
                        <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm outline-none"
                          placeholder="(주)회사명"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        이메일 <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm outline-none"
                          placeholder="example@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        연락처 <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm outline-none"
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      관심 서비스
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm outline-none appearance-none bg-white"
                    >
                      <option value="">서비스를 선택해주세요</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      문의 내용 <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-4 text-slate-300" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-sm outline-none"
                        placeholder="문의하시고 싶은 내용을 자세히 적어주세요..."
                      />
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                    <p className="text-sm text-primary-800">
                      <strong>개인정보 수집 및 이용 동의</strong>
                    </p>
                    <p className="text-xs text-primary-600 mt-1">
                      입력해주신 정보는 문의 응답을 위해서만 사용되며, 관련 법령에 따라 안전하게 관리됩니다.{' '}
                      <a href="/privacy" className="underline hover:text-primary-800">
                        개인정보 처리방침
                      </a>
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center text-sm ${
                      isFormValid && !isSubmitting
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        문의 보내기
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-8 sm:p-12">
            <h3 className="text-xl font-bold text-slate-900 text-center mb-10">문의 처리 프로세스</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <div key={i} className="text-center relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-200 to-transparent" />
                  )}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-premium relative z-10">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;