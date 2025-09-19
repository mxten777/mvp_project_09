import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "만송시스템(주) - 산업용 시스템 솔루션 전문기업",
    template: "%s | 만송시스템(주)"
  },
  description: "만송시스템(주)는 공장 모니터링, 관제 시스템, B2B 기술지원 등 산업용 시스템 통합 솔루션을 제공하는 전문기업입니다. 15년 경험의 전문가들이 고객의 비즈니스 혁신을 지원합니다.",
  keywords: ["만송시스템", "산업용 시스템", "공장 모니터링", "관제 시스템", "B2B 기술지원", "시스템 통합", "스마트팩토리", "IoT", "산업 자동화"],
  authors: [{ name: "만송시스템(주)" }],
  creator: "만송시스템(주)",
  publisher: "만송시스템(주)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mansong.kr",
    siteName: "만송시스템(주)",
    title: "만송시스템(주) - 산업용 시스템 솔루션 전문기업",
    description: "공장 모니터링, 관제 시스템, B2B 기술지원 등 산업용 시스템 통합 솔루션 전문기업",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "만송시스템(주) - 산업용 시스템 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "만송시스템(주) - 산업용 시스템 솔루션 전문기업",
    description: "공장 모니터링, 관제 시스템, B2B 기술지원 등 산업용 시스템 통합 솔루션 전문기업",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
  alternates: {
    canonical: "https://mansong.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
