import React from 'react';
import ListsScreen from '../screens/Lists';
import ItemsScreen from '../screens/Items';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// this method controls the screen in the lists screen
const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
        },
        tabBarStyle: {display: 'flex'},
        tabBarIconStyle: {display: 'none'},
    }}
    >
        <Tab.Screen name={'Lists'} component={ListsScreen}/>
        <Tab.Screen name={'Items'} component={ItemsScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;