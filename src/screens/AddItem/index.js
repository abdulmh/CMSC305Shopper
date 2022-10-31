import React, { useState } from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handler/Handlers/database.js');

const AddItemScreen = props => {

    const navigation = useNavigation();

    // to use these constants  you need to import useState
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const onAddItem = () => {

        if (!name){
            alert('Please enter an item name.');
            return;
        }
        if (!price){
            alert('Please enter a price.');
            return;
        }
        if (!quantity){
            alert('Please enter a quantity.');
            return;
        }

        try {
            database.addItem(name, price, quantity);
        } catch (error) {
            console.log('Error adding item '+ error);
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
                placeholder={'Please enter an item name.'}
                placeholderTextColor={'grey'}
                />
                <TextInput 
                value={price}
                onChangeText={value => setPrice(value)}
                style={styles.price}
                clearButtonMode={'while-editing'}
                placeholder={'Please enter a price.'}
                placeholderTextColor={'grey'}
                />
                <TextInput 
                value={quantity}
                onChangeText={value => setQuantity(value)}
                style={styles.quantity}
                clearButtonMode={'while-editing'}
                placeholder={'Please enter a quantity.'}
                placeholderTextColor={'grey'}
                />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onAddItem}>
                <Text style={styles.buttonText}>Add Item</Text>
            </Pressable>
            
        </View>
    </View>
  );
};

export default AddItemScreen;