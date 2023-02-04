import React, {useCallback, useState} from 'react'
import { View, StyleSheet, Linking, Modal, Text, Image, TouchableOpacity } from 'react-native'
import WebViewer from '../WebViewer/WebViewer';


export default function ServicWidget({name, icon, link, style}) {
  const [showWebview, setShowWebview] = useState(false);

  const ClickHandler = () => {
    setShowWebview(true)
  }
  
  const closeWebview = () => {
    setShowWebview(false)
  }

  
  return(
    <>
      <View style={[styles.serviceWidget, style]}></View>
      <TouchableOpacity style={[styles.serviceWidget, style]} onPress={() => ClickHandler()}>

        <Image style={styles.icon} source={icon}/>
        <Text style={styles.text}>{name}</Text>
        <View style={{flex:0.2}}></View>
        
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWebview}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowWebview(!showWebview);
        }}>
      <WebViewer webviewerUrl={link} closeLink={closeWebview}></WebViewer>
    </Modal>
    </>
  );
  

  

    

  
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