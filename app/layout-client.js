'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from './components/Loader';

export default function LayoutClient({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 4000);

    document.body.style.cursor = 'wait';

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader key="preloader" />}
      </AnimatePresence>

      {!isLoading && <>{children}</>}
    </>
  );
}
