'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: '홈', href: '/' },
    { name: '솔루션', href: '#solutions' },
    { name: '성공사례', href: '#references' },
    { name: '회사소개', href: '#about' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" aria-label="사이트 헤더" role="banner">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="주요 네비게이션" role="navigation">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" aria-label="홈으로 이동" tabIndex={0}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MSS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-blue-600">만송시스템</div>
                <div className="text-xs text-gray-500">Mansong System</div>
              </div>
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
                role="menuitem"
                aria-label={item.name}
                tabIndex={0}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
              aria-label="무료 상담 문의하기"
              tabIndex={0}
            >
              무료 상담
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu" aria-label="모바일 메뉴" role="menu" tabIndex={0}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-label={item.name}
                  tabIndex={0}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium mt-4 focus:outline-blue-600 focus:ring-2 focus:ring-blue-600"
                onClick={() => setIsMenuOpen(false)}
                aria-label="무료 상담 문의하기"
                tabIndex={0}
              >
                무료 상담
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;