import React, { useState, useEffect} from 'react'
import { View, ImageBackground, Text} from 'react-native';
import { Button, Input} from 'react-native-elements';
import {NbOfPlayers} from '../../Redux/Actions/players';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import colors, {getHeight, getfontSize} from '../../assets/colors';

const index = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [nbPlayers, setNbPlayers] = useState(0);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    let isTablet = DeviceInfo.isTablet();
    console.log(isTablet)

        setTimeout(() => {
            if(error != ""){
                setError("")
            }
        }, 6000);

    const goAddPlayers = () => {
        if(nbPlayers > 0 && nbPlayers >= 2 && nbPlayers <= 8){
            dispatch(NbOfPlayers(parseInt(nbPlayers)));
            navigation.navigate('ListPlayers', {nb:nbPlayers});
            setError("");
        }else{
            setNbPlayers("");
            setError('Choississez entre 2 et 8 joueurs.')
        }
        setNbPlayers('')
    }

    useEffect(() => {
        setNbPlayers('')
        return () => {   
        }
    }, [])

    const image = {uri:"https://cdn.pixabay.com/photo/2016/03/31/19/23/affection-1294965_1280.png"}

    return (

        <View style={styles.container}>
              <View style={styles.containerBackground}>
                    <ImageBackground source={image} 
                        style={styles.image}
                        resizeMode="cover" >
                            <View style={styles.title}>
                                <Text  style={styles.text1} > ACTION </Text>
                                <Text  style={styles.text2} > ou </Text>
                                <Text  style={styles.text3} > VÉRITÉ </Text>
                            </View>
                    </ImageBackground>
                </View>
                <View style={styles.inputContent}>
                    <Input
                        inputContainerStyle={styles.input}
                        inputStyle={{color:'black', fontSize:getfontSize(windowWidth, 13, windowWidth, 12), textAlign:'center', fontWeight:'bold'}}
                        maxLength={1}
                        label='Indiquez le nombre de joueurs'
                        labelStyle={{color:'#fff', textAlign:'center', fontSize:getfontSize(windowWidth, 20, windowWidth, 18), paddingBottom:10}}
                        onChangeText={setNbPlayers}
                        value={nbPlayers}
                        keyboardType="numeric" 
                        errorMessage= {error ? error : null} 
                        errorStyle={{fontSize:getfontSize(windowWidth, 25, windowWidth, 20),color:'#fff', textAlign:'center'}}
                        onSubmitEditing={() => {
                            goAddPlayers()
                          }}
                    />
                </View>
                <Button
                    title="JOUER"
                    titleStyle={{
                        fontWeight:"bold",
                        fontSize:getfontSize(windowWidth, 18, windowWidth, 14)
                    }}
                    buttonStyle={{
                        backgroundColor:"black",
                        margin:15
                    }}
                    onPress={goAddPlayers}
                />
        </View>

    )
}

export default index
