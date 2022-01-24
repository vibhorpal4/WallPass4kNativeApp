import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
