import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'


import ScreenMain from './screens/ScreenMain'
import ScreenImage from './screens/ScreenImage'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={ScreenMain} />
        <Stack.Screen name="Image" component={ScreenImage}/>
      </Stack.Navigator>
    </NavigationContainer>

     
  )
}

const styles = StyleSheet.create({
  
})
