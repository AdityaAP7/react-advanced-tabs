import React, {
  useContext,
  KeyboardEvent,
  useCallback,
  ReactNode,
  memo
} from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  /**
   * The index of this tab within its Tabs parent.
