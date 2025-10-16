"use client";
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    '공장 모니터링 시스템',
    '관제 시스템',
    'B2B 기술지원',
    '시스템 통합',
    '컨설팅',
    '기타'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 문의',
      content: '010-5264-8027',
      description: '평일 09:00 ~ 18:00'
    },
    {
      icon: Mail,
      title: '이메일 문의',
      content: 'limyoungmu@hanmail.net',
      description: '24시간 접수 가능'
    },
    {
      icon: MapPin,
      title: '본사 주소',
      content: '충남 아산시 배방읍 광정로 210, B212호',
      description: '(31471) 본사'
    },
    {
      icon: MapPin,
      title: '지사 주소',
      content: '울산광역시 남구 화합로 162, 나인파크 906호',
      description: '(44715) 울산지사'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 Firebase 연동 시 여기에 데이터 전송 로직 구현
    // 현재는 UI만 구현
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // 3초 후 폼 초기화
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  return (
  <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white" aria-label="문의하기 섹션" role="region">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" tabIndex={-1}>
        
        {/* 섹션 헤더 */}
  <div className="text-center mb-10 sm:mb-16" role="heading" aria-level={2}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" tabIndex={0}>
            <span className="text-gradient">문의하기</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto" tabIndex={0}>
            만송시스템의 전문가들이 고객님의 비즈니스 혁신을 위한 최적의 솔루션을 제안해드립니다.
          </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" role="presentation">
          
          {/* 연락처 정보 */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">연락처 정보</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-colors" role="listitem" aria-label={info.title} tabIndex={0}>
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                          <IconComponent size={18} className="text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                      </div>
                      <p className="text-gray-900 font-medium mb-0.5 sm:mb-1 text-xs sm:text-base">{info.content}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 운영 시간 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 text-white" aria-label="운영 시간" role="region" tabIndex={0}>
              <div className="flex items-center mb-2 sm:mb-4">
                <Clock size={20} className="mr-2 sm:mr-3" />
                <h3 className="text-base sm:text-xl font-bold">운영 시간</h3>
              </div>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-base">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span className="font-medium">09:00 ~ 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span className="font-medium">09:00 ~ 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일 및 공휴일</span>
                  <span className="font-medium">휴무</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-blue-300">
                <p className="text-blue-100 text-xs sm:text-sm">
                  긴급 상황 시 24시간 이메일 문의 가능
                </p>
              </div>
            </div>

            {/* 빠른 연락 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6" aria-label="빠른 연락" role="region" tabIndex={0}>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-4">빠른 연락</h3>
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href="tel:010-5264-8027"
                  className="flex items-center p-2 sm:p-3 bg-white rounded-lg hover:bg-green-50 transition-colors group focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
                  aria-label="직접 전화하기"
                  tabIndex={0}
                >
                  <Phone size={18} className="text-green-600 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-900 text-xs sm:text-base">직접 전화하기</span>
                </a>
                <a 
                  href="mailto:limyoungmu@hanmail.net"
                  className="flex items-center p-2 sm:p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
                  aria-label="이메일 보내기"
                  tabIndex={0}
                >
                  <Mail size={18} className="text-blue-600 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-900 text-xs sm:text-base">이메일 보내기</span>
                </a>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8" aria-label="온라인 문의 폼" role="form" tabIndex={0}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">온라인 문의</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">문의가 접수되었습니다!</h4>
                <p className="text-gray-600 mb-4">
                  빠른 시일 내에 담당자가 연락드리겠습니다.
                </p>
                <p className="text-sm text-gray-500">
                  평균 응답 시간: 2-4시간 (평일 기준)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" aria-label="문의 폼" autoComplete="on">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      이름 *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-label="이름"
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-xs sm:text-base focus:outline-blue-600"
                        placeholder="홍길동"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      회사명
                    </label>
                    <div className="relative">
                      <Building size={18} className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        aria-label="회사명"
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-xs sm:text-base focus:outline-blue-600"
                        placeholder="(주)회사명"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      이메일 *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-label="이메일"
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-xs sm:text-base focus:outline-blue-600"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      연락처 *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-label="연락처"
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-xs sm:text-base focus:outline-blue-600"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    관심 서비스
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    aria-label="관심 서비스"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-xs sm:text-base focus:outline-blue-600"
                  >
                    <option value="">서비스를 선택해주세요</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    문의 내용 *
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-2 sm:left-3 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      aria-label="문의 내용"
                      rows={5}
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none text-xs sm:text-base focus:outline-blue-600"
                      placeholder="문의하시고 싶은 내용을 자세히 적어주세요..."
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-blue-800">
                    <strong>개인정보 수집 및 이용 동의</strong><br />
                    입력해주신 정보는 문의 응답을 위해서만 사용되며, 
                    관련 법령에 따라 안전하게 관리됩니다.
                  </p>
                  <div className="mt-1 sm:mt-2 text-xs text-blue-600">
                    자세한 내용은 <a href="/privacy" className="underline hover:text-blue-800">개인정보 처리방침</a> 및 <a href="/terms" className="underline hover:text-blue-800">이용약관</a>을 참고해주세요.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  aria-disabled={!isFormValid || isSubmitting}
                  aria-label="문의 보내기"
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium transition-all flex items-center justify-center text-xs sm:text-base focus:outline-blue-600 focus:ring-2 focus:ring-blue-600 ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-1 sm:mr-2" />
                      문의 보내기
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 하단 안내 */}
  <div className="mt-10 sm:mt-16 text-center" aria-label="문의 처리 프로세스" role="region" tabIndex={0}>
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8">
            <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">문의 처리 프로세스</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-xs sm:text-base">1</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">문의 접수</h4>
                <p className="text-xs sm:text-sm text-gray-600">온라인 문의 폼 또는 전화</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-xs sm:text-base">2</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">상담 진행</h4>
                <p className="text-xs sm:text-sm text-gray-600">전문가 배정 및 상담</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-xs sm:text-base">3</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">제안서 작성</h4>
                <p className="text-xs sm:text-sm text-gray-600">맞춤형 솔루션 제안</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-xs sm:text-base">4</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">프로젝트 시작</h4>
                <p className="text-xs sm:text-sm text-gray-600">계약 체결 및 진행</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;