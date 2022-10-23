import React,{useState} from 'react'
import { useRoute,useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, useWindowDimensions,StyleSheet,TouchableOpacity,Text } from 'react-native';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
// import { useFileSystem } from '@epubjs-react-native/file-system'; // for Bare React Native project
 import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project
 import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants';





const Inner = ({base64Book,setLocation, location,lastReadPage,_id, }:any) => {
  const { width, height } = useWindowDimensions();
  const {getCurrentLocation} = useReader()
  const [lastLocation,setLastLocation] = useState("")


const getLocationDetail = () =>{
  const temp = getCurrentLocation()
 storeData(temp?.end.cfi)
}

const storeData = async (value:any) => {
  console.log(value)
  try {
    await AsyncStorage.setItem(_id, value)
  } catch (e) {
    // saving error
  }
}

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('m')
//     if(value !== null) {
//       // value previously stored
//       console.log(value)
//     }
//   } catch(e) {
//     // error reading value
//     console.log(e)
//   }
// }

 

  return (
    <SafeAreaView style={styles.container}>
    <Reader 
      src=  {base64Book}
      width={width}
      height={height * 0.8}
      fileSystem={useFileSystem}
     initialLocation={lastReadPage}
     onSwipeLeft={getLocationDetail}
     onSwipeRight={getLocationDetail}
    />
 
  <TouchableOpacity style={styles.bottomButton}
onPress={getLocationDetail}>
  <Text style={{color:COLORS.white,textAlign:"center",fontWeight:'600',fontSize:15}}>Using Hooks</Text>
</TouchableOpacity>
  </SafeAreaView>
  )
}


export default function Book({navigation}:any) {
  const route = useRoute();
  const {base64Book, lastReadPage ,_id}:any = route.params
  const [location,setLocation] = useState()
 
  return (
    <ReaderProvider>
        <Inner base64Book= {base64Book} setLocation={setLocation} location= {location} lastReadPage={lastReadPage} _id={_id}/>
      </ReaderProvider>

  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,

  },
  bottomButton:{
     backgroundColor:COLORS.primary,
     color:COLORS.white,
     padding:15,
     borderRadius:10,
 
   }
 
  
});