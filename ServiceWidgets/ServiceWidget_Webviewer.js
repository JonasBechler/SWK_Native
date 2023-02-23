import React, {useState} from 'react'
import { Modal } from 'react-native'
import WebViewer from '../WebViewer/WebViewer';
import Button from './Button';

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
      <Button name={name} icon={icon} style={style} onPress={ClickHandler}></Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWebview}
        onRequestClose={() => {
          setShowWebview(!showWebview);
        }}>
        <WebViewer webviewerUrl={link} closeLink={closeWebview}></WebViewer>
      </Modal>
    </>
  );
  

  

    

  
}
  

