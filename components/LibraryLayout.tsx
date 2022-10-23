import { View, Text, Image,StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS, images, SHADOWS } from '../constants'
import { client, urlFor } from '../feature/client';
import {useDispatch,useSelector} from 'react-redux'
import {RootState} from '../feature/store'

const LibraryLayout = ({book, navigation}:any) => {
    const {_id,author,description,cover,rating, title,base64Book,pages,genre,releaseDate,page} = book
    const {user} = useSelector((state:RootState) => state?.user)
    
    
  return (
    <View>
        
     <View key={_id}
        style={{margin:5}}
        >
          <TouchableOpacity style={{width:110}}
          onPress={()=>navigation.navigate("Synopsis",{
            _id,author,description,cover,rating, title,base64Book,pages,genre,releaseDate
          })}>
            <View style={styles.ratings}>
            <AntDesign name="star" size={15} color="gold" />
            <Text style={{color:COLORS.gray ,fontSize:10}} ><Text style={{color:COLORS.primary, fontWeight:'700'}}>{rating}</Text>/5</Text>
            </View>
            <Image source={{uri:urlFor(cover).width(200).url()}} style={styles.cover} resizeMode="contain"/>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.author}>{author}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LibraryLayout

const styles = StyleSheet.create({
    author:{
        color:COLORS.gray,
        fontSize:12,
        fontWeight:'300',
        textAlign:'center'
    },
    container:{
        flexDirection:'row',
        flex:0.5,  
        backgroundColor:COLORS.white ,
       marginTop:10
    },
    clickMore:{
      justifyContent:'center',
    borderRadius:10,
      backgroundColor:COLORS.icons,
      alignItems:'center',
      height:160,
      width:110,
      ...SHADOWS.dark
    },
    cover:{
        width:"100%",
        borderRadius:10,
        height:'70%'
    },
    ratings:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        zIndex:1,
        backgroundColor:COLORS.white,
        padding:5,
        top:5,
        left:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:COLORS.primary,
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center'
    },
    spinnerTextStyle: {
      color: '#FFF'
    },
})