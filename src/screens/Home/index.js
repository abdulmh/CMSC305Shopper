import React, { useState } from 'react';
import {View, Text, Pressable, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import bcrypt from 'react-native-bcrypt';
// import openDatabase hook
import { openDatabase } from 'react-native-sqlite-storage';
// use hook to create database
const shopperDB = openDatabase ({name: 'Shopper.db'});
const usersTableName = 'users';


const HomeScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [securityTextEntry, setSecurityTextEntry] = useState(true);

  const onIconPress = () => {
    setSecurityTextEntry(!securityTextEntry);
  };

  const onSubmit = () => {

  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0.0}} />
      <View style={styles.header}>
        <Text style={styles.title}> Welcome to Shopper </Text>
        <TextInput
        placeholder='Enter Username'
        placeholderTextColor='grey'
        value={username}
        autoCapitalize = 'none'
        onChangeText= {setUsername}
        style = {{
          color: 'black',
          fontSize: 16,
          width: '100%',
          marginVertical: 15,
          borderColor: 'lightgrey',
          borderBottomWidth: 1.0,
          paddingTop: 100,
        }}
        />
        <View
          style ={{
            flexDirection: 'row',
            width: '100%',
            borderBottomWidth: 1.0,
            borderColor: 'lightgrey',
            marginVertical: 15,
          }}
        >
          <TextInput
            placeholder='Enter Password'
            placeholderTextColor='grey'
            value={password}
            autoCapitalize='none'
            onChangeText={setPassword}
            secureTextEntry={securityTextEntry}
            style={{
              color: 'black',
              fontSize: 16,
              width: '100%',
              flex: 1,
            }}
          />
          <TouchableOpacity onPress={onIconPress}>
            {securityTextEntry === true ? (
              <Entypo name='eye' size={20} />
            ) : (
              <Entypo name='eye-with-line' size={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Pressable
        accessible={true}
        accessibilityRole='button'
        accessibilityLabel='Tap to start shopping'
        accessibilityHint='Goes to lists screen'
          style={styles.button}
          onPress={() => navigation.navigate('Start Shopping!')}>
          <Text style={styles.buttonText}>Start Shopping!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
