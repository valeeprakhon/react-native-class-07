import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Adder from './Adder'
import List from './List'

function AdderScreen() {
  const navigation = useNavigation();
  return (
    <Adder navigation={navigation}/>
  );
}

function ListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <List navigation={navigation} route={route}/>
  );
}



const Stack = createStackNavigator();

const  navigationAdderOptions={
   title: 'Add Todo List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#845cc3',
    },
};

const navigationListOptions={
  title: 'Show Todo List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#845cc3',
    },
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={navigationAdderOptions} name="Add" component={AdderScreen} />
      <Stack.Screen options={navigationListOptions} name="List" component={ListScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
