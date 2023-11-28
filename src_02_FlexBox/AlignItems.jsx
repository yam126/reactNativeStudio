import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class AlignItems extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{height: '100%'}}>
        <Text>项目在交叉轴上的对齐方式</Text>
        <ScrollView>
          <Text style={[styles.h3]}>alignItems:'flex-start'(默认)</Text>
          <View
            style={[styles.container, styles.flexRow, styles.alignItemsStart]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems:'center'</Text>
          <View
            style={[styles.container, styles.flexRow, styles.alignItemsCenter]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems:'flex-end'</Text>
          <View
            style={[styles.container, styles.flexRow, styles.alignItemsEnd]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems:'stretch'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.alignItemsStretch,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase]}>关羽</Text>
            <Text style={[styles.ItemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems:'baseline'</Text>
          <View
            style={[
              styles.container,
              styles.flexRowReverse,
              styles.alignItemsBaseLine,
            ]}>
            <Text style={[styles.ItemBase]}>刘备</Text>
            <Text style={[styles.ItemBase, {fontSize: 60}]}>关羽</Text>
            <Text style={[styles.ItemBase, {fontSize: 40}]}>张飞</Text>
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
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsBaseLine: {
    alignItems: 'baseline',
  },
});
