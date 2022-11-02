import React, { useState } from 'react';
import {Text, TextInput, View, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// import openDatabase hook
import { openDatabase } from 'react-native-sqlite-storage';

// use hook to create database
const shopperDB = openDatabase ({name: 'Shopper.db'});
const listsTableName = 'lists';

const ExistingListScreen = props => {

    const post = props.route.params.post;
    // to use these constants  you need to import useState
    const [name, setName] = useState(post.name);
    const [store, setStore] = useState(post.store);
    const [date, setDate] = useState(post.date);

    const navigation = useNavigation();

    const onListUpdate = () => {
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
        shopperDB.transaction(txn => {
            txn.executeSql(
                `UPDATE ${listsTableName} SET name = '${name}', store = '${store}', date = '${date}' WHERE id = ${post.id}`,
            [],
            () => {
                console.log(`${name} updated successfully` );
            },
            error => {
                console.log('Error on updating list' + error.message);
            }
        );
    });

    alert(name + ' updated!');
    navigation.navigate('Start Shopping!');
}

    const onListDelete = () => {
        return Alert.alert(
             // title
             'Confirm',
             // message
             'Are you sure you want to delete this list?',
             // buttons
             [ // each set of brackets contains an object
                {
                    text: 'Yes',
                    // below is a function
                    onPress: () => {
                        shopperDB.transaction(txn => {
                            txn.executeSql(
                                `DELETE FROM ${listsTableName} WHERE id = ${post.id}`,
                            [],
                            () => {
                                console.log(`${name} deleted successfully` );
                            },
                            error => {
                                console.log('Error on deleting list' + error.message);
                            }
                        );
                    });
                    alert: ('List deleted!');
                    navigation.navigate('Start Shopping!');
                    },
                },
                {
                    text: 'No',
                },
             ],
        );
    }
    const onAddItem = () => {
        // this line sends all data from the list items
        navigation.navigate('Add List Items', {post: post});
    }
    const onViewList = () => {
        // the post variable contains all the data in 
        // the list including the id, name, store, and date
        navigation.navigate('View List Items', {post: post});
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
            <Pressable style={styles.deleteButton} onPress={onListDelete}>
                <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
            <Pressable style={styles.updateButton} onPress={onListUpdate}>
                <Text style={styles.buttonText}>Update</Text>
            </Pressable>
            <Pressable style={styles.addButton} onPress={onAddItem}>
                <Text style={styles.buttonText}>Add Item</Text>
            </Pressable>
            <Pressable style={styles.viewButton} onPress={onViewList}>
                <Text style={styles.buttonText}>View Items</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ExistingListScreen;