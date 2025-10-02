# 만송시스템(주) MVP 프로젝트

## 프로젝트 개요
- **프로젝트명:** 만송시스템(주) 홈페이지 MVP
- **목적:** 산업용 시스템 통합 솔루션, 성공사례, 회사소개, 문의, 정책 안내 등 기업 공식 웹사이트 구축
- **주요 기술:** Next.js 15, TypeScript, TailwindCSS, Lucide React, Pretendard/Inter 폰트
- **배포:** Vercel

## 폴더 구조
```
src/
  app/           # Next.js App Router 기반 페이지
    page.tsx     # 메인 페이지
    privacy/     # 개인정보 처리방침
    terms/       # 이용약관
  components/
    layout/      # Header, Footer, Layout 등 공통 컴포넌트
    sections/    # Hero, Services, References, About, Contact 등 주요 섹션
  utils/
    accessibility.tsx # 접근성 유틸리티
public/
  images/        # 팀원, 회사, 서비스 관련 이미지
```

## 주요 기능 및 페이지
- **홈페이지:** Hero, 서비스, 성공사례, 회사소개, 문의하기 섹션
- **정책 페이지:** 개인정보 처리방침, 이용약관
- **공통 컴포넌트:** Header, Footer, Layout, 접근성 유틸리티(스킵링크, ARIA 등)
- **반응형 디자인:** 모든 디바이스에서 최적화
- **접근성 강화:** aria-label, role, tabIndex, 포커스 스타일, 키보드 내비게이션 등
- **SEO 최적화:** 메타 태그, Open Graph, robots 설정

## 개발/운영 환경
- **Node.js**
- **Next.js 15.5.3**
- **TypeScript**
- **TailwindCSS 3.4.0**
- **Vercel**

## 설치 및 실행
```bash
npm install
npm run dev
```

## 배포
- Vercel에 main 브랜치 자동 배포

## 접근성(A11y) 정책
- 모든 주요 섹션, 페이지, 컴포넌트에 접근성 속성 적용
- 스킵링크, ARIA 라이브, 포커스 관리, 키보드 내비게이션 지원
- 접근성 유틸리티 및 검사 함수 제공

## 팀원
- 임영무 (CEO)
- 임동근 (CTO)
- 박수진 (PM)

## 문의
- 대표전화: 010-5264-8027
- 이메일: limyoungmu@hanmail.net

## 라이선스
- 본 프로젝트는 만송시스템(주) 사내 사용 및 공식 홈페이지 용도로만 사용됩니다.

---
> 최신 개선 내역, 추가 기능, 배포/운영 정책 등은 팀 내 공유 및 업데이트 바랍니다.
