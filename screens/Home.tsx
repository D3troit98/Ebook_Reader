import { View, Text,ImageBackground,StyleSheet ,Image, TouchableOpacity, FlatList} from 'react-native'
import React,{useEffect,useState, CSSProperties} from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import {images,COLORS} from '../constants'
import GenreList from '../components/GenreList'
import LibraryList from '../components/LibraryList'
import {useSelector} from 'react-redux'
import { searchQuery, userQuery } from '../feature/utils'
import { client } from '../feature/client'
import { setUser } from '../feature/slice'
import {RootState} from '../feature/store'


const Home = ({navigation, route}:any) => {
    const {user} = useSelector((state: RootState) => state?.user)
   const [loading, setLoading] = useState(true)
   const [category, setCategory] = useState('Fantasy')
 
   
   useEffect(()=>{
    if(Object.keys(user).length > 0){
       if(user.id.length > 0)
       {
        const query = userQuery(user.id)
        client.fetch(query)
        .then((data)=>{    
            console.log(data[0])
            //dispatch(setUser(data[0]))
        })
       }
        
    }
   },[user])

   
 
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backGroundContainer}>
     <ImageBackground source={images.blue3}
     resizeMode="repeat"
    imageStyle={{borderRadius:20,backgroundColor:COLORS.primary}}
     style={styles.image}>
          <Text style={styles.headerText}>{`Hello ${user?.given_name ? user.given_name : ''}!`}</Text>
          <Text style={styles.text}>Which book suits your</Text>
          <Text style={styles.text}>current mood?</Text>
     </ImageBackground>
     </View>
     <View style={styles.popUpContainer}>
        <Text style={styles.textblue}>
            Remember, Jelly. You have an {"\n"}unfinished book
            since <Text style={{fontWeight:'600'}}>July 30, 2022</Text>
        </Text>
        <TouchableOpacity>
        <Text style={styles.textLink}>
            Continue reading
        </Text>
        </TouchableOpacity>
        <View style={styles.lastRead}>
         <Image source={images.Legion} style={styles.imagePop}    />
         <View style={{flexDirection:'column'}}>
            <Text style={styles.heading}>Legion</Text>
            <Text style={{fontWeight:'200',color:COLORS.gray}}>Book <Text style={{fontWeight:'600',color:COLORS.primary}}>3</Text> of 4</Text>
            </View>
        </View>
          
     </View>
     <GenreList category={category} setCategory={setCategory}/>
     <LibraryList navigation={navigation} setLoading={setLoading} category={category} loading={loading} />
    </SafeAreaView>
  )
}

export default Home


const styles = StyleSheet.create({
    backGroundContainer:{
        flex:1,
        width:'100%',
          
    },
    container:{
        flex:1,
        padding:10,
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    image:{
         width:'100%',
         alignItems:"center",
        height:'100%',
        zIndex:0,
    },
    imagePop:{
        width:50,
        height:50,
        borderRadius:10,
       marginRight:15
    },
    headerText:{
        color:COLORS.white,
        fontSize:42,
        fontWeight:'bold',
        lineHeight: 84,
        textAlign: "center",
        justifyContent:'flex-start',
     
    },
    heading:{
        color:COLORS.primary,
        fontSize:32,
        fontWeight:'bold',
    },
    lastRead:{
marginVertical:20,
flexDirection:'row',
alignItems:'center'
    },
    popUpContainer:{
    position:'absolute',
        flex:0.3,
        padding:20,
        borderRadius:15,
        backgroundColor:COLORS.white,
        width:'80%',
        margin:10,
        top:200

    },
    text: {
        color: COLORS.white,
        fontSize: 24,
        lineHeight: 30,
        textAlign: "center",
    },
    textblue:{
        color:COLORS.primary,
        fontSize:14,
        textAlign:'left',
        lineHeight:20
    },
    textLink:{
        color:COLORS.link,
        textDecorationLine:'underline',
        textDecorationColor:COLORS.link,
        marginTop:10,
    },
    
})


