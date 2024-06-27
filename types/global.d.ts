// types/global.d.ts
interface Window {
    turnstile: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          appearance?: 'always' | 'execute' | 'invisible';
          auto_callback?: boolean;
        }
      ) => void;
    };
  }