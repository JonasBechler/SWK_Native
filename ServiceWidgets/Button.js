import React, {useCallback, useState} from 'react'
import {
    View, 
    StyleSheet, 
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native'

import PixelRatio from './PixelRatio';



export default function Button({name, icon, style, onPress}) {
  return (
    <>
    <View style={[styles.serviceWidget, style]}></View>
    <TouchableOpacity style={[styles.serviceWidget, style]} onPress={() => onPress()}>

      <View style={{flex:0.5}}></View>
      <View style={styles.icon_div}>
        <Image style={styles.icon} source={icon}/>
      </View>
      
      <Text style={styles.text}>{name}</Text>
      <View style={{flex:0.5}}></View>
      
    </TouchableOpacity>
    </>
  )
}
  

const styles = StyleSheet.create({
  serviceWidget:{
    position:'absolute',
    alignItems:'center',
    backgroundColor: '#CD2C29',
    borderColor:'white',
    borderRadius:16/PixelRatio(),
    borderWidth:2/PixelRatio(),
  },

  icon_div:{
    width: 150/PixelRatio(),
    height: 150/PixelRatio(),
  },

  icon:{
    flex:1,
    alignSelf: "center",
    resizeMode:"contain",
  },
  
  text: {
    color:'white',
    alignSelf:'center',
    fontSize:28/PixelRatio(),
  }

});