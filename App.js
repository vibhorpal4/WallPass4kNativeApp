import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/navigation/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const getToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('@token');
      setToken(userToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  console.log(token);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {token === null ? (
            <Stack.Screen
              name={'Auth'}
              component={AuthStack}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name={'App'}
              component={BottomTab}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
