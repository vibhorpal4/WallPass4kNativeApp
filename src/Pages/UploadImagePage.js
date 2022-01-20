import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../assets/colors/colors';

const UploadImagePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Upload Image</Text>
        </View>
        <View style={styles.formWrapper}>
          <TextInput placeholder="Title" style={styles.textInput} />
        </View>
        <View style={styles.formWrapper}>
          <TextInput placeholder="Title" style={styles.textInput} />
        </View>
        <View style={styles.formWrapper}>
          <TextInput placeholder="Title" style={styles.textInput} />
        </View>
      </View>
    </View>
  );
};

export default UploadImagePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: colors.textDark,
    height: '90%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  // formConatiner: {
  //   marginTop: 60,
  // },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: colors.textLight,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  formWrapper: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    color: colors.textDark,
    backgroundColor: colors.backgroundColor,
    borderRadius: 50,
  },
});
