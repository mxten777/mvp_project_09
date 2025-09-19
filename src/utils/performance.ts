'use client';

import { useEffect, useState } from 'react';

// 웹 바이탈 메트릭 타입
interface WebVitals {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

// 성능 메트릭 수집 훅
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<WebVitals>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, FCP: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, LCP: entry.startTime }));
            break;
          case 'first-input':
            const fidEntry = entry as any; // PerformanceEventTiming
            setMetrics(prev => ({ ...prev, FID: fidEntry.processingStart - fidEntry.startTime }));
            break;
          case 'layout-shift':
            if (!('hadRecentInput' in entry) || !(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                CLS: (prev.CLS || 0) + (entry as any).value 
              }));
            }
            break;
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({ 
              ...prev, 
              TTFB: navEntry.responseStart - navEntry.requestStart 
            }));
            break;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // 초기 로딩 완료 체크
    const checkLoading = () => {
      if (document.readyState === 'complete') {
        setLoading(false);
      }
    };

    checkLoading();
    document.addEventListener('readystatechange', checkLoading);

    return () => {
      observer.disconnect();
      document.removeEventListener('readystatechange', checkLoading);
    };
  }, []);

  return { metrics, loading };
};

// 이미지 레이지 로딩 훅
export const useLazyLoading = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return { isInView, setRef };
};

// 메모리 사용량 모니터링
export const useMemoryMonitoring = () => {
  const [memoryInfo, setMemoryInfo] = useState<any>(null);

  useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        setMemoryInfo((performance as any).memory);
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000); // 5초마다 업데이트

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};

// 네트워크 상태 모니터링
export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    online: navigator.onLine,
    connectionType: (navigator as any).connection?.effectiveType || 'unknown',
    downlink: (navigator as any).connection?.downlink || 0,
  });

  useEffect(() => {
    const updateOnlineStatus = () => {
      setNetworkStatus(prev => ({ ...prev, online: navigator.onLine }));
    };

    const updateConnectionStatus = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        setNetworkStatus(prev => ({
          ...prev,
          connectionType: connection.effectiveType,
          downlink: connection.downlink,
        }));
      }
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', updateConnectionStatus);
    }

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', updateConnectionStatus);
      }
    };
  }, []);

  return networkStatus;
};

// 성능 최적화 권장사항
export const getPerformanceRecommendations = (metrics: WebVitals) => {
  const recommendations: string[] = [];

  if (metrics.FCP && metrics.FCP > 1800) {
    recommendations.push('First Contentful Paint가 느립니다. 이미지 최적화와 코드 분할을 고려하세요.');
  }

  if (metrics.LCP && metrics.LCP > 2500) {
    recommendations.push('Largest Contentful Paint가 느립니다. 주요 리소스의 로딩을 최적화하세요.');
  }

  if (metrics.FID && metrics.FID > 100) {
    recommendations.push('First Input Delay가 높습니다. JavaScript 실행을 최적화하세요.');
  }

  if (metrics.CLS && metrics.CLS > 0.1) {
    recommendations.push('Cumulative Layout Shift가 높습니다. 레이아웃 안정성을 개선하세요.');
  }

  if (metrics.TTFB && metrics.TTFB > 800) {
    recommendations.push('Time to First Byte가 느립니다. 서버 응답 시간을 개선하세요.');
  }

  return recommendations;
};

// 성능 메트릭 리포팅
export const reportPerformanceMetrics = (metrics: WebVitals) => {
  // 실제 환경에서는 분석 서비스로 전송
  console.log('Performance Metrics:', metrics);
  
  // Google Analytics 4 예시
  if (typeof window !== 'undefined' && (window as any).gtag) {
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== undefined) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: key,
          value: Math.round(value),
        });
      }
    });
  }
};

// 리소스 로딩 모니터링
export const useResourceLoading = () => {
  const [loadingResources, setLoadingResources] = useState<string[]>([]);
  const [failedResources, setFailedResources] = useState<string[]>([]);

  useEffect(() => {
    const handleResourceLoad = (event: Event) => {
      const target = event.target as HTMLElement;
      const src = target.getAttribute('src') || target.getAttribute('href');
      if (src) {
        setLoadingResources(prev => prev.filter(url => url !== src));
      }
    };

    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement;
      const src = target.getAttribute('src') || target.getAttribute('href');
      if (src) {
        setFailedResources(prev => [...prev, src]);
        setLoadingResources(prev => prev.filter(url => url !== src));
      }
    };

    // 이미지, 스크립트, 스타일시트 모니터링
    document.addEventListener('load', handleResourceLoad, true);
    document.addEventListener('error', handleResourceError, true);

    return () => {
      document.removeEventListener('load', handleResourceLoad, true);
      document.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  return { loadingResources, failedResources };
};