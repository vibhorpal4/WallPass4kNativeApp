import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WallPass4k</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
    color: colors.textDark,
  },
});
