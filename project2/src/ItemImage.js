/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

const ItemImage = ({source}) => {
  return (
    <View style={styles.wrapView}>
      <Image style={styles.wrapImage} source={{uri: source}} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapView: {
    width: 350,
    height: 120,
  },
  wrapImage: {
    width: 320,
    height:120,
  },
});
export default ItemImage;