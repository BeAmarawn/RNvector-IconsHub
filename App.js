import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Header from './src/components/Header';

import Routes from './src/routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header />
      <Routes />
    </>
  );
};

export default App;
