import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../assets/colors/colors';
import ButtonComponent from '../Components/ButtonComponent';
import InputComponent from '../Components/InputComponent';
import {useLoginMutation} from '../redux/services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const LoginPage = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [login, {isError, isSuccess, error, isLoading, data}] =
    useLoginMutation();

  const storeToken = async token => {
    try {
      await AsyncStorage.setItem('@token', token);
    } catch (error) {
      console.log(error);
    }
  };

  const storeUser = async user => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  if (data) {
    const {token, user} = data;
    storeToken(token);
    storeUser(user);
  }

  // if (isSuccess) {
  //   navigation.push('Main');
  // }

  // if (error) {
  //   alert(error.data.message);
  // }

  const handleSubmit = async () => {
    await login(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Login Page</Text>
      </View>
      <View style={styles.bottom}>
        <InputComponent
          placeHolder="Email"
          keyboardType="email-address"
          // value={user.email}
          onChangeText={email => setUser({...user, email})}
        />
        <InputComponent
          placeHolder="Password"
          secureTextEntry={true}
          // value={user.password}
          onChangeText={password => setUser({...user, password})}
        />
        <TouchableOpacity
          onPress={() => navigation.push('Register')}
          style={styles.registerWrapper}>
          <Text style={styles.register}>
            Create new account{' '}
            <Text style={{textDecorationLine: 'underline'}}>Register</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <ButtonComponent onPress={handleSubmit} title="Login" />
          )}
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  top: {
    marginBottom: '15%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: colors.textDark,
  },
  bottom: {
    paddingTop: 120,
    height: '70%',
    width: '100%',
    backgroundColor: colors.textDark,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 40,
  },
  registerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: colors.textLight,
  },
  button: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
