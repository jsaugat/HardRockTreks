// hooks/useRecaptcha.ts
import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function useRecaptcha() {
  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const executeRecaptcha = useCallback(async (action: string) => {
    try {
      return await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
              { action }
            );
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      throw error;
    }
  }, []);

  return { executeRecaptcha };
}