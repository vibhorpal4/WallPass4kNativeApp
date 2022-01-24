import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import HomePage from '../Pages/HomePage';
import SearchPage from '../Pages/SearchPage';
import UploadImagePage from '../Pages/UploadImagePage';
import SettingsPage from '../Pages/SettingsPage';
import AccountPage from '../Pages/AccountPage';
import UserPage from '../Pages/UserPage';
import SearchResultPage from '../Pages/SearchResultPage';
import ImageDetailsPage from '../Pages/ImageDetailsPage';
import colors from '../assets/colors/colors';

const Account_Stack = createNativeStackNavigator();
const Auth_Stack = createNativeStackNavigator();
const Bottom_Stack = createBottomTabNavigator();
const Home_Stack = createNativeStackNavigator();
const Search_Stack = createNativeStackNavigator();
const Main_Stack = createNativeStackNavigator();

export const AccountStack = () => {
  return (
    <Account_Stack.Navigator screenOptions={{headerShown: false}}>
      <Account_Stack.Screen name="Account" component={AccountPage} />
    </Account_Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Auth_Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Auth_Stack.Screen name="Login" component={LoginPage} />
      <Auth_Stack.Screen name="Register" component={RegisterPage} />
    </Auth_Stack.Navigator>
  );
};

export const BottomTab = () => {
  return (
    <Bottom_Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 90,
          marginHorizontal: 15,
          paddingHorizontal: 10,
          marginBottom: 30,
          backgroundColor: colors.backgroundColor,
          borderColor: colors.textDark,
          borderRadius: 50,
          elevation: 5,
          shadowColor: colors.shadowColor,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
      }}>
      <Bottom_Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="md-home"
              color={focused ? colors.textDark : color}
              size={25}
            />
          ),
        }}
      />
      <Bottom_Stack.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="md-search"
              color={focused ? colors.textDark : color}
              size={25}
            />
          ),
        }}
      />
      <Bottom_Stack.Screen
        name="UploadImage"
        component={UploadImagePage}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={focused ? colors.textDark : color}
              size={50}
            />
          ),
        }}
      />
      <Bottom_Stack.Screen
        name="Setting"
        component={SettingsPage}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="md-settings"
              color={focused ? colors.textDark : color}
              size={25}
            />
          ),
        }}
      />
      <Bottom_Stack.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={focused ? colors.textDark : color}
              size={25}
            />
          ),
        }}
      />
    </Bottom_Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Home_Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Home_Stack.Screen name="Home" component={HomePage} />
      <Home_Stack.Screen name="ImageDetails" component={ImageDetailsPage} />
      <Home_Stack.Screen name="User" component={UserPage} />
    </Home_Stack.Navigator>
  );
};

export const SearchStack = () => {
  return (
    <Search_Stack.Navigator screenOptions={{headerShown: false}}>
      <Search_Stack.Screen name="Search" component={SearchPage} />
      <Search_Stack.Screen name="SearchResult" component={SearchResultPage} />
    </Search_Stack.Navigator>
  );
};

const MainStack = () => {
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

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return token ? <BottomTab /> : <AuthStack />;

  // return (
  //   <Main_Stack.Navigator screenOptions={{headerShown: false}}>
  //     {token ? (
  //       <Main_Stack.Screen name="Main" component={BottomTab} />
  //     ) : (
  //       <Main_Stack.Screen name="Auth" component={AuthStack} />
  //     )}
  //   </Main_Stack.Navigator>
  // );
};

export default MainStack;
