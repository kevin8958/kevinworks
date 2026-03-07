import { render, screen, fireEvent, act } from '@testing-library/react';
import Alert from '@/design-system/components/Alert';

// RAF & performance.now 모킹 (컴포넌트 내부 로직 대응)
const mockRAF = () => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    return setTimeout(() => cb(performance.now()), 16) as unknown as number;
  });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
    clearTimeout(id as unknown as NodeJS.Timeout);
  });
};

describe('Alert 컴포넌트 Props & 스타일 전수 테스트', () => {
  beforeEach(() => {
    mockRAF();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });
});
