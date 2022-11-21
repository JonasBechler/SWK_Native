import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'; 


export default function WebViewerKnLogin( {webviewerUrl, closeLink} ) {

    function closeWebviewerHandler () {
        closeLink()
    }
    return (
            
            
        <TouchableOpacity activeOpacity={1} style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor:"rgba(0, 0, 0, 0.7)"}} onPress={() => closeWebviewerHandler()}>

            <TouchableOpacity activeOpacity={1} style={{position: "absolute", top: 50, left: 30, bottom: 30, right: 30, backgroundColor:"red", borderRadius:15}} onPress={() => {}}>
                <View style={{margin: 10, flexGrow:1, borderRadius:15}} >
                    <WebView 
                        originWhitelist={['*']} 
                        source={{url: webviewerUrl}}
                        ></WebView>

                </View>

            </TouchableOpacity>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:40,
        height:40,
        resizeMode: "contain",
    
      },
})
