import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

//import Pages
import SettingsPage from '../Pages/SettingsPage';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import UploadImagePage from '../Pages/UploadImagePage';
import HomePage from '../Pages/HomePage';
import SearchPage from '../Pages/SearchPage';
import AccountPage from '../Pages/AccountPage';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
};

export default BottomTab;
