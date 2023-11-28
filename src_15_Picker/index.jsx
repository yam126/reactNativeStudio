/*prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
    };
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.color}]}>
        <Picker
          mode="dropdown" // 只在安卓下有效
          selectionColor="red"
          selectedValue={this.state.color}
          style={{height: 50, width: 160, fontSize: 15}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({color: itemValue});
          }}>
          <Picker.Item label="白色" value="white" />
          <Picker.Item label="红色" value="red" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
