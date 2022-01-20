import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text>SearchPage </Text>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
});
