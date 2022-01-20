import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountPage from '../Pages/AccountPage';
import ImageDetailsPage from '../Pages/ImageDetailsPage';
import AuthStack from './AuthStack';

const AccountStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={AccountPage} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

export default AccountStack;
