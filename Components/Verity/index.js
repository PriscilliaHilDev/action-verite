import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import data from '../Questions/data';
import {useSelector} from 'react-redux';

const index = ({route}) => {

    const {namePlayer} = route.params;
    const {players: {listPlayers}} = useSelector(state => state);
    const [questionRandom, setQuestionRandom] = useState('');
    const [nbChangeQuestion, setNbChangeQuestion] = useState(0);
    const [essaie, setEssaie] = useState(3);
    const [dilem, setDilem] = useState(false);



    const questionGame = () => {
        
    setNbChangeQuestion(nbChangeQuestion+1);
    if(nbChangeQuestion <= 3 ){
        const random = Math.floor(Math.random() * data.verite.length);
        const randomAction = data.verite[random].question;
        setQuestionRandom(randomAction);
        setNbChangeQuestion(nbChangeQuestion+1);
        setEssaie(3-nbChangeQuestion)
    }
    if(essaie == 1){
        setDilem(true)
    }
   
    }

    useEffect(() => {
            questionGame()
    
        return () => {
            questionGame()
        }
    }, [])

    return (
        <View>
            <Text>Vérité</Text>
            <Text> {namePlayer} </Text>
            <Text>Voici ta question : {questionRandom} </Text>
         
                <Button
                    title="Accepter"
                />
            {!dilem ? 
                <View>
                    <Button
                        title="Changer de Question"
                        onPress={questionGame}
                    />
                    <Text> Tentative restantes : {essaie}</Text>
                    <Text> Attention Vous ne pouvez changer de question que 3 fois </Text>
                </View>
            : 
                <Button
                    title="Passer son tour"
                />
            }
        </View>
    )
}

export default index
