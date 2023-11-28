import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class FlexDirection extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.h2]}>主轴方向</Text>
        <ScrollView>
          <Text style={[styles.h3]}>flexDirection:'column'(默认)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection:'column-reverse'</Text>
          <View style={[styles.container, styles.flexColumnReverse]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection:'row'</Text>
          <View style={[styles.container, styles.flexRow]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection:'row-reverse'</Text>
          <View style={[styles.container, styles.flexRowReverse]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  h3: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  ItemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    padding: 4,
    backgroundColor: '#dfb',
    textAlign: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
});
