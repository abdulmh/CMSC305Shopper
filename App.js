/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';

const database = require('./src/components/Handler/Handlers/database.js');

const App: () => Node = () => {
  try {
    database.createListsTable();
  } catch (error) {
      console.log ('Failed to create lists table ' + error);
    }
  try {
      database.createItemsTable();
    } catch (error) {
        console.log ('Failed to create items table ' + error);
      }
      try {
        database.createListItemsTable();
      } catch (error) {
          console.log ('Failed to create list items table ' + error);
        }
  return <Router />;
};

export default App;