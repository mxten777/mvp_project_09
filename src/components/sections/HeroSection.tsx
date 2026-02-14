'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="stat-number text-white">
        {count}<span className="text-primary-400">{suffix}</span>
      </div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const stats = [
    { value: 30, suffix: '+', label: '년 경험' },
    { value: 50, suffix: '+', label: '프로젝트' },
    { value: 98, suffix: '%', label: '고객 만족도' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950" aria-label="메인 소개 영역">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-slate-900 to-primary-900" />
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] animate-pulse-slow" />
      </div>

      <div className="relative container-premium pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge mb-8">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                산업용 시스템 통합 솔루션
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              산업의 미래를
              <br />
              <span className="gradient-text">설계합니다</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              첨단 기술과 30년 경험을 바탕으로 스마트팩토리, 관제 시스템, 
              B2B 기술지원까지 — 고객 맞춤형 산업 솔루션을 제공합니다.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Link href="#references" className="btn-primary group">
                성공 사례 보기
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border border-white/20 shadow-sm transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                무료 상담 신청
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {stats.map((stat, i) => (
                <StatItem key={i} {...stat} />
              ))}
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative">
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-600/20 to-violet-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Grid inside */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <button className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group border border-white/20 hover:scale-105">
                    <Play size={28} className="text-white ml-1 group-hover:scale-110 transition-transform" aria-label="동영상 재생" />
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                  </button>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover border border-slate-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs font-semibold text-slate-400 mb-1">실시간 모니터링</div>
                <div className="text-2xl font-bold text-emerald-500">98.5%</div>
                <div className="text-xs text-slate-400">장비 가동률</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-card-hover border border-slate-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
              >
                <div className="text-xs font-semibold text-slate-400 mb-1">품질 예측</div>
                <div className="text-2xl font-bold text-primary-600">99.2%</div>
                <div className="text-xs text-slate-400">정확도</div>
              </motion.div>

              {/* Decorative Glow */}
              <div className="absolute -inset-10 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-white/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;