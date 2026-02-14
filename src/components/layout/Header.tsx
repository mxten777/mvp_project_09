'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigation = [
    { name: '솔루션', href: '#solutions' },
    { name: '성공사례', href: '#references' },
    { name: '회사소개', href: '#about' },
    { name: '문의하기', href: '#contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const ids = ['solutions', 'references', 'about', 'contact'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      aria-label="사이트 헤더"
    >
      {/* Premium dark background with subtle noise texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0c1222] to-slate-950" />
      
      {/* Ambient glow behind logo area */}
      <div className="absolute top-0 left-0 w-80 h-full bg-gradient-to-r from-primary-600/[0.07] to-transparent pointer-events-none" />
      
      {/* Shimmering bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      <nav className="relative container-premium py-4" aria-label="주요 네비게이션">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group" aria-label="홈으로 이동">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-violet-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <span className="text-white font-black text-lg tracking-tight">M</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[17px] font-bold text-white tracking-tight group-hover:text-primary-200 transition-colors duration-300">
                만송시스템
              </div>
              <div className="text-[9px] font-semibold tracking-[0.25em] uppercase text-primary-400/60">
                Mansong System
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/[0.04] rounded-2xl px-1.5 py-1.5 border border-white/[0.06]">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-[13px] font-medium rounded-xl transition-all duration-300 group"
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/[0.09] rounded-xl border border-white/[0.08]"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {/* Hover glow dot */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-400 opacity-100 shadow-[0_0_6px_rgba(129,140,248,0.6)]'
                      : 'bg-primary-400 opacity-0 group-hover:opacity-60'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="relative inline-flex items-center gap-2.5 px-7 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group"
              aria-label="무료 상담 문의하기"
            >
              {/* Button animated gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-violet-600 to-primary-600 bg-[length:200%_100%] animate-gradient rounded-xl" />
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-violet-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              <Sparkles size={14} className="relative z-10" />
              <span className="relative z-10">무료 상담</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-5 mt-4 border-t border-white/[0.06]">
                <div className="space-y-1">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                          activeSection === item.href
                            ? 'text-white bg-white/[0.08] border border-white/[0.06]'
                            : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        {activeSection === item.href && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.35 }}
                  className="mt-5"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-600 to-violet-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300"
                  >
                    <Sparkles size={16} />
                    무료 상담 신청
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;