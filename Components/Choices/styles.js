import { StyleSheet } from 'react-native';
import {getHeight, getfontSize, getWidth} from "../../assets/colors"
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
   
    mainContent: {
         backgroundColor:"#B7006E",
         flex:1,  
    },
    btnChangePlayers:{
        flex:1,
        justifyContent:"flex-end",
    }, 
    themeGame:{
      flex:0.3,
      backgroundColor:'#fff',
      justifyContent:'center',
      margin: 30,
      borderRadius: 10,
      borderWidth:4,
      padding:20,
    },
    btnDilem:{
        flex:1,
        position:"relative",
        justifyContent:"flex-start",
        margin:30,
        marginTop:15,  
    },
    image: {
        width: getWidth(windowWidth,1, windowWidth,1),
        height: getHeight(windowHeight,1.12 , windowHeight, 1.4), 
        flex:0.3,
    },
    limitation:{
        color:"#fff",
        fontSize:getfontSize(windowWidth, 28, windowWidth, 20),
        padding:10,
        paddingTop:0,
        fontWeight:"bold"
    },
    limitation1:{
        color:"#fff",
        fontSize:getfontSize(windowWidth, 28, windowWidth, 20),
        padding:10,
        paddingTop:0,
        fontStyle:'italic'
    },

    CurrentPlayerDilem:{
        fontSize: getfontSize(windowWidth, 12, windowWidth,10),
        textAlign:'center',
        fontWeight:"bold",
        color:"#fff",
        fontFamily:'georgia',
        padding:15,
        flexWrap:"wrap",
    },
    CurrentPlayer:{
        fontSize: getfontSize(windowWidth, 12, windowWidth,10),
        textAlign:'center',
        fontWeight:"bold",
        color:"black",
        fontFamily:'georgia',
        padding:15,
        flexWrap:"wrap",
    },
    btnNextGame:{
        flex:1,
        justifyContent:'flex-end'
    },
    
    theme:{
        textAlign:"center",
        fontSize:getfontSize(windowWidth, 15, windowWidth, 10),
        fontWeight:"bold",
        color:'#B7006E',
        fontWeight:'bold',
        paddingTop:15
    },
    question:{
        color:"#fff",
        fontSize:getfontSize(windowWidth, 20, windowWidth, 16),
        textAlign:"center",
        padding:20,
        paddingTop:0,
        flexWrap:"wrap"
    },

  });
export default styles;
