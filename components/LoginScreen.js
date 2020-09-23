/* eslint-disable prettier/prettier */
/**
 * Sample React Native LoginScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';
import { TextInput, Button, IconButton, Colors } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const onPressForget = () => {
  console.log('title pressed');
};
const windowHeight = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
  // useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // });
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [togglePassword, setTogglePassword] = React.useState(false);
  const [toggleIcon, setToggleIcon] = React.useState('eye');
  const ref_password = useRef();
  return (
    <KeyboardAwareScrollView>
      <View style={styles.body}>
        <Image
          source={require('.././img/1280px-Samsung_Logo.svg.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.titleText}>{'WELCOME BACK'}</Text>
          <Text style={styles.noticeText}>{'Sign in to continue'}</Text>
          <TextInput
            icon="account"
            label="Username"
            theme={{
              colors: { primary: 'blue', underlineColor: 'transparent' },
            }}
            onSubmitEditing={() => ref_password.current.focus()}
            returnKeyType={'next'}
            blurOnSubmit={false}
            value={username}
            mode={'outlined'}
            onChangeText={(username) => setUsername(username)}
          />
          <View style={styles.flexRow}>
            <TextInput
              style={styles.flex}
              ref={ref_password}
              label="Password"
              theme={{
                colors: { primary: 'blue', underlineColor: 'transparent' },
              }}
              onSubmitEditing={() => console.log('Pressed')}
              secureTextEntry={!togglePassword}
              value={password}
              maxLength={28}
              mode={'outlined'}
              onChangeText={(password) => setPassword(password)}
            />
            <IconButton
              style={styles.iconInputRight}
              icon={toggleIcon}
              color={Colors.blueA700}
              size={30}
              onPress={() => {
                setTogglePassword(!togglePassword);
                setToggleIcon(toggleIcon === 'eye' ? 'eye-off' : 'eye');
              }}
            />
          </View>
          <Text style={styles.forgetText} onPress={onPressForget}>
            {'FORGET PASSWORD?'}
          </Text>
          <Button
            mode="contained"
            color="blue"
            onPress={() => console.log('Pressed')}>
            Go
          </Button>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Register')}>
            {'NEW USER? SIGN UP'}
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  iconInputRight: { position: 'absolute', right: 0, bottom: 0, zIndex: 9 },
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  signUpText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  forgetText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'right',
    margin: 20,
    fontWeight: 'bold',
  },
  noticeText: {
    fontSize: 20,
    color: '#878787',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  headerImage: {
    width: 180,
    height: 80,
  },
  body: {
    height: windowHeight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
