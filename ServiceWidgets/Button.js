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

      <Image style={styles.icon} source={icon}/>
      <Text style={styles.text}>{name}</Text>
      <View style={{flex:0.2}}></View>
      
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

  icon:{
    flex:1,
    resizeMode:"center",
  },
  
  text: {
    color:'white',
    alignSelf:'center',
    fontSize:28/PixelRatio(),
  }

});