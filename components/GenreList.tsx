import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS , SHADOWS} from '../constants';


const DATA = [
  {
    id: uuid.v4(),
    title: 'Fantasy',
    iconName:'fire',
  },
  {
    id: uuid.v4(),
    title: 'Romance',
    iconName:'heart-multiple',
   
  },
  {
    id: uuid.v4(),
    title: 'Mystery & Drama',
    iconName:'domino-mask',

  },
  {
      id:uuid.v4(),
      title:'Sci-Fi',
      iconName:'space-invaders',
  },
];


const Item = ({ title,iconName ,category, setCategory}:any) => {
    const handlePress = (titlename:string) =>{
      setCategory(titlename)

    }
return( 
    <View style={[styles.list, {backgroundColor : title === category ? COLORS.primary : COLORS.white, },title === category && { ...SHADOWS.dark}]}>
        <TouchableOpacity style={{flexDirection:'row', padding:10, justifyContent:'center', alignItems:'center'}}
        onPress={()=>handlePress(title)}
        >
        <MaterialCommunityIcons name={iconName} size={24} color="#8c98a8"  style={{marginRight:5}}/>
      <Text style={[styles.listText, {color:title === category ? COLORS.white : COLORS.gray}]} >{title}</Text>
      </TouchableOpacity>
    </View>
  );
}


const GenreList = ({category,  setCategory}:any) => {
 

    const renderItem = ({ item }:any) => (
        <Item title={item.title} iconName= {item.iconName} category={category} setCategory={setCategory}/>
      );
    
  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
    
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
     height:65,
      marginTop:100
      
    },
   list:{
    borderRadius:10,
    margin:10,
    flexDirection:'row',
    marginHorizontal:3,
    alignItems:'center'
    
   },
   listText:{
    color:COLORS.white,
    fontSize:15,
    fontWeight:'400'
   }
  });

export default GenreList