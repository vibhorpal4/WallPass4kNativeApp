import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';

const UserPage = () => {
  return (
    <View style={styles.container}>
      <Text>UserPage </Text>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
});
