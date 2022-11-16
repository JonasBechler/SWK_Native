import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'; 


export default function WebViewer( {webviewerUrl, closeLink} ) {

    function closeWebviewerHandler () {
        closeLink()
    }
    return (
        <>
            
            <WebView 
            originWhitelist={['*']} 
            source={{url: webviewerUrl}}
            ></WebView>

            <TouchableOpacity style={{position: 'absolute', left:5, top:25}} onPress={() => closeWebviewerHandler()}>
                <Image style={styles.Image} source={require('./Icons/Back.png')}/>

            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:40,
        height:40,
        resizeMode: "contain",
      },
})
