import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import colors, {getfontSize, getHeight, getWidth} from "../../assets/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#B7006E',
    },
    containerBackground:{
      flex:1,
    },
    image: {
      flex: 1,
      alignItems:'center',
      width: "100%",
      height: getHeight(windowHeight, 2, windowHeight, 2.5),
      position: 'relative',
    },
    text1: {
      color: "white",
      fontSize: getfontSize(windowWidth,10, windowWidth,9),
      fontWeight: "bold",
    },
    text2: {
      color: "white",
      fontSize: getfontSize(windowWidth,12, windowWidth,11),
      fontWeight: "bold",
      textAlign:'center',
      fontStyle:'italic'
    },
    text3: {
      color: "white",
      fontSize: getfontSize(windowWidth,10, windowWidth,9),
      fontWeight: "bold",
    },
    title:{
      padding:getWidth(windowWidth, 13, windowWidth, 6),
    },
    input:{
      borderColor:'transparent',
      backgroundColor: 'rgba(255, 255, 255, 0.6)', 
      borderRadius:10,
      marginLeft:getWidth(windowWidth, 2.55, windowWidth, 3),
      marginRight:getWidth(windowWidth,2.5, windowWidth, 3),
      height:getHeight(windowHeight,9, windowHeight,10),
      padding:5,
    },
    inputContent:{
      flex:1,
      position:'relative',
      top:windowHeight/15,
      alignItems:'center'
    }

  });
export default styles;
