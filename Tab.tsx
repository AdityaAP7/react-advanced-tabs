import React, { useContext } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}
export const Tab: React.FC<TabProps> = ({
  index,
  children,
  className = '',
  activeClassName = ''
  }) => {
    const { activeIndex, setActiveIndex } = useContext(TabsContext);
    // Check if this tab is the active tab
  const isActive = activeIndex === index;
    // Update the active index when clicked
  const handleClick = () => {
        setActiveIndex(index);
    };
    return (
 <button
      className={`tab ${className} ${isActive ? activeClassName : ''}`}

      onClick={handleClick}




    >
      {children}
