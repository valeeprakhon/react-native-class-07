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
    };
  }

  renderItem = ({ item }) => {
     return (
      <View style={styles.show}>
        <Text style={{ fontSize: 24, marginStart: 8, color: '#6b4683' }}>
          {item.event}
        </Text> 
      </View>
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
