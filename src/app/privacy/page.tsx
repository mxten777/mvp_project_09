import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { Shield, Calendar, User, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "만송시스템(주)의 개인정보 처리방침입니다. 개인정보 수집, 이용, 보관, 파기에 관한 정책을 확인하세요.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const lastUpdated = "2025년 9월 19일";

  return (
    <Layout>
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 헤더 */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">개인정보 처리방침</h1>
            <p className="text-lg text-gray-600 mb-2">만송시스템(주)는 고객님의 개인정보를 소중히 여기고 안전하게 보호합니다.</p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              최종 업데이트: {lastUpdated}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 space-y-8">

              {/* 제1조 개인정보의 처리목적 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제1조 개인정보의 처리목적
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    만송시스템(주)(이하 &ldquo;회사&rdquo;)는 다음의 목적을 위하여 개인정보를 처리합니다. 
                    처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                    이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-bold text-blue-900 mb-2">처리목적</h3>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>서비스 문의 및 상담 응답</li>
                      <li>고객 지원 서비스 제공</li>
                      <li>서비스 개선을 위한 분석</li>
                      <li>법적 의무 이행</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 제2조 개인정보의 처리 및 보유기간 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제2조 개인정보의 처리 및 보유기간
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 
                    동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">개인정보 항목</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">보유기간</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">문의 정보 (이름, 연락처, 이메일, 회사명)</td>
                          <td className="px-4 py-3 text-sm text-gray-700">3년 (상담 완료 후)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">접속 로그, IP 주소</td>
                          <td className="px-4 py-3 text-sm text-gray-700">3개월</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 제3조 개인정보의 제3자 제공 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제3조 개인정보의 제3자 제공
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 
                    정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Shield size={20} className="text-green-600 mr-2" />
                      <span className="font-bold text-green-900">개인정보 보호 원칙</span>
                    </div>
                    <p className="text-green-800">
                      현재 회사는 고객의 개인정보를 제3자에게 제공하지 않으며, 
                      향후 제공이 필요한 경우 사전에 동의를 받겠습니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 제4조 개인정보처리의 위탁 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제4조 개인정보처리의 위탁
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-bold text-yellow-900 mb-2">위탁업체 현황</h3>
                    <ul className="list-disc list-inside space-y-1 text-yellow-800">
                      <li>웹 호스팅 서비스: Vercel Inc. (웹사이트 운영)</li>
                      <li>이메일 서비스: Google LLC (Gmail 서비스)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 제5조 정보주체의 권리·의무 및 행사방법 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제5조 정보주체의 권리·의무 및 행사방법
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-blue-900 mb-2">개인정보 권리</h3>
                      <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                        <li>개인정보 처리현황 통지요구</li>
                        <li>개인정보 열람요구</li>
                        <li>개인정보 정정·삭제요구</li>
                        <li>개인정보 처리정지요구</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-bold text-purple-900 mb-2">권리 행사 방법</h3>
                      <div className="space-y-2 text-purple-800 text-sm">
                        <div className="flex items-center">
                          <Mail size={14} className="mr-2" />
                          <span>limyoungmu@hanmail.net</span>
                        </div>
                        <div className="flex items-center">
                          <Phone size={14} className="mr-2" />
                          <span>010-5264-8027</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제6조 개인정보의 파기 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제6조 개인정보의 파기
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                    지체없이 해당 개인정보를 파기합니다.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h3 className="font-bold text-red-900 mb-2">파기 절차 및 방법</h3>
                    <ul className="list-disc list-inside space-y-1 text-red-800">
                      <li>전자적 파일: 기술적 방법을 사용하여 복구 불가능하게 삭제</li>
                      <li>기록물, 인쇄물: 분쇄기로 분쇄하거나 소각</li>
                      <li>파기 시기: 보유기간 만료 즉시 또는 처리목적 달성 후 5일 이내</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 제7조 개인정보의 안전성 확보조치 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제7조 개인정보의 안전성 확보조치
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적·물리적 조치를 하고 있습니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">기술적 조치</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>개인정보 암호화</li>
                        <li>보안프로그램 설치</li>
                        <li>접속기록 보관</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">관리적 조치</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>개인정보 취급자 교육</li>
                        <li>접근권한 제한</li>
                        <li>개인정보보호 담당자 지정</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">물리적 조치</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>전산실 출입통제</li>
                        <li>개인정보 보관 장소 잠금</li>
                        <li>문서보안 강화</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제8조 개인정보보호 담당자 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제8조 개인정보보호 담당자
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 
                    피해구제 등을 위하여 아래와 같이 개인정보보호 담당자를 지정하고 있습니다.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        <User size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">개인정보보호 담당자</h3>
                        <p className="text-gray-600">만송시스템(주) 대표이사 임영무</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Phone size={16} className="text-blue-600 mr-2" />
                        <span>010-5264-8027</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="text-blue-600 mr-2" />
                        <span>limyoungmu@hanmail.net</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제9조 개인정보 처리방침의 변경 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  제9조 개인정보 처리방침의 변경
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    이 개인정보 처리방침은 {lastUpdated}부터 적용됩니다. 
                    개인정보 처리방침이 변경되는 경우 변경사항을 웹사이트에 공지하겠습니다.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium">
                      본 방침에 대한 추가적인 문의사항이 있으시면 언제든지 연락주시기 바랍니다.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-8 text-center">
            <div className="inline-flex space-x-4">
              <Link 
                href="/"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                홈으로 돌아가기
              </Link>
              <Link 
                href="/terms"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                이용약관 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}