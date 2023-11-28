import {StyleSheet, View, StatusBar, Switch} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      hiddenStatusBar: false,
    };
  }
  toggleStatusBar = () => {
    this.setState({
      hiddenStatusBar: !this.state.hiddenStatusBar,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={this.state.hiddenStatusBar}
          backgroundColor={'red'} //仅在安卓应用有效
          barStyle={'light-content'}
        />
        <Switch
          trackColor={{false: '#999', true: '#666'}}
          value={this.state.hiddenStatusBar}
          thumbColor={this.state.hiddenStatusBar ? 'red' : 'white'}
          onValueChange={this.toggleStatusBar}
        />
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
