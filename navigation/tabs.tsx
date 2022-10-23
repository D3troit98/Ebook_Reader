import React from "react";
import { View,Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { Home, Bookmark, Search ,Profile} from "../screens";
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from "../constants";
const Tab = createBottomTabNavigator()

const Tabs = () =>{
    return(
        <Tab.Navigator
        screenOptions={{headerShown:false,
        
        tabBarStyle:{
            backgroundColor:COLORS.white,
            borderTopWidth:0,
            elevation:0,
            paddingBottom:10,
          
          
        }}}
        
        >
            
            <Tab.Screen 
            name="Library"
            component={Home}
          options={{
            tabBarIcon:({focused}) =>{
               return  <Foundation name="home" size={25} color={focused ? COLORS.primary :COLORS.gray} />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
          }}
               
            />
               <Tab.Screen 
            name="Bookmark"
            component={Bookmark}
          options={{
            tabBarIcon:({focused}) =>{
               return  <Foundation name="bookmark" size={25} color={focused ? COLORS.primary :COLORS.gray} />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
          }}
               
            />
               <Tab.Screen 
            name="Search"
            component={Search}
          options={{
            tabBarIcon:({focused}) =>{
               return  <AntDesign name="search1" size={25} color={focused ? COLORS.primary :COLORS.gray} />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
          }}
               
            />
               <Tab.Screen 
            name="Profile"
            component={Profile}
          options={{
            tabBarIcon:({focused}) =>{
               return  <AntDesign name="user" size={25} color={focused ? COLORS.primary :COLORS.gray} />
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
          }}
               
            />
             
        </Tab.Navigator>
    )
}

export default Tabs
