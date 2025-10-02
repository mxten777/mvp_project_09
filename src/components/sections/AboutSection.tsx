'use client';

import { useState } from 'react';
import { Users, Award, Target, Lightbulb, User, Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('company');

  const team = [
    {
      name: '임영무',
      position: '대표이사',
      role: 'Founder',
      description: '스마트팩토리, 관제 시스템 전문가. 만송시스템 설립자.',
      expertise: ['스마트팩토리', '관제 시스템', '산업 자동화', '시스템 통합'],
      experience: '15+ 년',
      avatar: '/images/team/ceo.jpg'
    },
    {
      name: '임동근',
      position: 'CTO',
      role: '개발총괄',
      description: 'IoT, B2B 소프트웨어 아키텍트. 시스템 설계 및 개발 리드.',
      expertise: ['IoT 시스템', 'B2B 소프트웨어', '시스템 아키텍처', '개발 관리'],
      experience: '12+ 년',
      avatar: '/images/team/cto.jpg'
    },
    {
      name: '박수진',
      position: '팀장',
      role: '프로젝트 매니저',
      description: '프로젝트 관리 및 고객 커뮤니케이션 담당.',
      expertise: ['프로젝트 관리', '고객 관계', '품질 관리', '팀 리더십'],
      experience: '8+ 년',
      avatar: '/images/team/pm.jpg'
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: '전문성',
      description: '15년 이상의 산업용 시스템 경험을 바탕으로 최고 수준의 전문 서비스를 제공합니다.'
    },
    {
      icon: Users,
      title: '신뢰성',
      description: '고객과의 약속을 지키며, 안정적이고 지속가능한 솔루션을 구축합니다.'
    },
    {
      icon: Lightbulb,
      title: '혁신성',
      description: '최신 기술 트렌드를 반영하여 고객의 비즈니스 혁신을 이끌어갑니다.'
    },
    {
      icon: Award,
      title: '품질',
      description: '철저한 품질 관리와 체계적인 프로세스로 최상의 결과물을 보장합니다.'
    }
  ];

  const companyInfo = {
    founded: '2010년',
    projects: '200+',
    clients: '150+',
    satisfaction: '98%',
    locations: ['충남 아산', '울산광역시']
  };

  return (
  <section id="about" className="py-20 bg-gray-50" aria-label="회사소개 섹션" role="region">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" tabIndex={-1}>
        
        {/* 섹션 헤더 */}
  <div className="text-center mb-16" role="heading" aria-level={2}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4" tabIndex={0}>
            <span className="text-gradient">회사소개</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" tabIndex={0}>
            만송시스템은 산업용 시스템 전문가들이 모여 고객의 성공을 위해 최선을 다하는 기술 파트너입니다.
          </p>
        </div>

        {/* 탭 메뉴 */}
  <div className="flex justify-center mb-12" role="presentation">
          <div className="bg-white rounded-lg p-1 shadow-sm border inline-flex">
            <button
              onClick={() => setActiveTab('company')}
              className={`px-6 py-3 rounded-lg font-medium transition-all focus:outline-blue-600 focus:ring-2 focus:ring-blue-600 ${
                activeTab === 'company'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="회사 정보 탭"
              aria-pressed={activeTab === 'company'}
              tabIndex={0}
            >
              회사 정보
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-lg font-medium transition-all focus:outline-blue-600 focus:ring-2 focus:ring-blue-600 ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="팀 소개 탭"
              aria-pressed={activeTab === 'team'}
              tabIndex={0}
            >
              팀 소개
            </button>
          </div>
        </div>

        {/* 회사 정보 탭 */}
  {activeTab === 'company' && (
          <div className="space-y-16" aria-label="회사 정보" role="region" tabIndex={0}>
            
            {/* 회사 개요 */}
            <div className="bg-white rounded-2xl shadow-lg p-8" aria-label="회사 개요" role="region" tabIndex={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6" tabIndex={0}>만송시스템(주)</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6" tabIndex={0}>
                    2010년 설립된 만송시스템은 산업용 시스템 통합 및 솔루션 전문기업으로, 
                    고객의 비즈니스 혁신과 성장을 지원하는 신뢰할 수 있는 기술 파트너입니다.
                  </p>
                  <p className="text-gray-600 leading-relaxed" tabIndex={0}>
                    스마트팩토리부터 관제 시스템, B2B 기술지원까지 다양한 분야에서 
                    축적된 경험과 전문성을 바탕으로 고객 맞춤형 솔루션을 제공합니다.
                  </p>
                </div>
                
                {/* 회사 통계 */}
                <div className="grid grid-cols-2 gap-6" role="presentation">
                  <div className="text-center p-6 bg-blue-50 rounded-xl" aria-label="설립년도" tabIndex={0}>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.founded}</div>
                    <div className="text-gray-600">설립년도</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl" aria-label="완료 프로젝트" tabIndex={0}>
                    <div className="text-3xl font-bold text-green-600 mb-2">{companyInfo.projects}</div>
                    <div className="text-gray-600">완료 프로젝트</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl" aria-label="협력 고객사" tabIndex={0}>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{companyInfo.clients}</div>
                    <div className="text-gray-600">협력 고객사</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-xl" aria-label="고객 만족도" tabIndex={0}>
                    <div className="text-3xl font-bold text-orange-600 mb-2">{companyInfo.satisfaction}</div>
                    <div className="text-gray-600">고객 만족도</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 핵심 가치 */}
            <div aria-label="핵심 가치" role="region" tabIndex={0}>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" tabIndex={0}>핵심 가치</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                {companyValues.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow" role="listitem" aria-label={value.title} tabIndex={0}>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 사업장 정보 */}
            <div className="bg-white rounded-2xl shadow-lg p-8" aria-label="사업장 현황" role="region" tabIndex={0}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" tabIndex={0}>사업장 현황</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="presentation">
                <div className="bg-blue-50 rounded-xl p-6" aria-label="본사" tabIndex={0}>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">본사</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>주소:</strong> (31471) 충남 아산시 배방읍 광정로 210, B212호</p>
                    <p><strong>전화:</strong> 010-5264-8027</p>
                    <p><strong>이메일:</strong> limyoungmu@hanmail.net</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-6" aria-label="지사" tabIndex={0}>
                  <h4 className="text-xl font-bold text-green-900 mb-4">지사</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>주소:</strong> (44715) 울산광역시 남구 화합로 162, 나인파크 906호</p>
                    <p><strong>전화:</strong> 010-5264-8027</p>
                    <p><strong>이메일:</strong> limyoungmoo@mansong.kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 팀 소개 탭 */}
  {activeTab === 'team' && (
          <div className="space-y-12" aria-label="팀 소개" role="region" tabIndex={0}>
            <div className="text-center mb-12" role="heading" aria-level={3}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4" tabIndex={0}>만송시스템 팀 구성</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" tabIndex={0}>
                각 분야의 전문가들이 모여 고객의 성공을 위해 최선을 다하는 팀입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" role="list">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" role="listitem" aria-label={member.name + ' ' + member.position} tabIndex={0}>
                  
                  {/* 프로필 이미지 영역 */}
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <User size={48} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-blue-100 text-lg">{member.position}</p>
                    <p className="text-blue-200 text-sm">{member.role}</p>
                  </div>

                  {/* 상세 정보 */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-gray-900 mb-2">전문 분야</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-500">경력</span>
                          <div className="font-bold text-blue-600">{member.experience}</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-blue-600 focus:ring-2 focus:ring-blue-600" aria-label={member.name + ' 이메일'} tabIndex={0}>
                            <Mail size={16} className="text-gray-600" />
                          </button>
                          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-blue-600 focus:ring-2 focus:ring-blue-600" aria-label={member.name + ' 전화'} tabIndex={0}>
                            <Phone size={16} className="text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 팀 문화 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center" aria-label="팀 문화" role="region" tabIndex={0}>
              <h3 className="text-2xl font-bold mb-4">함께 만들어가는 성공</h3>
              <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
                만송시스템은 개인의 전문성과 팀워크를 바탕으로 고객의 비즈니스 혁신을 이끌어갑니다. 
                지속적인 학습과 혁신을 통해 더 나은 솔루션을 제공하기 위해 노력합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-200">년 평균 경력</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">팀워크</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">고객 지원</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;