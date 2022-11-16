import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ServiceWidget({name, icon, link, style, openLink}) {

  function ClickHandler () {
    openLink(link)
  }

  return (
    <TouchableOpacity style={[styles.serviceWidget, style]} onPress={() => ClickHandler()}>

      <Image style={styles.icon} source={icon}/>
      <Text style={styles.text}>{name}</Text>
      <View style={{flex:0.2}}></View>
      
    </TouchableOpacity>
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

  icon:{

    flex:1,
    resizeMode:"center",

  },
  
  text: {

    color:'white',
    fontSize:14,
    alignSelf:'center',

  }

});