import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoFormScreen() {
  const navigation = useNavigation();
  return (
    <TodoForm navigation={navigation}/>
  );
}

function TodoListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <TodoList navigation={navigation} route={route}/>
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
      <Stack.Screen options={navigationAdderOptions} name="Add" component={TodoFormScreen} />
      <Stack.Screen options={navigationListOptions} name="List" component={TodoListScreen} />
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

