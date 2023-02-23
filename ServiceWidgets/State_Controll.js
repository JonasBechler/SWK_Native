import React from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native'

import PixelRatio from './PixelRatio';



export default function State_Controll({state, setState, controllData, style}) {
  const ClickHandler = () => {
    if (state < controllData.definitions.length - 1){
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
        <Text style={styles.text}>{controllData.name}</Text>
        <View style={{flex:0.2}}></View>
        <Text style={styles.text}>{controllData.definitions[state]}</Text>
        <Text style={styles.text_small}>{controllData.descriptions[state]}</Text>


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
    borderRadius:16/PixelRatio(),
    borderWidth:2/PixelRatio(),
    borderColor:'white',

  },

  text: {
    color:'white',
    fontSize:20/PixelRatio(),
    alignSelf:'center',
  },
  text_small:{
    color:'white',
    fontSize:16/PixelRatio(),
    alignSelf:'center',
  }
});