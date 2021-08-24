import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button,TextInput
} from 'react-native';


export default class Add extends Component {
  constructor(props){
    super(props);
     this.state = {
       item:''
    };
  }

  
  render(){
   return (
      <View style={styles.container}>
        <TextInput
          placeholder='Event'
          style={styles.input}
          onChangeText={txt => this.setState({item:txt})}
        />
        <TouchableOpacity style={styles.submit}
          onPress={() => {
            this.submitTodo(this.state.todo)
            this.setState({ food: null })
          }}>
          <Text style={{ fontSize: 22,color:'white' }}>Submit</Text>
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
  input: {
    fontSize: 24,
    marginBottom: 16,
    borderWidth: 1,
    padding: 8,
    width: '90%',
    borderRadius: 10,
    color:'#6b4683'
  },
  submit:{
    padding: 8,
    borderWidth: 1,
    width: '90%',
    alignItems:'center',
    borderRadius: 10,
    backgroundColor:'#6b4683'
  }
});