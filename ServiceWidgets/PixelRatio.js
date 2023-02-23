import { PixelRatio, Dimensions } from 'react-native';

export default function MyPixelRatio (){
    const width = 748;
    const windowWidth = Dimensions.get('window').width;
    const height = 1294;
    const windowHeight = Dimensions.get('window').height;

    let pr = PixelRatio.get()
    while (windowWidth > width/pr || windowHeight > height/pr){
        pr=pr-0.1;
    }
    pr=pr+0.1;
    
    return pr
}