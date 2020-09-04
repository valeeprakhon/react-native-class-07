import React, {Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,FlatList } from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'; 

export default class List extends Component {
  constructor(props){
    super(props);

    const { navigation,route } = this.props;
    this.navigation = navigation;
    this.route = route;
  }

  renderItem=({item})=>{
    return(
      <View style={{alignItems:"center",backgroundColor:"white", flexDirection:"row", height:50}}>
        <Text style={{fontSize:30,marginStart:8}}>{item.name}</Text>
        <TouchableOpacity style={{position:'absolute', right:0}} onPress={()=>this.route.params.deleteTodoList(item.key)}>
          <View>
            <MaterialIcons name="delete" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderSeparator=()=>{
    return(
      <View style={{height:4}} />
    );
  }

  render(){
    return (
      <FlatList style={styles.listContainer}
        data={this.route.params.todoList}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.key.toString()}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
   
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16
  },
});
