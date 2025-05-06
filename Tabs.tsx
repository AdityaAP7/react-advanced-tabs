1// src/components/Tabs.tsx
import React, { createContext, useState, ReactNode } from 'react';
1234567890qwertyuiop
interface TabsContextProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
  }
1233457
  export const TabsContext = createContext<TabsContextProps>({
    activeIndex: 0,
    setActiveIndex: () => {}
  });
  
  interface TabsProps {
    defaultIndex?: number;
    children: ReactNode;
  }

  export const Tabs: React.FC<TabsProps> = ({ defaultIndex = 0, children }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
    return (
      <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
        <div className="tabs-container">
          {children}
        </div>
      </TabsContext.Provider>
    );
  };