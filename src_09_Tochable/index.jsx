/* eslint-disable no-alert */
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      highlightColor: 'black',
    };
  }
  TouchableHighlightPress = () => {
    //alert('触碰高亮显示');
    this.setState({highlightColor: 'white'});
  };
  TouchableHighlightPressOut = () => {
    //alert('触碰高亮显示PressOut');
    this.setState({highlightColor: 'black'});
  };
  render() {
    return (
      <View style={[styles.container]}>
        <React.Fragment>
          <TouchableHighlight
            underlayColor="blue"
            onFocus={this.TouchableHighlightPress}
            onPress={this.TouchableHighlightPress}
            onLongPress={this.TouchableHighlightPress}
            onHideUnderlay={this.TouchableHighlightPressOut}>
            <View style={[styles.Item]}>
              <Text style={{color: this.state.highlightColor}}>
                触碰高亮显示
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={() => alert('触碰透明度变化')}>
            <View style={[styles.Item]}>
              <Text>触碰透明度变化</Text>
            </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => alert('触碰无响应')}>
            <View style={[styles.Item]}>
              <Text>触触碰无响应</Text>
            </View>
          </TouchableWithoutFeedback>
        </React.Fragment>
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
  Item: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  textColor: {
    color: 'black',
  },
});
