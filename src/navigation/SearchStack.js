import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageDetailsPage from '../Pages/ImageDetailsPage';
import SearchPage from '../Pages/SearchPage';
import SearchResultPage from '../Pages/SearchResultPage';
import UserPage from '../Pages/UserPage';

const SearchStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen name="SearchResult" component={SearchResultPage} />
    </Stack.Navigator>
  );
};

export default SearchStack;
