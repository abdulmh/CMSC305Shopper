import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Item from '../../components/Item';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// import openDatabase hook
import { openDatabase } from 'react-native-sqlite-storage';

// use hook to create database
const shopperDB = openDatabase ({name: 'Shopper.db'});
const itemsTableName = 'items';

const ItemsScreen = props => {
  
  const navigation = useNavigation();
  const [items, setItems] = useState ([]);

  useEffect(() => {
    const listener = navigation.addListener( 'focus', () => {
      // declare an empty array that will store the results of the
      // SELECT
      let results = [];
      // declare a transaction that will execute the SELECT
      shopperDB.transaction(txn => {
        // execute SELECT
        txn.executeSql(
          `SELECT * FROM ${itemsTableName}`,
          [],
          // callback function to handle the results from the
          // SELECT
          // res represents all the results returned from the SELECT statement
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of items ' + len);
            // if more than one row was returned
            if (len > 0){
              // loop through the rows 
              for (let i = 0; i < len; i++){
                // push a row of data at a time onto
                // results array
                let item = res.rows.item(i);
                results.push({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                });
              }
              // assign results array to items state variable
              setItems(results);
              /*
              [
                {
               id: 1
               name: Clothes
               store: Target
               date: 2022-10-13
                }
                {
               id: 2
               name: Candy
               store: Giant
               date: 2022-05-04
                }
                {
               id: 3
               name: Grocery
               store: ShopRite
               date: 2022-07-08
                }
              ]
              */

             } else {
              // if no rows of data were returned
              // set items state variable to an empty array
              setItems([]);
             }
          },
          error => {
            console.log('Error getting items ' + error);
          },
        )
      });
    });
    return listener;
  });
  
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => <Item post={item} />}
          keyExtractor={item => item.id}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Item')}
                >
                <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ItemsScreen;