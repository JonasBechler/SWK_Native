import React, {useCallback} from 'react'
import { Linking } from 'react-native'
import Button from './Button';

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
    <Button name={name} icon={icon} style={style} onPress={ClickHandler}></Button>
  )
};