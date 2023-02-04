import React, {useCallback, useState} from 'react'
import { View, StyleSheet, Linking, Text, Image, TouchableOpacity } from 'react-native'
import WebViewer from '../WebViewer/WebViewer';


export default function ServicWidget({name, icon, link, style}) {



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
    <>
    <View style={[styles.serviceWidget, style]}></View>
    <TouchableOpacity style={[styles.serviceWidget, style]} onPress={() => ClickHandler()}>

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