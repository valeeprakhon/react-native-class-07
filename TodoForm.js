import React, {Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: null,
      todoList:[]
    }
  }

  submitTodo=(todo)=>{
    this.setState({todoList:[...this.state.todoList,{key:Math.random(),name:todo,selected:false}]});
  }

  deleteTodo=(key)=>{
    this.setState({todoList:[...this.state.todoList.filter((item)=>item.key!==key)]});
  }

  editTodo=(key)=>{
    let newTodoList = this.state.todoList.map(todo=>(todo.key===key)?{...todo,selected:!todo.selected}:todo);
    this.setState({todoList:newTodoList});
  }

  render(){
   return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo</Text>
        <TextInput
          value={this.state.food}
          placeholder='Event'
          style={styles.input}
          onChangeText={(todo) => this.setState({ todo })}
        />
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            this.submitTodo(this.state.todo)
            this.setState({ food: null })
          }}>
          <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() =>
            this.props.navigation.navigate('List',    {todoList:this.state.todoList,
            test:"OK",
            deleteTodoList:this.deleteTodo,
            editTodoList:this.editTodo})}>
          <Text style={{ fontSize: 22 }}>Go to TodoList</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    marginBottom: 48
  },
  input: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '90%',
    borderRadius: 10,
  }
});
