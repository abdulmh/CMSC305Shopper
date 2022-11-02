import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handler/Handlers/database.js');

const Item = props => {

    const navigation = useNavigation();
    const post = props.post;

    // this is a function that calls the onPress function
    // on line 18
    const onPress = () => {
        // check what screen is using the Item component
        if (post.list_id){
            // AddListItem Screen is using me
            try {
                database.addListItem(post.list_id, post.id);
            } catch {
                console.log('Error adding list item ' + error);
            }
            alert('Item added to list!')
            navigation.navigate('Start Shopping!');
        } else {
            // Item Screen is using me
            console.lost(post.name)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <View style={{flex: 2}}>
                    <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                    <Text style={styles.price} numberOfLines={1}>{post.price}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.quantity}>{post.quantity}</Text>
                </View>
            </TouchableOpacity>
        </View>
      );
    };

export default Item;