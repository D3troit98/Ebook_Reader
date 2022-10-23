import { View, Text ,StyleSheet, SafeAreaView, TouchableOpacity,Image, ImageBackground} from 'react-native'
import React,{useEffect, useState, useCallback} from 'react'
import { useRoute,useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../constants';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';
import { client, urlFor } from '../feature/client';
import moment from 'moment';
import {useDispatch,useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../feature/store'

const Synopsis = ({navigation}:any) => {
  const {user} = useSelector((state:RootState) => state?.user)
  const route = useRoute();
  const {_id,author,description,cover,rating, title,base64Book,pages,read,genre,releaseDate} :any = route.params
  //  const alreadyRead = !!(page?.filter((item)=>item?.postedBy?._id === user?.id))?.length

  const [lastReadPage,setLastReadPage] = useState('')
  const [hasRead, sethasRead] = useState(lastReadPage.length === 0)
 
    useFocusEffect(
      useCallback(()=>{
        //DO something when screen is focused
        const getData = async () => {
          try {
            const value = await AsyncStorage.getItem(_id)
            if(value !== null) {
              // value previously stored
              console.log(value)
              setLastReadPage(value)
            }
            else{
              sethasRead(false)
            }
          } catch(e) {
            // error reading value
            console.log(e)
          }
        }
  
        getData()
        return ()=>{
          //DO something when the screen is unfocused    
           
        }
      },[])
    )
  return (

    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri:urlFor(cover).width(200).url()}}
      resizeMode="cover"
      imageStyle={{opacity:0.3}}
    
      >
      <View style={{backgroundColor:COLORS.white, padding:10}}>

     <View style={styles.header}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Home")}
      >
     <Ionicons name="chevron-back-outline" size={24} color={COLORS.primary} />
     </TouchableOpacity>
     <Text style={styles.headText}>{title}</Text>

     <TouchableOpacity>
     <Octicons name="kebab-horizontal" size={24} color={COLORS.primary} />
     </TouchableOpacity>
     </View>
     <Text style={[{textAlign:'center'},styles.smallText]}>Book <Text style={{color:COLORS.primary,fontWeight:'600'}}>3</Text> of 4</Text>
     </View>

<View style={styles.imageContainer}>
     <Image source={{uri:urlFor(cover).width(200).url()}} resizeMode="contain" style={styles.image} />
 </View>

<View style={styles.readerAuthor}>
    <View style={{alignItems:'center'}} >
      <Text style={{color:COLORS.gray,fontSize:15}}>
        Author : {author}
      </Text>
      <Text style={styles.smallText}>
        {moment(releaseDate).format("MMMM DD, YYYY")}
      </Text>
    </View>
</View>
</ImageBackground>

<View >
  <LinearGradient
   start={{x: 0, y: 0}}
   end={{x: 1, y: 0}}
  colors={[COLORS.icons, COLORS.white,COLORS.white]}
  style={styles.rating}
  >

 
  <View style={[styles.ratingContent,{borderRightColor: COLORS.gray,
      borderRightWidth: StyleSheet.hairlineWidth,}]}>
       <AntDesign name="star" size={15} color="gold"  style={{marginRight:3}}/>
       <Text style={styles.headText}>{rating}<Text style={styles.smallText}>/5</Text></Text>
  </View>

  <View style={[styles.ratingContent,{borderRightColor: COLORS.gray,
      borderRightWidth: StyleSheet.hairlineWidth,}]}>
    <Text style={styles.smallText}>
     <Text  style={styles.headText}>4,2k</Text> Read
    </Text>
  </View>

  <View  style={[styles.ratingContent]}>
    <Text  style={styles.headText}>{pages} <Text style={styles.smallText}>Pages</Text></Text>
  </View>
  </LinearGradient>
</View>
    <View style={styles.synopsis}>
    <Text style={styles.headText}>Synopsis</Text>

    <Text style={styles.paragraph} numberOfLines={8}>
      {description}
    </Text>
    </View>

    <View style={styles.bottom}>
      <View style={{borderRadius:10,...SHADOWS.dark,marginRight:10,padding:10 }}>
      <Foundation name="bookmark" size={30} color={hasRead ? COLORS.link :COLORS.primary}  />
      </View>
    
    <TouchableOpacity style={styles.bottomButton}
    onPress={()=>navigation.navigate("Book",{
      base64Book,lastReadPage,_id
    })}
    >
      <Text style={{color:COLORS.white,textAlign:"center",fontWeight:'600',fontSize:15}}> {hasRead ? "Continue Reading" : "Start Reading"}</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
        backgroundColor:COLORS.white,
        paddingTop:30,
  },
  header:{
    flexDirection:"row",
    justifyContent:'space-between',
    padding:5,
    paddingLeft:10,
    paddingRight:10
   
  },
  headText:{
    color:COLORS.primary,
    fontWeight:'800',
    fontSize:20
  },
  smallText:{
    color:COLORS.gray,
    fontSize:10,
    fontWeight:'300'
  },
  paragraph:{
    color:COLORS.gray,
    fontSize:15,
    margin:5,
  },
  image:{
    height:'100%',
    width:'100%',
    borderRadius:10,
    margin:5
  },
  imageContainer:{
    height:180,
    width:120,
   alignSelf:'center'
   
  },
  synopsis:{
    padding:5,
    paddingLeft:10,
    paddingRight:10
  },
  readerAuthor:{
    backgroundColor:COLORS.white,
    alignItems:'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignSelf:'center',
    marginTop:10,
    padding:5,
    
  },
  rating:{
    flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   margin:30,

   borderRadius:10,
  },
  ratingContent:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    flexDirection:'row',
    textAlign:'center',  
  },
  bottom:{
    position:'absolute',
    bottom:0,
    paddingTop:30,
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"space-between",
    margin:20,
    flex:1,

  },
  bottomButton:{
   flex:1,
    backgroundColor:COLORS.primary,
    color:COLORS.white,
    padding:15,
    borderRadius:10,

  }

})


export default Synopsis