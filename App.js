import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Add from './Add'
import Show from './Show'
import Edit from './Edit'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const AddScreen=({navigation})=>(
  <Add navigation={navigation}/>
)

const ShowScreen=({navigation})=>(
  <Show navigation={navigation}/>
)

const EditScreen=({navigation})=>(
  <Edit navigation={navigation}/>
)

const Drawer = createDrawerNavigator();


const MyDrawer=()=> (
  <Drawer.Navigator>
    <Drawer.Screen  
        name="Add" 
        component={AddScreen} 
        options={{ headerStyle: {backgroundColor: '#6b4683'},headerTintColor: 'white'}}/>

    <Drawer.Screen  
        name="Show" 
        component={ShowScreen}
        options={{ headerStyle: {backgroundColor: '#6b4683'},headerTintColor: 'white'}}/>

    <Drawer.Screen  
        name="Edit" 
        component={EditScreen} 
        options={{ headerStyle: {backgroundColor: '#6b4683'},headerTintColor: 'white'}}/>

  </Drawer.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      {<MyDrawer />}
    </NavigationContainer>
  );
}
