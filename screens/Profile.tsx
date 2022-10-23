import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { images, COLORS,SHADOWS } from '../constants';
import {useDispatch,useSelector} from 'react-redux'
import { setUser } from '../feature/slice';
import {client} from '../feature/client'


WebBrowser.maybeCompleteAuthSession()
const Profile = () => {
  const dispatch = useDispatch()
  const [accessToken, setAccessToken] = React.useState<any>()
  const [userInfo, setUserInfo] = React.useState<{name:string;given_name:string,picture:string,id:string,email:string}>()
  const [message, setMessage] = React.useState<string>()
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:'987730878157-37193uecc3u2skfkf7mt9i3c4ksbg3ad.apps.googleusercontent.com'
  })
  

  React.useEffect(()=>{
    setMessage(JSON.stringify(response))
    if(response?.type === "success"){
      setAccessToken(response?.authentication?.accessToken)
    }
    console.log(message)
  },[response])

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers: {Authorization: `Bearer ${accessToken}`}
    })

    userInfoResponse.json().then(data=>{   
      setUserInfo(data)  
      dispatch(setUser(data))
    })
   
  } 

  useEffect(()=>{
    if(userInfo){
      const {given_name , id , picture}:any = userInfo
      const doc = {
        _id :id,
        _type : 'user',
        userName : given_name,
        image : picture
      }

      client.createIfNotExists(doc)
    }
   
    
  },[userInfo])

  
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <ImageBackground source={images.blue1} resizeMethod="auto"
            //  imageStyle={{backgroundColor:COLORS.primary}}
            style={styles.image}
            >
              </ImageBackground>
          </View>
          
        
          <Image style={styles.avatar} source={userInfo ? {uri: userInfo.picture} : {uri: 'https://images.unsplash.com/photo-1621095058736-e62ddccd9b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
          
 <Text style={styles.name}>{userInfo ? userInfo.name :"Adeline Luna"} </Text>
              <Text style={styles.info}>{userInfo ? userInfo.email :"Elite Reader"} </Text>
              <Text style={styles.description}>I will protect even those I hate, so long as it is right.
— The Third Ideal of the Windrunners (as spoken by Kaladin)</Text>

              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Color Mode</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}
              onPress={accessToken ? getUserData : ()=> {
                promptAsync({showInRecents:true})            
              }}
              >
                <Text style={styles.buttonText}>{accessToken ? "Get User Data": "Login"}</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
export default Profile

const styles = StyleSheet.create({
  header:{
    backgroundColor: COLORS.primary,
    height:200,
  },
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  image:{
    width:'100%',
   height:'100%',
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: COLORS.white,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:COLORS.primary,
    fontWeight:'600',
    marginTop:20,
  },
  body:{
    marginTop:40,
  
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: COLORS.gray,
    marginTop:10
  },
  description:{
    fontSize:16,
    color: COLORS.gray,
    marginTop:10,
    textAlign: 'center',
    fontStyle:'italic'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: COLORS.white,
    ...SHADOWS.dark
  },
  buttonText:{
    color:COLORS.gray,    
  }
});

                       