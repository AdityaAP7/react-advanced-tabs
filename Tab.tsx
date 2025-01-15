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


