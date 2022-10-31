import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Screen = props => {

    const post = props.post;
    const navigation = useNavigation();

    // this is a function that calls the onPress function
    // on line 18
    const onPress = () => {
        navigation.navigate('Existing List', {post: post});

    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.store} numberOfLines={1}>{post.store}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.date}>{post.date}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Screen;