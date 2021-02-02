/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Image,Text,TextInput,StyleSheet} from 'react-native';

const DangNhap = ()=>{
    return(
        <View style={styles.wrapView}>
            <View style={styles.wrapLogo}>
                <Text>
                    aaaaaa
                </Text>
                <Image style={styles.wrapImage} source={require('E:\XNative\project2\image\logo/logo.png')}> </Image>
            </View>
            <View style={styles.wrapDangNhap}>

            </View>
        </View>
    );
};
const styles= StyleSheet.create({
    wrapView:{
        width:'100%',
        height:'100%',
        flex:1
    },
    wrapLogo:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
     wrapImage:{

     },
     wrapDangNhap:{
         flex:1,
         
     }
});
export default DangNhap;