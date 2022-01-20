import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../assets/colors/colors';

const InputComponent = ({
  autoComplete,
  keyboardType,
  onChangeText,
  placeHolder,
  secureTextEntry,
  value,
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={false || secureTextEntry}
        value={value}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    width: '90%',
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
