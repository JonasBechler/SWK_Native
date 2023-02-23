import React, {useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from 'react-native';

import PixelRatio from './ServiceWidgets/PixelRatio';
import ServicWidgets from './ServiceWidgets/ServiceWidgets';
import State_Controll from './ServiceWidgets/State_Controll';



export default function App (){
  const [openingMethod, setOpeningMethod] = useState(0);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myDimenstion}>
        
      <ImageBackground source={require('./BackgroundMeinKonstanz.png')} resizeMode='stretch' style={styles.container}>
        <ServicWidgets
          method={controllData.OpeningMethod.definitions[openingMethod]}
        >
        </ServicWidgets>

        <State_Controll 
          state={openingMethod}  
          setState={setOpeningMethod} 
          controllData={controllData.OpeningMethod}
          style={controllView}>
        </State_Controll>
      </ImageBackground>

      </View>
      
      
    </SafeAreaView>
  );
}



const controllView = StyleSheet.create({ 
  top: 960/PixelRatio(),
  left: 502/PixelRatio(),
  width: 212/PixelRatio(),
  height: 212/PixelRatio(),
})

const controllData = {
  OpeningMethod: {
		name: "Öffnungsmethode",
    definitions: ["Linking", "Webviewer", "Mixed"],
    descriptions: [
      "Hierbei handelt es sich um Aufrufe im Webbrowser, so können auch Apps geöffnent werden, sofern sie im App-Store verfügbar sind.",
      "Das Modul react-native-webview wird verwendet.",
      "Hier ist Konrad und KN-Login als Webview und das Handyticket als Linking (Deep Link) eingebaut."],
      
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CD2C29',
  },

  myDimenstion: {
    width: 748/PixelRatio(),
    height: 1294/PixelRatio(),
    backgroundColor: '#00F0F0',

  }

});



