import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handler/Handlers/database.js');

const AddList = props => {

    // allows the user to navigate to a different screen
    // when a specific button is pressed
    const navigation = useNavigation();

    // to use these constants  you need to import useState
    const [name, setName] = useState('');
    const [store, setStore] = useState('');
    const [date, setDate] = useState('');

    const onListAdd = () => {
        if (!name){
            alert('Please enter a shopping list name.');
            return;
        }
        if (!store){
            alert('Please enter a store.');
            return;
        }
        if (!date){
            alert('Please enter a date in format YYYY-MM-DD.');
            return;
        }
        
        try {
            database.addList(name, store, date);
        } catch (error) {
            console.log('Error adding list '+ error);
        }

        alert(name + ' Added!');
        navigation.navigate('Start Shopping!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={name}
                onChangeText={value => setName(value)}
                style={styles.name}
                clearButtonMode={'while-editing'}
                placeholder={'Enter List Name'}
                placeholderTextColor={'grey'}
                />
                <TextInput 
                value={store}
                onChangeText={value => setStore(value)}
                style={styles.store}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Store'}
                placeholderTextColor={'grey'}
                />
                <TextInput 
                value={date}
                onChangeText={value => setDate(value)}
                style={styles.date}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Date in format YYYY-MM-DD'}
                placeholderTextColor={'grey'}
                />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onListAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddList;