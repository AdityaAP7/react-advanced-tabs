import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
 children: React.ReactNode;
 /**
 className?: string;
  * Additional class names to apply when the tab is active.
   */

  activeClassName?: string;
export const Tab: React.FC<TabProps> = ({
index,
children,
  className = '',
  activeClassName = '',
  disabled = false,
  onSelect,

  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  const handleClick = () => {
   if (disabled) return; // If disabled, do nothing
    setActiveIndex(index);
 onSelect?.(index);
  };
const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
   // Example: handle arrow key navigation if needed
    // if (e.key === 'ArrowRight') { ... }
  // if (e.key === 'ArrowLeft') { ... }
