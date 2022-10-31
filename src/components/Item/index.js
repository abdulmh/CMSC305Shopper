import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Item = props => {

    const post = props.post;

    // this is a function that calls the onPress function
    // on line 18
    const onPress = () => {
        console.log(post.name);

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