import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../Pages/HomePage';
import ImageDetailsPage from '../Pages/ImageDetailsPage';
import UserPage from '../Pages/UserPage';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ImageDetails" component={ImageDetailsPage} />
      <Stack.Screen name="User" component={UserPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
