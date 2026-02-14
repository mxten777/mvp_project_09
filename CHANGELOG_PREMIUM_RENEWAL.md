# 만송시스템 웹사이트 프리미엄 리뉴얼 변경사항

> **작업일**: 2025년 1월  
> **범위**: 글로벌 표준 프리미엄급 전면 리뉴얼  
> **기술 스택**: Next.js 16 / React 19 / Tailwind CSS 3 / Framer Motion 12

---

## 1. 디자인 시스템 구축

### tailwind.config.js
- **컬러 팔레트**: Blue 계열 → Indigo 계열(primary-50~950)로 전면 교체
- **커스텀 애니메이션**: `float`, `float-delay`, `pulse-slow`, `shimmer`, `gradient` 추가
- **프리미엄 그림자**: `glass`, `premium`, `card`, `card-hover` 등 6종 정의
- **배경 크기**: `300%` 추가 (그라데이션 애니메이션용)

### globals.css
- **글래스모피즘 클래스**: `.glass`, `.glass-card` 정의
- **그라데이션 유틸리티**: `.gradient-text`, `.gradient-mesh`, `.gradient-border`
- **레이아웃 유틸리티**: `.section-padding`, `.container-premium`
- **버튼 시스템**: `.btn-primary`, `.btn-secondary` (호버/그림자 효과 포함)
- **카드 시스템**: `.card-premium` (호버 시 상승 효과)
- **섹션 헤더 시스템**: `.section-badge`, `.section-title`, `.section-subtitle`
- **통계 숫자**: `.stat-number`
- **커스텀 스크롤바/선택 영역 스타일링**

---

## 2. 레이아웃 수정

### layout.tsx
- `lang="en"` → `lang="ko"` 변경
- 불필요한 Geist 폰트 import 제거
- 메타데이터 한글화 및 SEO 최적화

### postcss.config.mjs (삭제)
- Tailwind CSS v4 플러그인 설정 충돌 해결을 위해 삭제
- `postcss.config.js` (Tailwind v3 설정) 유지

---

## 3. 컴포넌트별 변경사항

### Header.tsx — 프리미엄 네비게이션 (8회 반복 개선)
- **배경**: 다크 그라데이션 (`slate-950 → #0c1222 → slate-950`)
- **로고 영역**: 블러 글로우 효과, Ambient glow 배경
- **하단 보더**: Shimmer 애니메이션 적용 (`animate-shimmer`)
- **네비게이션**: 반투명 pill-bar 컨테이너 (`bg-white/[0.04]`)
- **활성 섹션**: IntersectionObserver + Framer Motion `layoutId` 스프링 애니메이션
- **호버 효과**: 각 메뉴 아이템 하단 glow dot
- **CTA 버튼**: 애니메이션 그라데이션 + Sparkles 아이콘 + 글로우 효과
- **모바일 메뉴**: AnimatePresence 토글 + 회전 애니메이션 + 순차 진입 모션

### HeroSection.tsx — 시네마틱 히어로
- **배경**: 다크 슬레이트-950 계열, gradient-mesh, 서브틀 그리드 패턴
- **플로팅 오브**: 3개의 블러 원형 배경 (float, float-delay, pulse-slow)
- **useCountUp 훅**: IntersectionObserver 기반 숫자 카운트업 애니메이션
- **StatItem 컴포넌트**: 뷰포트 진입 시 숫자 롤업 효과
- **텍스트 모션**: Framer Motion 순차 진입 (stagger 0.1s)
- **비주얼 카드**: 글래스모피즘 + 플로팅 통계 카드 (floating animation)
- **스크롤 인디케이터**: 바운스 애니메이션

### ServicesSection.tsx — 프리미엄 탭 인터페이스
- **탭 버튼**: 4:8 그리드, 활성 시 scale-up + shadow-card-hover
- **상세 패널**: AnimatePresence 전환, 서비스별 그라데이션 히어로
- **기능 목록**: 그라데이션 체크 아이콘
- **기대 효과**: 색상 코딩된 통계 카드 (bgAccent/textAccent)
- **CTA 배너**: 그라데이션 배경 + 장식 블러 원형

