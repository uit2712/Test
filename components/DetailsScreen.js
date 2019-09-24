import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        name : this.props.navigation.state.params.name.value,
        contact: this.props.navigation.state.params.name.Contact
      }
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{this.state.name}</Text>
          <Text>{this.state.contact}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }