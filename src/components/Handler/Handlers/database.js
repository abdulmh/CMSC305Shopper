// import openDatabase hook
import { openDatabase } from 'react-native-sqlite-storage';

// use hook to create database
const shopperDB = openDatabase ({name: 'Shopper.db'});
const listsTableName = 'lists';
const itemsTableName = 'items';
const listItemsTableName = 'list_items';

module.exports = {

    // declare function that will create the lists table
    createListsTable: async function () {
        //declare a transaction that will execute a SQL statement
            (await shopperDB).transaction(txn => {
                // execute the SQL
                txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    store TEXT,
                    date TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle 
                () => {
                    console.log('Lists table created successfully');
                },
                error => {
                    console.log('Error creating lists table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the lists table
    addList: async function (name, store, date) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${listsTableName} (name,store,date) VALUES ("${name}", "${store}", "${date}")`,
                // arguments when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added successfully");
                },
                error => {
                    console.log('Error adding lists ' + error.message);
                },
            );
        });
    },

    // declare function that will create the items table
    createItemsTable: async function () {
        //declare a transaction that will execute a SQL statement
            (await shopperDB).transaction(txn => {
                // execute the SQL
                txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${itemsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT(100),
                    price REAL,
                    quantity INTEGER
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle 
                () => {
                    console.log('Items table created successfully');
                },
                error => {
                    console.log('Error creating items table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the lists table
    addItem: async function (name, price, quantity) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${itemsTableName} (name, price, quantity) VALUES ("${name}", ${price}, ${quantity})`,
                // arguments when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added successfully");
                },
                error => {
                    console.log('Error adding items ' + error.message);
                },
            );
        });
    },

    // declare function that will create the lists table
    createListItemsTable: async function () {
        //declare a transaction that will execute a SQL statement
            (await shopperDB).transaction(txn => {
                // execute the SQL
                txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listItemsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    list_id INTEGER,
                    item_id INTEGER
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle 
                () => {
                    console.log('List items table created successfully');
                },
                error => {
                    console.log('Error creating list items table ' + error.message);
                },
            );
        });
    },
     // declare function that will insert a row into the lists table
     addListItem: async function (list_id,item_id) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${listItemsTableName} (list_id,item_id) VALUES (${list_id}, ${item_id})`,
                // arguments when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log("List item added successfully");
                },
                error => {
                    console.log('Error adding list items ' + error.message);
                },
            );
        });
    },
};