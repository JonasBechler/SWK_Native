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

import ServicWidgets from './ServiceWidgets/ServiceWidgets';
import State_Controll from './ServiceWidgets/State_Controll';




export default function App (){
  const [openingMethod, setOpeningMethod] = useState(0);


  return (
    <SafeAreaView style={styles.container}>
      
      <ImageBackground source={require('./BackgroundMeinKonstanz.png')} resizeMode='stretch' style={styles.container}>
        <ServicWidgets
          method={controllData.OpeningMethod.definitions[openingMethod]}>

        </ServicWidgets>
        <State_Controll 
        name={controllData.OpeningMethod.name} 
        state={openingMethod}  
        setState={setOpeningMethod} 
        definitions={controllData.OpeningMethod.definitions} 
        descriptions={controllData.OpeningMethod.descriptions}
        style={controllView}>

        </State_Controll>
      </ImageBackground>
    </SafeAreaView>
  );
}

const controllView = StyleSheet.create({ 
  top: 480,
  left: 252,
  width: 106,
  height: 106
})

const controllData = {
  OpeningMethod: {
		name: "Öffnungsmethode",
    definitions: ["Linking", "Webviewer", "Mixed"],
    descriptions: [
      "Hierbei handelt es sich um Aufrufe im Webbrowser, so können auch Apps im geöffnent werden, sofern sie im Appstore verfügbar sind",
      "Das Modul react-native-webview wird verwendet",
      "Hier ist Konrad und KN-Login als Webview und das Handyticket als Linking (Deep Link) eingebaut."],
      
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CD2C29',
  }
  
});

