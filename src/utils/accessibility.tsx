'use client';

import { useEffect, useState } from 'react';

// 포커스 관리를 위한 훅
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState<Element | null>(null);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      setFocusedElement(e.target as Element);
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, []);

  const trapFocus = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    return () => element.removeEventListener('keydown', handleTabKey);
  };

  return { focusedElement, trapFocus };
};

// 키보드 네비게이션을 위한 훅
export const useKeyboardNavigation = () => {
  const handleKeyDown = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const makeAccessible = (element: HTMLElement, label?: string) => {
    element.setAttribute('tabindex', '0');
    element.setAttribute('role', 'button');
    if (label) {
      element.setAttribute('aria-label', label);
    }
  };

  return { handleKeyDown, makeAccessible };
};

// 스크린 리더 전용 텍스트 컴포넌트
interface ScreenReaderOnlyProps {
  children: React.ReactNode;
}

export const ScreenReaderOnly = ({ children }: ScreenReaderOnlyProps) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
};

// 스킵 링크 컴포넌트
export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="absolute -top-full left-4 z-[100] bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-premium transition-all focus:top-4 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
    >
      본문으로 바로가기
    </a>
  );
};

// ARIA 라이브 영역 컴포넌트
interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

export const LiveRegion = ({ message, politeness = 'polite' }: LiveRegionProps) => {
  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};

// 접근성 검사 유틸리티
export const checkAccessibility = () => {
  const issues: string[] = [];

  // 이미지 alt 속성 검사
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push(`이미지 ${index + 1}에 alt 속성이 없습니다.`);
    }
  });

  // 폼 라벨 검사
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        issues.push(`입력 필드 ${index + 1}에 라벨이 없습니다.`);
      }
    }
  });

  // 헤딩 구조 검사
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    if (level > previousLevel + 1) {
      issues.push(`헤딩 ${index + 1}: 레벨이 건너뛰어졌습니다 (${previousLevel} → ${level})`);
    }
    previousLevel = level;
  });

  return issues;
};

// 색상 대비 검사 (간단한 버전)
export const checkColorContrast = (foreground: string, background: string): boolean => {
  // 실제 구현에서는 더 정확한 색상 대비 계산이 필요합니다
  // 여기서는 간단한 예시만 제공합니다
  const getLuminance = (color: string): number => {
    // 간단한 luminance 계산 (실제로는 더 복잡한 계산이 필요)
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const foregroundLum = getLuminance(foreground);
  const backgroundLum = getLuminance(background);
  const contrast = (Math.max(foregroundLum, backgroundLum) + 0.05) / 
                  (Math.min(foregroundLum, backgroundLum) + 0.05);

  return contrast >= 4.5; // WCAG AA 기준
};