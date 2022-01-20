import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsPage</Text>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
  },
});
