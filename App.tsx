// App.tsx
import React from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel
  } from 'react-advanced-tabs';  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
         <Tabs defaultIndex={0}> <TabList><Tab index={0} activeClassName="active">Home</Tab><Tab index={1} activeClassName="active">Profile</Tab> <Tab index={2} activeClassName="active">Settings</Tab> </TabList><TabPanel index={0}>