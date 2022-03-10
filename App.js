/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import Header from './Components/Header';
import ListPlayers from './Components/List-players';
import Choices from './Components/Choices';
import Verity from './Components/Verity';
import Action from './Components/Action';

const App = () => {
  const Stack = createStackNavigator();


  return (
   
    <>

    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
    
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="ListPlayers" component={ListPlayers} />
          <Stack.Screen name="Choices" component={Choices} />     
          <Stack.Screen name="Verity" component={Verity} />
          <Stack.Screen name="Action" component={Action} />

       </Stack.Navigator>
    </NavigationContainer>
     </>
  );
};


export default App;
