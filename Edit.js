import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
  Button,
  TextInput
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: '1', event: 'Play football' },
        { id: '2', event: 'Watch TV' },
      ],
      selectedID:0,
      editText:''
    };
  }

  onEditPress = (id) => {
    this.setState({selectedID:id})
    console.log(this.state.selectedID)
  };

  onDeletePress = (id) => {
     this.setState({list:[...this.state.list.filter((item)=>item.id!==id)]});
  };

  onSavePress = (id) =>{
     let newList = this.state.list.map(
                      item=>(item.id===id)?{...item,event:this.state.editText}:item
                    );
    this.setState({list:newList});
    this.setState({selectedID:0})
  }

  showItem = (item) =>{
    return (
      <View style={styles.show}>
        <Text style={{ fontSize: 24, marginStart: 8, color: '#6b4683' }}>
          {item.event}
        </Text>
        <View style={{ position: 'absolute', right: 0, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.onEditPress(item.id)}>
            <View style={{ marginEnd: 8 }}>
              <MaterialIcons name="edit" size={26} color="#6b4683" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginEnd: 8 }}
            onPress={() => this.onDeletePress(item.id)}>
            <MaterialIcons name="delete" size={26} color="#6b4683" />
          </TouchableOpacity>
        </View>
      </View>
    );

  }
  

  editItem = (item) =>{
    return (
      <View style={styles.show}>
        <View style={{marginStart: 8, flexDirection: 'row'}}>
          <TextInput
            placeholder={item.event}
            style={{fontSize: 24,width:'80%'}}
            onChangeText={txt => this.setState({editText:txt})}
          />
          <TouchableOpacity 
            style={{width:'20%',alignItems:'flex-end'}} 
            onPress={() => this.onSavePress(item.id)}>
            <MaterialIcons name="save" size={26} color="#6b4683" />
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  renderItem = ({ item }) => {
    var view
    if(item.id!=this.state.selectedID){
      view = this.showItem(item)
    }else{
      view = this.editItem(item)
    }
    return (
      view
    );
  };

  render(props) {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.state.list}
        renderItem={this.renderItem}
        extraData={this.state.selectedID}
        keyExtractor={(item, index) => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  show:{
    margin: 2,
    padding: 8,
    backgroundColor: 'white',
  }
});
