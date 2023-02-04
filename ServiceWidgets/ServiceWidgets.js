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

import ServiceWidget_Linking from './ServiceWidget_Linking';
import KonstanzLogin_Linking from './KonstanzLogin_Linking';

import ServiceWidget_Webviewer from './ServiceWidget_Webviewer';
import KonstanzLogin_Webviewer from './KonstanzLogin_Webviewer';

config = require( "../config.json");
const serviceData = {
	Handyticket: {
		name: "Handyticket",
		icon: require('./Icons/Handyticket.png'),
		link: `${config.device_ip}:${config.handyticket.port}`,
	},
	Konrad: {
		name: "Konrad",
		icon: require('./Icons/Bicycle.png'),
		link: `${config.device_ip}:${config.konrad.port}`
	},
	KonstanzLogin: {
		name: "KN-Login",
		icon: require('./Icons/KonstanzLoginLogo.jpeg'),
		link: `${config.device_ip}:${config.login.port}/kn/login`,
	}
}

const serviceView = StyleSheet.create({
    
    Handyticket: {
    
        top: 13,
        left: 252,
        width: 106,
        height: 222,
    
    },
    
    Konrad: {
    
        top: 480,
        left: 17,
        width: 106,
        height: 106,
    
    },
    
    KonstanzLogin: {
    
        bottom: 0,
        alignSelf: 'center',
        width: 80,
        height: 55,
    
    }
    }
);

function Linking(){
    return (
        <>
            {/* Adding Services */}
            <ServiceWidget_Linking
                name={serviceData.Handyticket.name}
                icon={serviceData.Handyticket.icon}
                link={serviceData.Handyticket.link}
                style={serviceView.Handyticket}>
            </ServiceWidget_Linking>

            <ServiceWidget_Linking
                name={serviceData.Konrad.name}
                icon={serviceData.Konrad.icon}
                link={serviceData.Konrad.link}
                style={serviceView.Konrad}>
            </ServiceWidget_Linking>

            {/* Adding Konstanz Login */}
            <KonstanzLogin_Linking
                name={serviceData.KonstanzLogin.name}
                icon={serviceData.KonstanzLogin.icon}
                link={serviceData.KonstanzLogin.link}
                style={serviceView.KonstanzLogin}>
            </KonstanzLogin_Linking>
        </>
    );
}

function WebViewer(){
    return (
        <>
            {/* Adding Services */}
            <ServiceWidget_Webviewer
                name={serviceData.Handyticket.name}
                icon={serviceData.Handyticket.icon}
                link={serviceData.Handyticket.link}
                style={serviceView.Handyticket}>
            </ServiceWidget_Webviewer>

            <ServiceWidget_Webviewer
                name={serviceData.Konrad.name}
                icon={serviceData.Konrad.icon}
                link={serviceData.Konrad.link}
                style={serviceView.Konrad}>
            </ServiceWidget_Webviewer>

            {/* Adding Konstanz Login */}
            <KonstanzLogin_Webviewer
                name={serviceData.KonstanzLogin.name}
                icon={serviceData.KonstanzLogin.icon}
                link={serviceData.KonstanzLogin.link}
                style={serviceView.KonstanzLogin}>
            </KonstanzLogin_Webviewer>
        </>
    );
}

function Mixed(){
    return (
        <>
            {/* Adding Services */}
            <ServiceWidget_Linking
                name={serviceData.Handyticket.name}
                icon={serviceData.Handyticket.icon}
                link={serviceData.Handyticket.link}
                style={serviceView.Handyticket}>
            </ServiceWidget_Linking>

            <ServiceWidget_Webviewer
                name={serviceData.Konrad.name}
                icon={serviceData.Konrad.icon}
                link={serviceData.Konrad.link}
                style={serviceView.Konrad}>
            </ServiceWidget_Webviewer>

            {/* Adding Konstanz Login */}
            <KonstanzLogin_Webviewer
                name={serviceData.KonstanzLogin.name}
                icon={serviceData.KonstanzLogin.icon}
                link={serviceData.KonstanzLogin.link}
                style={serviceView.KonstanzLogin}>
            </KonstanzLogin_Webviewer>
        </>
    );
}
    

function ServicWidgets({method}) {
    if (method == "Linking"){
        return Linking();
    }
    else if (method == "Webviewer"){
        return WebViewer();
    }
    else if (method == "Mixed"){
        return Mixed();
    }
    else{
        return (
            <View style={{backgroundColor: '#FFFF00'}}>
                <Text>No method provided to ServiceWidgets.js</Text>
                <Text>available method are:</Text>
                <Text>"Linking"</Text>
                <Text>"Webviewer"</Text>
                <Text>"Mixed"</Text>
            </View>
        );
    }
}

export default ServicWidgets