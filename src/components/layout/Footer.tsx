import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MSS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">만송시스템(주)</h3>
                <p className="text-xs text-gray-400">Mansong System Co., Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300">
              산업용 시스템 솔루션 전문기업으로<br />
              고객의 성공을 위한 최적의 솔루션을 제공합니다.
            </p>
            <div className="text-sm text-gray-400">
              <p>대표: 임영무 (CEO)</p>
            </div>
          </div>

          {/* 서비스 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#solutions" className="hover:text-blue-400 transition-colors">시스템 통합</Link></li>
              <li><Link href="#solutions" className="hover:text-blue-400 transition-colors">산업용 솔루션</Link></li>
              <li><Link href="#solutions" className="hover:text-blue-400 transition-colors">기술 컨설팅</Link></li>
              <li><Link href="#solutions" className="hover:text-blue-400 transition-colors">유지보수</Link></li>
            </ul>
          </div>

          {/* 회사 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">회사</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">회사소개</Link></li>
              <li><Link href="#references" className="hover:text-blue-400 transition-colors">성공사례</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">문의하기</Link></li>
              <li><Link href="/career" className="hover:text-blue-400 transition-colors">채용정보</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span>010-5264-8027</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <div className="text-sm">
                  <div>limyoungmu@hanmail.net</div>
                  <div>limyoungmoo@mansong.kr</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <div className="text-sm">
                  <div className="font-medium text-white mb-1">본사</div>
                  <div>(31471) 충남 아산시 배방읍<br />광정로 210, B212호</div>
                  <div className="font-medium text-white mt-2 mb-1">지사</div>
                  <div>(44715) 울산광역시 남구<br />화합로 162, 나인파크 906호</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 정책 링크 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 만송시스템(주). All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                이용약관
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;