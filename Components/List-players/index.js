import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input} from 'react-native-elements';
import {AllPlayers, CurrentPlayer, Session} from '../../Redux/Actions/players';
import styles from "./styles";
import colors, {getfontSize} from '../../assets/colors';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const index = ({navigation}) => {

    setTimeout(() => {
        if(error != ""){
            setError("")
        }
    }, 4000);
    
    const [nbPlay, setNbPlay] = useState(1);
    const [namePlayer, setNamePlayer] = useState('');
    const dispatch = useDispatch();
    const {players: {listPlayers, nbPlayers}} = useSelector(state => state);
    const [btnPlay, setBtnPlay] = useState(false);
    const [error, setError] = useState("");

    const imgGame = {uri:'https://cdn.pixabay.com/photo/2020/04/03/07/09/comic-speech-bubbles-4997671_960_720.png'}

    const image = {uri:"https://cdn.pixabay.com/photo/2020/07/14/08/01/woman-5403273_1280.png"}


    const everyPlayers = () => {
        
        if(nbPlay <= nbPlayers && namePlayer.length > 0  && namePlayer.length < 18) {
            
            dispatch(AllPlayers(namePlayer));
            setNbPlay(nbPlay +1);
            setNamePlayer('');
            setError('');
        }
       

        if(namePlayer.length > 18){
            setError('Veuillez saisir un prénom plus court')
        }
        if(namePlayer === '') {
            setError("Veuillez saisir le nom du joueur");
        }

        if(listPlayers.length+1 == nbPlayers && namePlayer.length > 0 ) {
            setBtnPlay(true);
            setError('');
        }
        
    }  
    const playNow = () =>{

        // const random = Math.floor(Math.random() * listPlayers.length);
        // console.log(listPlayers[random])
        // effacer current player juste envoyer en parametre le joueur courrant
        // dispatch(CurrentPlayer(listPlayers[random]));
        navigation.navigate('Choices');
    }

    return (
        <View style={styles.contentAll}>
            {
             !btnPlay ? 
             <>
             <View style={{flex:1}}>
                <ImageBackground source={imgGame}  resizeMode="cover" style={styles.imagePlayers}>
                        <Input
                            inputContainerStyle={styles.input}
                            inputStyle={{color:'black', fontSize:getfontSize(windowWidth, 13, windowWidth, 12), textAlign:'center', fontWeight:'bold'}}
                            maxLength={15}
                            label={`Joueur N° ${nbPlay}`}
                            labelStyle={{color:'#fff', textAlign:'center', fontSize:getfontSize(windowWidth, 15, windowWidth, 12), paddingBottom:10}}
                            value={namePlayer}
                            onChangeText={setNamePlayer}
                            errorMessage= {error ? error : null} 
                            errorStyle={{fontSize:getfontSize(windowWidth, 20, windowWidth, 18),color:'#fff'}}                            
                            onSubmitEditing={() => {
                                everyPlayers()
                            }}
                        /> 
                </ImageBackground>
                </View>
                    <Button
                        title="SUIVANT"
                        onPress={everyPlayers}
                        titleStyle={{
                            fontWeight:"bold",
                            fontSize:getfontSize(windowWidth, 18, windowWidth, 14)
                        }}
                        buttonStyle={{
                            backgroundColor:"black",
                            margin:15
                        }}
                    />
               </>
                :
                <View style={{flex:1}}>
                    <ImageBackground source={image}  resizeMode="cover" style={styles.imageGame}>
                    </ImageBackground>
                    <Button
                        title="C'EST PARTIE ! "
                        onPress={playNow}
                        titleStyle={{
                            fontWeight:"bold",
                            fontSize:getfontSize(windowWidth, 18, windowWidth, 14)
                        }}
                        buttonStyle={{
                            backgroundColor:"black",
                            margin:15,
                            marginTop:5
                        }}
                    />
                </View>
            }
        </View>
            
        
    )
}


export default index
