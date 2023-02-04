import React, {useCallback, useState} from 'react'
import { View, StyleSheet, Linking, Text, Image, TouchableOpacity } from 'react-native'

export default function KonstanzLogin({name, icon, link, style, openLink}) {
  const ClickHandler = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, [link]);


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