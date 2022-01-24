import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountPage = ({navigation}) => {
  const handleLogOut = async () => {
    try {
      await AsyncStorage.clear();
      // await navigation.push('Auth');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        {/* <Image style={styles.profilePic} src={} /> */}
      </View>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
