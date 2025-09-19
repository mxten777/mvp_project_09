import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: "홈",
  description: "만송시스템(주)는 공장 모니터링, 관제 시스템, B2B 기술지원 등 산업용 시스템 통합 솔루션을 제공합니다. 200+ 프로젝트 경험과 98% 고객 만족도를 자랑하는 전문기업입니다.",
  openGraph: {
    title: "만송시스템(주) - 산업용 시스템 솔루션 전문기업",
    description: "공장 모니터링, 관제 시스템, B2B 기술지원 등 산업용 시스템 통합 솔루션 전문기업",
    url: "https://mansong.kr",
  },
};

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ReferencesSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
