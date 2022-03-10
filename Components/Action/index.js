import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import data from '../Questions/data';
import {useSelector} from 'react-redux';

const index = ({route}) => {

    const {players: {listPlayers}} = useSelector(state => state);
    const [questionRandom, setQuestionRandom] = useState('');
    const {namePlayer} = route.params;

    const questionGame = () => {

        const random = Math.floor(Math.random() * data.action.length);
        const randomAction = data.action[random].question;
        setQuestionRandom(randomAction);
    }


    useEffect(() => {
        questionGame()
        return () => {
            questionGame()
        }
    }, [])

    return (
        <View>
            <Text>Action</Text>
            <Text> {namePlayer} </Text>
            <Text>Voici ta question : {questionRandom} </Text>
            <View>
                <Button
                    title="Accepter"
                    onPress={next}
                />
                <Button
                    title="Changer de Question"
                    onPress={questionGame}
                />
            </View>
        </View>
    )
}

export default index
