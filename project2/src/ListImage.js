/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ItemImage from './ItemImage';

const link1 =
  'https://ejoy-english.com/blog/wp-content/uploads/2018/05/tie%CC%82%CC%81ng-anh-u%CC%81c-.jpg';
const link2 =
  'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg';
const link3 =
  'https://ejoy-english.com/blog/wp-content/uploads/2018/05/tie%CC%82%CC%81ng-anh-u%CC%81c-.jpg';
const arr = [link1, link2, link3];

 const ListImage = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const refInput = useRef(null);
  const enter = () =>{
    refInput.current.focus();
    
  };
  return (
    <View style={styles.wrapView}>
      <KeyboardAwareScrollView>
        <View style={styles.wrapText}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.wrapListImage}>
          {arr.map((item, index) => {
            return (
              <ItemImage
                style={styles.listImage}
                source={item}
                key={index.toString()}
              />
            );
          })}
        </View>

        <View style={styles.wrapViewInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Nhap"
            returnKeyType="next"
            onSubmitEditing={enter}
            blurOnSubmit={false}
          />
          <TextInput
            ref={refInput}
            style={styles.textInput}
            onChangeText={(text) => setText2(text)}
            value={text2}
            placeholder="Nhap 2"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapView: {
    flex: 1,
  },
  wrapListImage: {
    width: '100%',
    height: 450,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: '#555',
    margin: 10,
    borderBottomWidth: 1,
  },
  wrapViewInput: {
    width: 350,
    height: 200,
    margin: 10,
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 17,
  },
  wrapText: {
    margin: 10,
    width: 350,
    height: 70,

    marginTop: 10,
  },
  listImage: {
    margin: 10,
  },
});
export default ListImage;
