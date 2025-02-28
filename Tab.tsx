import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
 children: React.ReactNode;
 /**
 className?: string;
