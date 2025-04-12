// src/components/TabList.tsx
import React, { ReactNode } from 'react';
interface TabListProps {
    children: ReactNode;
    className?: string;
  }
  export const TabList: React.FC<TabListProps> = ({ children, className }) => {
    return (export const TabList: React.FC<TabListProps> = ({ children, className }) => {
      <div className={`tab-list ${className || ''}`}>
        {children}
      </div>
    );
  };
1234567890
