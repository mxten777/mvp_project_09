import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: '공장 모니터링', href: '#solutions' },
    { name: '관제 시스템', href: '#solutions' },
    { name: 'B2B 기술지원', href: '#solutions' },
    { name: '시스템 통합', href: '#solutions' },
  ];

  const company = [
    { name: '회사소개', href: '#about' },
    { name: '성공사례', href: '#references' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white" aria-label="사이트 푸터" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-premium">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">만송시스템</h3>
                <p className="text-xs text-slate-500">Mansong System Co., Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              산업용 시스템 솔루션 전문기업으로<br />
              고객의 성공을 위한 최적의 솔루션을 제공합니다.
            </p>
            <p className="text-xs text-slate-500">대표: 임영무 (CEO)</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">서비스</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">회사</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">연락처</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">010-5264-8027</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400 space-y-0.5">
                  <div>limyoungmu@hanmail.net</div>
                  <div>limyoungmoo@mansong.kr</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400">
                  <p className="text-xs font-medium text-slate-300 mb-0.5">본사</p>
                  <p>충남 아산시 배방읍 광정로 210, B212호</p>
                  <p className="text-xs font-medium text-slate-300 mt-2 mb-0.5">울산지사</p>
                  <p>울산광역시 남구 화합로 162, 나인파크 906호</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2025 만송시스템(주). All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;