import React, {useCallback, useState} from 'react'
import { View, StyleSheet, Linking, Modal, Text, Image, TouchableOpacity } from 'react-native'
import WebViewerKnLogin from '../WebViewer/WebViewerKnLogin';


export default function KonstanzLogin({name, icon, link, style}) {
  const [showWebview, setShowWebview] = useState(false);

  function ClickHandler () {
    setShowWebview(true)
  }

  const closeWebview = () => {
    setShowWebview(false)
  }

  function button() {
    return (<>
      <TouchableOpacity style={[styles.KonstanzLogin, style]} onPress={() => ClickHandler()}>

        <Image style={styles.icon} source={icon}/>
        <Text style={styles.text}>{name}</Text>


      </TouchableOpacity>

      
    </>)
  }

  

  return(
    <>
      {button()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWebview}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowWebview(!showWebview);
        }}>
      <WebViewerKnLogin webviewerUrl={link} closeLink={closeWebview}></WebViewerKnLogin>
    </Modal>
    </>
  );
    
  
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