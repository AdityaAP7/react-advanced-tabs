// src/components/Tabs.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface TabsContextProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
  }

  export const TabsContext = createContext<TabsContextProps>({
    activeIndex: 0,
    setActiveIndex: () => {}
  });
  