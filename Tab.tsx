// src/components/Tab.tsx
import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

interface TabProps {
    index: number;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
  }    const handleClick = () => {
      setActiveIndex(index);
    };
  
  export const Tab: React.FC<TabProps> = ({
    index,
    children,
    className = '',
    activeClassName = ''
}) => {
    const { activeIndex, setActiveIndex } = useContext(TabsContext);

    const isActive = activeIndex === index;

    const handleClick = () => {
      setActiveIndex(index);
    };

    return (
        <button
        className={`tab ${className} ${isActive ? activeClassName : ''}`}
        onClick={handleClick}
   return (
        <button
        className={`tab ${className} ${isActive ? activeClassName : ''}`}
        onClick={handleClick}
   onClick={handleClick}
   return (
        <button
        className={`tab ${className} ${isActive ? activeClassName : ''}`}
        onClick={handleClick}
    const isActive = activeIndex === index;
interface TabProps {
    index: number;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
  }    const handleClick = () => {
      setActiveIndex(index);
    };
    const handleClick = () => {
      setActiveIndex(index);
    };

interface TabProps {
    index: number;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
  }
          >
      {children}
  export const Tab: React.FC<TabProps> = ({
    index,
    children,
    className = '',
    activeClassName = ''
interface TabProps {
    index: number;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
  }
          >
      {children}
  export const Tab