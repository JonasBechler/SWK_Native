import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function KonstanzLogin({name, icon, link, style, openLink}) {
  function ClickHandler () {
    openLink(link)
  }
  return (
    <TouchableOpacity style={[styles.KonstanzLogin, style]} onPress={() => ClickHandler()}>

      <Image style={styles.icon} source={icon}/>
      <Text style={styles.text}>{name}</Text>


    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    KonstanzLogin: {

        position:'absolute',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius:5,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        borderBottomWidth:0,
        borderWidth:2,
        borderColor: 'lightgray',

    },

    icon:{

      flex:1,
      resizeMode:"contain",
      margin:2,

    },
    
    text: {

      color:'dimgray',
      fontSize:10,

    }

  });