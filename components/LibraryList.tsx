import { View, Text, Image,StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect , useState} from 'react'
import { COLORS, images, SHADOWS } from '../constants'

import { searchQuery,feedQuery } from '../feature/utils';
import { client, urlFor } from '../feature/client';
import { MaterialIcons } from '@expo/vector-icons'; 
import Spinner from 'react-native-loading-spinner-overlay';
import LibraryLayout from './LibraryLayout';
const LibraryList = ({navigation ,setLoading,category, loading}:any) => {

  const [libraryData, setLibraryData] = useState<any | null>(null)
  useEffect(()=>{
    setLoading(true)
    const query = searchQuery(category)
    if(category !== 'ALL')
    {
      client.fetch(query)
      .then((data)=>{
        setLibraryData(data)   
        setLoading(false)
        console.log(loading) 
      })
    }else{
      client.fetch(feedQuery)
      .then((data)=>{
        setLibraryData(data)
      })
      
     
    }
   
  },[category])

  // if(libraryData=== null)
  // {
  //   return <Text>Loading....</Text>
  // }




  return (
    <ScrollView style={styles.container}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
      {loading &&  <Spinner
    visible={loading}
    textContent={'getting books...'}
    textStyle={styles.spinnerTextStyle}
  /> }
      {libraryData?.map((book:any)=><LibraryLayout key={book._id} book={book} navigation={navigation}/>
      )}
       <View 
        style={{margin:5}}
        >
          <TouchableOpacity
          onPress={()=>console.log('fuck you!')}>
            <View style={styles.clickMore}>
            <MaterialIcons name="read-more" size={24} color={COLORS.icons} />
            <Text style={styles.title}>Click for</Text>
            <Text style={styles.author}>More</Text>
            </View>
          
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

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

export default LibraryList