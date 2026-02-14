# 만송시스템(주) 공식 웹사이트

> 산업용 시스템 통합 솔루션 전문기업 — 글로벌 프리미엄급 웹사이트

## 프로젝트 개요

- **프로젝트명:** 만송시스템(주) 공식 홈페이지
- **목적:** 산업용 시스템 통합 솔루션, 성공사례, 회사소개, 문의 등 기업 공식 웹사이트
- **배포 URL:** [https://mvp-project-09.vercel.app](https://mvp-project-09.vercel.app)

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript, React 19 |
| 스타일링 | Tailwind CSS 3 + 커스텀 디자인 시스템 |
| 애니메이션 | Framer Motion 12 |
| 아이콘 | Lucide React |
| 폰트 | Pretendard, Inter |
| 배포 | Vercel |

## 디자인 시스템

- **컬러 팔레트:** Indigo 계열 (primary-50 ~ 950)
- **커스텀 애니메이션:** float, shimmer, gradient 등 5종
- **프리미엄 그림자:** glass, premium, card 등 6종
- **유틸리티 클래스:** `.glass`, `.gradient-text`, `.card-premium`, `.btn-primary`, `.section-badge` 등

## 폴더 구조

```
src/
  app/                    # Next.js App Router 페이지
    page.tsx              # 메인 페이지 (원페이지)
    layout.tsx            # 루트 레이아웃 (ko)
    globals.css           # 디자인 시스템 유틸리티
    privacy/              # 개인정보 처리방침
    terms/                # 이용약관
    robots.ts             # SEO robots
    sitemap.ts            # SEO sitemap
  components/
    layout/               # Header, Footer, Layout
    sections/             # Hero, Services, References, About, Contact
    ui/                   # Loading, OptimizedImage
  utils/
    accessibility.tsx     # SkipLink, ARIA, 포커스 관리
    performance.ts        # 성능 유틸리티
    responsive.tsx        # 반응형 유틸리티
```

## 주요 기능

- **프리미엄 헤더:** 다크 그라데이션 + shimmer 보더 + IntersectionObserver 활성 섹션 감지 + layoutId 스프링 애니메이션
- **시네마틱 히어로:** 다크 배경 + 카운트업 통계 + 플로팅 카드
- **서비스 섹션:** 탭 인터페이스 + AnimatePresence 전환 + 그라데이션 카드
- **성공 사례:** 산업별 필터 + 다크 메트릭 패널 + 인용문
- **회사소개:** 연혁 타임라인 + 팀 카드 + 핵심 가치 그리드
- **문의하기:** 5:3 그리드 레이아웃 + 프로세스 시각화 + 프리미엄 폼
- **다크 푸터:** slate-950 테마 + 4컬럼 그리드
- **정책 페이지:** 개인정보 처리방침, 이용약관
- **반응형:** 모든 디바이스 최적화
- **접근성:** SkipLink, ARIA, 포커스 관리, 키보드 내비게이션
- **SEO:** 메타 태그, Open Graph, robots.txt, sitemap.xml

## 설치 및 실행

```bash
npm install
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드
```

## 배포

```bash
vercel --prod   # Vercel 프로덕션 배포
```

또는 GitHub main 브랜치 push 시 자동 배포

## 팀원

| 이름 | 직책 | 역할 |
|------|------|------|
| 임영무 | 대표이사 | Founder & CEO |
| 임동근 | CTO | 개발총괄 |
| 박수진 | 팀장 | 프로젝트 매니저 |

## 문의

- **전화:** 010-5264-8027
- **이메일:** limyoungmu@hanmail.net
- **본사:** 충남 아산시 배방읍 광정로 210, B212호
- **울산지사:** 울산광역시 남구 화합로 162, 나인파크 906호

## 변경 이력

자세한 변경사항은 [CHANGELOG_PREMIUM_RENEWAL.md](CHANGELOG_PREMIUM_RENEWAL.md) 참조

## 라이선스

본 프로젝트는 만송시스템(주) 사내 사용 및 공식 홈페이지 용도로만 사용됩니다.
