import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Tabs from './navigation/tabs';
import {Synopsis,Search, Book, Profile,} from './screens'
import {Provider} from 'react-redux'
import {store} from './feature/store'

const Stack = createNativeStackNavigator();

const App = () => {
    
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator
     screenOptions={{headerShown:false}}
     initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Synopsis" component={Synopsis} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App