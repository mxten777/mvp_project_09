'use client';

import { useState, useEffect } from 'react';

// 브레이크포인트 정의
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// 현재 화면 크기를 감지하는 훅
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>('');
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      if (width >= breakpoints['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else if (width >= breakpoints.sm) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    windowSize,
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl',
  };
};

// 터치 디바이스 감지 훅
export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
  }, []);

  return isTouchDevice;
};

// 디바이스 방향 감지 훅
export const useOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return orientation;
};

// 스크롤 위치 감지 훅
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// 반응형 이미지 크기 계산
export const getResponsiveImageSize = (
  breakpoint: string,
  baseSizes: { [key: string]: { width: number; height: number } }
) => {
  const sizeMap = {
    xs: baseSizes.mobile || baseSizes.sm,
    sm: baseSizes.mobile || baseSizes.sm,
    md: baseSizes.tablet || baseSizes.md,
    lg: baseSizes.desktop || baseSizes.lg,
    xl: baseSizes.desktop || baseSizes.xl,
    '2xl': baseSizes.desktop || baseSizes['2xl'],
  };

  return sizeMap[breakpoint as keyof typeof sizeMap] || baseSizes.lg;
};

// 반응형 폰트 크기 계산
export const getResponsiveFontSize = (
  baseSize: number,
  breakpoint: string,
  scaleFactor: { [key: string]: number } = {}
) => {
  const defaultScaleFactors = {
    xs: 0.8,
    sm: 0.9,
    md: 1,
    lg: 1.1,
    xl: 1.2,
    '2xl': 1.3,
  };

  const scale = scaleFactor[breakpoint] || defaultScaleFactors[breakpoint as keyof typeof defaultScaleFactors] || 1;
  return Math.round(baseSize * scale);
};

// 모바일 전용 컴포넌트 래퍼
interface MobileOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const MobileOnly = ({ children, fallback = null }: MobileOnlyProps) => {
  const { isMobile } = useBreakpoint();
  return isMobile ? <>{children}</> : <>{fallback}</>;
};

// 데스크톱 전용 컴포넌트 래퍼
interface DesktopOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const DesktopOnly = ({ children, fallback = null }: DesktopOnlyProps) => {
  const { isDesktop } = useBreakpoint();
  return isDesktop ? <>{children}</> : <>{fallback}</>;
};

// 반응형 그리드 클래스 생성
export const getResponsiveGridClasses = (
  columns: { [key: string]: number },
  gap: { [key: string]: number } = {}
) => {
  const gridClasses: string[] = [];
  const gapClasses: string[] = [];

  Object.entries(columns).forEach(([breakpoint, cols]) => {
    if (breakpoint === 'xs') {
      gridClasses.push(`grid-cols-${cols}`);
    } else {
      gridClasses.push(`${breakpoint}:grid-cols-${cols}`);
    }
  });

  Object.entries(gap).forEach(([breakpoint, gapSize]) => {
    if (breakpoint === 'xs') {
      gapClasses.push(`gap-${gapSize}`);
    } else {
      gapClasses.push(`${breakpoint}:gap-${gapSize}`);
    }
  });

  return [...gridClasses, ...gapClasses].join(' ');
};

// 반응형 패딩/마진 클래스 생성
export const getResponsiveSpacingClasses = (
  type: 'p' | 'm' | 'px' | 'py' | 'mx' | 'my' | 'pt' | 'pb' | 'pl' | 'pr' | 'mt' | 'mb' | 'ml' | 'mr',
  spacing: { [key: string]: number }
) => {
  const classes: string[] = [];

  Object.entries(spacing).forEach(([breakpoint, size]) => {
    if (breakpoint === 'xs') {
      classes.push(`${type}-${size}`);
    } else {
      classes.push(`${breakpoint}:${type}-${size}`);
    }
  });

  return classes.join(' ');
};

// PWA 설치 프롬프트 감지
export const usePWAInstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (installPrompt) {
      const result = await installPrompt.prompt();
      console.log('PWA install prompt result:', result);
      setInstallPrompt(null);
      setIsInstallable(false);
    }
  };

  return { isInstallable, promptInstall };
};