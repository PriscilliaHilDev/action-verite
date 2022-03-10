import React, {useState, useEffect} from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import {useSelector } from 'react-redux';
import data from '../Questions/data';
import styles from './styles';
import { Dimensions } from 'react-native';
import colors, {getfontSize, getHeight, getWidth} from "../../assets/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = () => {

    const {players: {listPlayers}} = useSelector(state => state);

    const [session, setSession] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [showDilemBtn, setShowDilemBtn] = useState(true);
    const [nbChangeQuestion, setNbChangeQuestion] = useState(0);
    const [essaie, setEssaie] = useState(3);
    const [dilem, setDilem] = useState(false);
    const [theme, setTheme] = useState('');
    const [titleNext, setTitleNext] = useState('CHANGER DE JOEUR');

    const goQuestionVerity = () => {
        setShowDilemBtn(false);
        setDilem(false)
        setTheme('VÉRITÉ')
        setTitleNext('TOUR SUIVANT')
        
        if(nbChangeQuestion <= 3 ){
            const random = Math.floor(Math.random() * data.verite.length);
            const randomAction = data.verite[random].question;
            setCurrentQuestion(randomAction);
            setNbChangeQuestion(nbChangeQuestion+1);
            setEssaie(3-nbChangeQuestion)
        }

        if(essaie == 1){
            setDilem(true)
        }
    }

    const goQuestionAction = () => {
        setShowDilemBtn(false);
        setDilem(false)
        setTheme('ACTION');
        setTitleNext('TOUR SUIVANT')
        if(nbChangeQuestion <= 3 ){
            const random = Math.floor(Math.random() * data.action.length);
            const randomAction = data.action[random].question;
            setCurrentQuestion(randomAction);
            setNbChangeQuestion(nbChangeQuestion+1);
            setEssaie(3-nbChangeQuestion)
        }
        if(essaie == 1){
            setDilem(true)
        }
    }

   
    // const RandomSelectPlayers = () =>{
    //     setNbChangeQuestion(0);
    //     setEssaie(3);
    //     setDilem(true);
    //     setShowDilemBtn(true)
    //     setTheme("")
    //     setCurrentQuestion('')
    //     setSession(listPlayers);

    //         const indexPlayer = Math.floor(Math.random() * session.length);
    //         if(ok[indexPlayer] !== session[indexPlayer] && session[indexPlayer] !== undefined){
    //             if(ok[indexPlayer] !== session[indexPlayer]){
    //                 setOk([...ok, session[indexPlayer]])
    //             }
    //         }
    //         session.splice(indexPlayer,1)
    //         setSession(ok)
            
    //         console.log('see',session)
    //         console.log('ok', ok)
    // }


     const image =  {uri:"https://cdn.pixabay.com/photo/2016/03/31/18/05/angel-1294116_960_720.png"}

    const RandomSelectPlayers = () =>{
        setNbChangeQuestion(0);
        setEssaie(3);
        setDilem(true);
        setShowDilemBtn(true)
        setTheme("")
        setCurrentQuestion('')
        setTitleNext('CHANGER DE JOUEUR')
        const indexPlayer = Math.floor(Math.random() * listPlayers.length);
        setCurrentPlayer(listPlayers[indexPlayer])
        const verifIndex = session.find(item => item == indexPlayer);
        if(verifIndex == undefined){
            setCurrentPlayer(listPlayers[indexPlayer])
            console.log(listPlayers[indexPlayer])
            // si egale on a undefined on prend le player qui n'a avait pas encore été selectionné pour l'ajouter aux jouers choisis
            setSession([...session, indexPlayer]);
        }else{
            if(session.length == listPlayers.length){
                session.length = 0;
                return;
            }else{
                console.log('new jouer recherche')
                RandomSelectPlayers();
            }
        }
        console.log(session);
    }



    const toggleChangeQuestion = () => {
        if(theme == "ACTION"){
            goQuestionAction()
        }
        if(theme == "VÉRITÉ"){
            goQuestionVerity()
        }
    }

    const ChangeQuestionInfos = 
            !dilem ?
            <View style={styles.mainContent}>
                   <Button
                    title="CHANGER DE QUESTION"
                    onPress={toggleChangeQuestion}
                    titleStyle={{
                        color:'#fff',
                        fontWeight:"bold",
                        fontSize:getfontSize(windowWidth, 20, windowWidth, 16)
                    }}
                    buttonStyle={{
                        backgroundColor:"black",
                        margin:20,
                        borderColor:'black',
                        borderWidth:1,
                        padding:10,
                    }}
                />
                <Text style={styles.limitation1}> Limité à 3 fois </Text>
                <Text style={styles.limitation}> Tentative restantes : {essaie}</Text>
            <View style={styles.btnChangePlayers}>
                <Button
                    title="TOUR SUIVANT"
                    onPress={RandomSelectPlayers}
                    titleStyle={{
                        color:'#B7006E',
                        fontWeight:"bold",
                        fontSize:getfontSize(windowWidth, 18, windowWidth, 14)
                    }}
                    buttonStyle={{
                        backgroundColor:"#fff",
                        margin:20,
                        borderColor:'black',
                        borderWidth:1,
                        padding:10
                    }}
                />
            </View>
            </View>
            :
            <>
            <View style={styles.btnChangePlayers}>
          
                <Button
                   title={titleNext}
                   onPress={RandomSelectPlayers}
                   titleStyle={{
                       color:'#B7006E',
                       fontWeight:"bold",
                       fontSize:getfontSize(windowWidth, 18, windowWidth, 14)
                    }}
                   buttonStyle={{
                       backgroundColor:"#fff",
                       margin:20,
                       borderColor:'black',
                       borderWidth:1,
                       padding:10,
                     
                   }}
                />
            
          </View>
        </>
          
            // premiere vue 
    const displayActionOuVeriteBtn = showDilemBtn &&
        <>
        <View style={styles.btnDilem}>
            <Button
                title="ACTION"
                onPress={goQuestionAction}
                buttonStyle={{
                    backgroundColor:"#fff",
                    marginBottom:25,
                    padding:15,
                    borderColor:'black',
                    borderWidth:3,
                    borderRadius:5,
                    marginLeft:"20%",
                    marginRight:'20%',
                }}
                titleStyle={{
                    fontSize:getfontSize(windowWidth, 18, windowWidth, 14),
                    color:"black",
                    fontWeight:"bold"
                }}
            />         
            <Button
                title="VÉRITÉ"
                onPress={goQuestionVerity}
                buttonStyle={{
                    backgroundColor:"black",
                    marginLeft:"20%",
                    marginRight:'20%',
                    borderColor:'#fff',
                    borderWidth:2,
                    borderRadius:5,
                    padding:15
                }}
                titleStyle={{
                    fontSize:getfontSize(windowWidth, 18, windowWidth, 14),
                    color:"#fff",
                    fontWeight:"bold"
                }}
            />
        </View>
        </>
  

    useEffect(() => {
        
        
        RandomSelectPlayers()
        
        return () => {
          
            RandomSelectPlayers()
        }
    }, [])
  
    return (
        
        <View style={styles.mainContent}>
             
            {
                theme != "" &&
                <View style={styles.themeGame}>
                    <Text style={styles.theme}>
                        {theme}
                    </Text>
                    <Text style={styles.CurrentPlayer}>
                        {currentPlayer}
                    </Text>
                </View>
            }
            {
                theme == "" &&  
                <>
                <Text style={styles.CurrentPlayerDilem}> {currentPlayer} </Text>
                <View style={{flex:1}}>
                    {displayActionOuVeriteBtn}
                    <ImageBackground
                    source={require('../../assets/images/angel-1294116_960_720.png')}
                    style={styles.image}
                    resizeMode="cover" >
                    </ImageBackground>
                </View>
                </>
            }
            <Text style={styles.question}>{currentQuestion}</Text>
            {ChangeQuestionInfos}
        </View>
    
    )
}

export default index
