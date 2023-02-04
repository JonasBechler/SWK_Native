import React, {useCallback, useState} from 'react'
import { View, StyleSheet, Linking, Text, Image, TouchableOpacity } from 'react-native'
import WebViewer from '../WebViewer/WebViewer';


export default function State_Controll({name, state, setState, definitions, descriptions, style}) {



  const ClickHandler = () => {
    if (state < definitions.length - 1){
      setState(state+1);
    }
    else{
      setState(0);
    }
  }
  



    
  return (
    <>
    <View style={[styles.serviceWidget, style]}></View>
    <TouchableOpacity style={[styles.serviceWidget, style]} onPress={() => ClickHandler()}>
      <View style={{margin:5}}>
        <Text style={styles.text}>{name}</Text>
        <View style={{flex:0.2}}></View>
        <Text style={styles.text}>{definitions[state]}</Text>
        <Text style={styles.text_small}>{descriptions[state]}</Text>


        <View style={{flex:0.2}}></View>
      </View>
      
    </TouchableOpacity>
    </>
  )
}
  
const styles = StyleSheet.create({
  serviceWidget:{

    position:'absolute',
    alignItems:'center',
    backgroundColor: '#CD2C29',
    borderRadius:8,
    borderWidth:1,
    borderColor:'white',

  },

  text: {
    color:'white',
    fontSize:10,
    alignSelf:'center',
  },
  text_small:{
    color:'white',
    fontSize:8,
    alignSelf:'center',
  }
});