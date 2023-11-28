import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text>项目在主轴上的对齐方式</Text>
        <ScrollView>
          <Text style={[styles.h3]}>justifyContent:'flex-start'(默认)</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentStart,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'center'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentCenter,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'flex-end'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentEnd,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'space-around'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentSpaceAround,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'space-evenly'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentSpaceEvenly,
            ]}>
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
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
});
