import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../assets/colors/colors';

const ButtonComponent = ({title, icon, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {icon && {icon}}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    width: 100,
    height: 30,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: colors.textDark,
  },
});
