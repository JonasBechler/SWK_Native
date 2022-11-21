import { StyleSheet, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import ServiceWidget from './ServiceWidgets/ServiceWidget';
import KonstanzLogin from './ServiceWidgets/KonstanzLogin';

import WebViewer from './WebViewer/WebViewer';
import WebViewerKnLogin from './WebViewer/WebViewerKnLogin';

import config from './config.json';


export default function App() {
	const [showService, setShowService] = useState(false);
	const [showKnLogin, setShowKnLogin] = useState(false);

	const [webviewerUrl, setWebviewerUrl] = useState(serviceData.KonstanzLogin.link);


	const openLinkService = (link) => {
		setShowService(true);
		setWebviewerUrl(link);
	}

	const openLinkKonstanz = (link) => {
		setShowKnLogin(true);
		setWebviewerUrl(link);
	}

	const closeLink = () => {
		setShowService(false);
		setShowKnLogin(false);
		//setWebviewerUrl("");
	}

	const get_content = () => {
		if (showService){
			return <WebViewer webviewerUrl={webviewerUrl} closeLink={closeLink}></WebViewer>
		}

		else return <>
			{/* Show MeinKonstanz screenshot */}
			<ImageBackground source={require('./BackgroundMeinKonstanz.png')} resizeMode='center' style={styles.BackgroundImage}>

				{/* Repaint top pixels */}
				<View style={styles.Top}></View>

				{/* Adding Services */}
				<ServiceWidget
					name={serviceData.Handyticket.name}
					icon={serviceData.Handyticket.icon}
					link={serviceData.Handyticket.link}
					style={styles.Handyticket}
					openLink={openLinkService}>
				</ServiceWidget>

				<ServiceWidget
					name={serviceData.Konrad.name}
					icon={serviceData.Konrad.icon}
					link={serviceData.Konrad.link}
					style={styles.Konrad}
					openLink={openLinkService}>
				</ServiceWidget>

				{/* Adding Konstanz Login */}
				<KonstanzLogin
					name={serviceData.KonstanzLogin.name}
					icon={serviceData.KonstanzLogin.icon}
					link={serviceData.KonstanzLogin.link}
					style={styles.KonstanzLogin}
					openLink={openLinkKonstanz}>
				</KonstanzLogin>

			</ImageBackground>
			{(showKnLogin)?(
				<>
					<WebViewerKnLogin webviewerUrl={webviewerUrl} closeLink={closeLink}></WebViewerKnLogin>
				</>
			) : (
				<>
				</>
			)}
		</>
	}

	return (
		<>

			{
				get_content()
			}
		</>
	);
}

const styles = StyleSheet.create({

	BackgroundImage: {

		flex: 1,

	},

	Top: {

		height: 20,
		backgroundColor: '#CD2C29'

	},

	Handyticket: {

		top: 33,
		left: 252,
		width: 106,
		height: 222,

	},

	Konrad: {

		top: 500,
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
});

const serviceData = {
	Handyticket: {
		name: "Handyticket",
		icon: require('./ServiceWidgets/Icons/Handyticket.png'),
		link: `${config.device_ip}:${config.handyticket.port}`,
	},
	Konrad: {
		name: "Konrad",
		icon: require('./ServiceWidgets/Icons/Bicycle.png'),
		link: `${config.device_ip}:${config.konrad.port}`
	},
	KonstanzLogin: {
		name: "KN-Login",
		icon: require('./ServiceWidgets/Icons/KonstanzLoginLogo.jpeg'),
		link: `${config.device_ip}:${config.login.port}/login`,
	}
}
