import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import { FileText, Calendar, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "이용약관",
  description: "만송시스템(주) 웹사이트 및 서비스 이용에 관한 약관입니다. 서비스 이용 전 반드시 확인해 주세요.",
  robots: { index: true, follow: true },
};

export default function Terms() {
  const lastUpdated = "2025년 9월 19일";

  return (
    <Layout>
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 헤더 */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={32} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">이용약관</h1>
            <p className="text-lg text-gray-600 mb-2">만송시스템(주) 웹사이트 및 서비스 이용에 관한 약관입니다.</p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              최종 업데이트: {lastUpdated}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 space-y-8">

              {/* 제1조 목적 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제1조 (목적)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    이 약관은 만송시스템(주)(이하 "회사")가 제공하는 웹사이트 및 관련 서비스(이하 "서비스")의 
                    이용과 관련하여 회사와 이용자간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle size={20} className="text-green-600 mr-2" />
                      <span className="font-bold text-green-900">본 약관의 적용 범위</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-green-800">
                      <li>만송시스템(주) 공식 웹사이트 이용</li>
                      <li>온라인 문의 및 상담 서비스</li>
                      <li>회사에서 제공하는 모든 디지털 서비스</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 제2조 정의 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제2조 (정의)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">1. "서비스"</h3>
                      <p className="text-gray-700">
                        회사가 운영하는 웹사이트를 통해 제공하는 모든 서비스를 의미합니다.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">2. "이용자"</h3>
                      <p className="text-gray-700">
                        이 약관에 따라 회사가 제공하는 서비스를 받는 개인 또는 법인을 의미합니다.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">3. "콘텐츠"</h3>
                      <p className="text-gray-700">
                        서비스를 통해 제공되는 모든 정보, 자료, 데이터를 의미합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제3조 약관의 효력 및 변경 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제3조 (약관의 효력 및 변경)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                  </p>
                  <p>
                    2. 회사는 합리적인 사유가 발생할 경우에는 이 약관을 변경할 수 있으며, 
                    약관이 변경되는 경우 변경된 약관의 적용일자 및 변경사유를 명시하여 
                    현행약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle size={20} className="text-blue-600 mr-2" />
                      <span className="font-bold text-blue-900">약관 변경 시 안내</span>
                    </div>
                    <p className="text-blue-800">
                      약관 변경 시 웹사이트 공지사항을 통해 사전 안내드리며, 
                      중요한 변경사항의 경우 이메일로도 개별 통지합니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 제4조 서비스의 제공 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제4조 (서비스의 제공)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>회사는 다음과 같은 서비스를 제공합니다.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-blue-900 mb-2">정보 제공 서비스</h3>
                      <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                        <li>회사 소개 및 서비스 안내</li>
                        <li>기술 정보 및 솔루션 소개</li>
                        <li>고객 사례 및 성과 공유</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-bold text-purple-900 mb-2">상담 서비스</h3>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>온라인 문의 접수</li>
                        <li>전화 및 이메일 상담</li>
                        <li>기술 지원 및 컨설팅</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제5조 서비스 이용 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제5조 (서비스 이용)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>1. 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</p>
                  <p>
                    2. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 
                    서비스의 제공을 일시적으로 중단할 수 있습니다.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle size={20} className="text-yellow-600 mr-2" />
                      <span className="font-bold text-yellow-900">서비스 중단 안내</span>
                    </div>
                    <p className="text-yellow-800">
                      정기 점검이나 시스템 업그레이드로 인한 서비스 중단 시에는 
                      사전에 웹사이트를 통해 공지해드립니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 제6조 이용자의 의무 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제6조 (이용자의 의무)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <XCircle size={20} className="text-red-600 mr-2" />
                        <span className="font-bold text-red-900">금지 행위</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-red-800 text-sm">
                        <li>허위 정보 입력</li>
                        <li>타인의 정보 도용</li>
                        <li>저작권 침해 행위</li>
                        <li>시스템 해킹 시도</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <AlertCircle size={20} className="text-orange-600 mr-2" />
                        <span className="font-bold text-orange-900">주의 사항</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                        <li>욕설 및 비방 금지</li>
                        <li>영리 목적 무단 이용 금지</li>
                        <li>스팸 메시지 발송 금지</li>
                        <li>바이러스 유포 금지</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 제7조 저작권의 귀속 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제7조 (저작권의 귀속)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    1. 회사가 작성한 콘텐츠에 대한 저작권 기타 지적재산권은 회사에 귀속됩니다.
                  </p>
                  <p>
                    2. 이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 
                    회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 
                    제3자에게 이용하게 하여서는 안됩니다.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-bold text-purple-900 mb-2">저작권 보호</h3>
                    <p className="text-purple-800">
                      본 웹사이트의 모든 콘텐츠는 저작권법에 의해 보호되며, 
                      무단 복제 및 배포를 금지합니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 제8조 면책조항 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제8조 (면책조항)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 
                    서비스 제공에 관한 책임이 면제됩니다.
                  </p>
                  <p>
                    2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
                  </p>
                  <p>
                    3. 회사는 이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 
                    책임을 지지 않습니다.
                  </p>
                </div>
              </section>

              {/* 제9조 분쟁해결 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제9조 (분쟁해결)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    1. 이 약관에 명시되지 않은 사항은 전기통신사업법, 정보통신망이용촉진등에관한법률, 
                    개인정보보호법 등 관련 법령의 규정에 따릅니다.
                  </p>
                  <p>
                    2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-bold text-blue-900 mb-2">분쟁 해결 절차</h3>
                    <ol className="list-decimal list-inside space-y-1 text-blue-800">
                      <li>1차: 당사자 간 협의</li>
                      <li>2차: 소비자분쟁조정위원회 조정</li>
                      <li>3차: 관할 법원 소송</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 제10조 기타 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  제10조 (기타)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>이 약관은 {lastUpdated}부터 적용됩니다.</p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle size={20} className="text-green-600 mr-2" />
                      <span className="font-bold text-green-900">문의 및 신고</span>
                    </div>
                    <p className="text-green-800 mb-2">
                      서비스 이용 중 문제가 발생하거나 문의사항이 있으시면 언제든지 연락주시기 바랍니다.
                    </p>
                    <div className="text-sm text-green-700">
                      <p>📞 전화: 010-5264-8027</p>
                      <p>📧 이메일: limyoungmu@hanmail.net</p>
                      <p>📍 주소: 충남 아산시 배방읍 광정로 210, B212호</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* 하단 네비게이션 */}
          <div className="mt-8 text-center">
            <div className="inline-flex space-x-4">
              <a 
                href="/"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                홈으로 돌아가기
              </a>
              <a 
                href="/privacy"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                개인정보 처리방침 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}