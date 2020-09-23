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
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [togglePassword, setTogglePassword] = React.useState(false);
  const [toggleIcon, setToggleIcon] = React.useState('eye');
  const ref_username = useRef();
  const ref_email = useRef();
  const ref_phoneNo = useRef();
  const ref_password = useRef();
  return (
    <KeyboardAwareScrollView>

      <View
        style={styles.body}
        behavior="position">
        <Image
          source={require('.././img/1280px-Samsung_Logo.svg.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>{'WELCOME'}</Text>
        <Text style={styles.noticeText}>
          {'Sign up to start your new journey'}
        </Text>
        <TextInput
          label="Name"
          theme={{
            colors: { primary: 'blue', underlineColor: 'transparent' },
          }}
          onSubmitEditing={() => ref_username.current.focus()}
          returnKeyType={'next'}
          blurOnSubmit={false}
          value={name}
          mode={'outlined'}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          ref={ref_username}
          label="Username"
          theme={{
            colors: { primary: 'blue', underlineColor: 'transparent' },
          }}
          onSubmitEditing={() => ref_email.current.focus()}
          returnKeyType={'next'}
          blurOnSubmit={false}
          value={username}
          mode={'outlined'}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          ref={ref_email}
          label="Email"
          theme={{
            colors: { primary: 'blue', underlineColor: 'transparent' },
          }}
          onSubmitEditing={() => ref_phoneNo.current.focus()}
          returnKeyType={'next'}
          blurOnSubmit={false}
          value={email}
          mode={'outlined'}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          ref={ref_phoneNo}
          label="PhoneNo"
          theme={{
            colors: { primary: 'blue', underlineColor: 'transparent' },
          }}
          onSubmitEditing={() => ref_password.current.focus()}
          returnKeyType={'next'}
          blurOnSubmit={false}
          keyboardType="numeric"
          value={phoneNo}
          mode={'outlined'}
          dataDetectorTypes={'phoneNumber'}
          onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
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
        <Button
          style={styles.submitButton}
          mode="contained"
          color="blue"
          onPress={() => console.log('Pressed')}>
          Go
          </Button>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}>
          {'ALREADY HAVE AN ACCOUNT? LOGIN'}
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  iconInputRight: { position: 'absolute', right: 0, bottom: 0, zIndex: 9 },
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  submitButton: {
    marginTop: 10,
  },
  signUpText: {
    fontSize: 15,
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