### ReferencesSection.tsx — 성공 사례
- **산업별 필터**: pill 스타일 탭 (slate-100 배경)
- **문제/해결 레이아웃**: 컬러 도트 + 상태 레이블, 카드 기반 레이아웃
- **성과 지표**: 색상 코딩된 아이콘 + 호버 shadow 전환
- **성공 스토리**: 3컬럼 그리드 (2:1), Quote 아이콘 인용문
- **메트릭 패널**: slate-900 다크 배경, 그라데이션 진행선 + 도트 마커

### AboutSection.tsx — 회사소개
- **탭 시스템**: 회사 정보 / 팀 소개 전환 (AnimatePresence)
- **회사 통계**: 4개 색상 코딩 카드 (Calendar, Target, Users, Award)
- **연혁 타임라인**: 세로선 그라데이션 + 순차 진입 모션
- **핵심 가치**: 4컬럼 그리드, 그라데이션 아이콘, 호버 scale-up
- **사업장 정보**: 그라데이션 헤더 + 정보 카드 (본사/울산지사)
- **팀 카드**: 다크 프로필 헤더 + 장식 원형 + 전문분야 태그
- **팀 문화 배너**: 그라데이션 배경 + 블러 장식 + 3열 통계

### ContactSection.tsx — 문의하기
- **레이아웃**: 5:3 그리드 (연락처:폼)
- **연락처 카드**: 그라데이션 아이콘 + card-premium 스타일
- **운영 시간**: slate-900 다크 카드
- **빠른 연락**: ArrowRight 호버 효과, 보더 컬러 전환
- **문의 폼**: rounded-3xl 카드, primary 포커스 링
- **프로세스 단계**: 4단계 시각화, 연결선 그라데이션
- **제출 성공**: motion scale-up 애니메이션

### Footer.tsx — 다크 푸터
- **배경**: slate-950 다크 테마
- **레이아웃**: 4컬럼 그리드
- **링크 호버**: ArrowUpRight 아이콘 효과
- **저작권**: 보더 상단 분리선

---

## 4. 접근성 개선

### accessibility.tsx
- **SkipLink 수정**: `sr-only focus:not-sr-only` → `absolute -top-full focus:top-4` 방식
  - 포커스하지 않을 때 화면 밖 배치, 포커스 시 상단에 가시화
- **프리미엄 스타일링**: rounded-xl, shadow-premium, focus:ring 추가

---

## 5. 수정된 파일 목록 (12개)

| 파일 | 작업 |
|------|------|
| `tailwind.config.js` | 디자인 토큰 전면 재정의 |
| `src/app/globals.css` | 유틸리티 클래스 시스템 구축 |
| `src/app/layout.tsx` | 언어/폰트/메타데이터 수정 |
| `postcss.config.mjs` | 삭제 (충돌 해결) |
| `src/components/layout/Header.tsx` | 프리미엄 헤더 (8회 반복 개선) |
| `src/components/layout/Footer.tsx` | 다크 테마 리뉴얼 |
| `src/components/sections/HeroSection.tsx` | 시네마틱 히어로 리뉴얼 |
| `src/components/sections/ServicesSection.tsx` | 탭 인터페이스 리뉴얼 |
| `src/components/sections/ReferencesSection.tsx` | 성공 사례 리뉴얼 |
| `src/components/sections/AboutSection.tsx` | 회사소개 리뉴얼 |
| `src/components/sections/ContactSection.tsx` | 문의하기 리뉴얼 |
| `src/utils/accessibility.tsx` | SkipLink 버그 수정 |

---

## 6. Next.js 업데이트

- **Next.js** 15.5.3 → **16.1.6** 업데이트 (보안 취약점 해결)
- `npm audit` 취약점 0개 달성
- `tsconfig.json` 자동 업데이트 (jsx: react-jsx, include 추가)

---

## 7. 빌드 및 배포 상태

- **빌드 결과**: ✅ 성공
- **정적 페이지**: 6개 (/, /privacy, /terms, /sitemap.xml, /robots.txt, /_not-found)
- **배포**: Vercel Production ✅
