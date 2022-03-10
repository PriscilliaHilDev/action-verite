import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import colors, {getHeight, getfontSize, getWidth} from '../../assets/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
   
    contentAll: {
        flex: 1,
        backgroundColor:'#B7006E',
    },
    input:{
        borderColor:'transparent',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
        borderRadius:10,
        height:windowHeight/15,
        marginLeft:'15%',
        marginRight:"15%",
        height:getHeight(windowHeight,9, windowHeight,10),
        padding:5
      },
      imagePlayers: {
        flex: 1,
        justifyContent:'center',
        width:'100%',
        height:'80%',
        alignItems:'center', 
        marginTop:20  
      },
      imageGame:{
        flex: 1,
        width:getWidth(windowWidth, 1.8, windowWidth, 1.5),
        height:getHeight(windowHeight, 1.14, windowHeight, 1.2),
        marginTop:getHeight(windowHeight, 30, windowHeight, 30),
        marginLeft:windowWidth/5
      }
  });
export default styles;

