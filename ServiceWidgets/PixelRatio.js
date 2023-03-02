import { PixelRatio, Dimensions } from 'react-native';

export default function MyPixelRatio (){
    const width = 748;
    const windowWidth = Dimensions.get('window').width;
    const height = 1294;
    const windowHeight = Dimensions.get('window').height;

    const pr_width = width / windowWidth
    const pr_height = height / windowHeight
    const pr = Math.max(pr_width, pr_height) 
    return pr
}