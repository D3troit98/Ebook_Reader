import { SafeAreaView, StyleSheet, Text ,View, Image, ScrollView} from "react-native";
import React from 'react'
import { images ,COLORS} from "../constants";
import RecentReads from "../components/RecentReads";
const Bookmark = () => {


  return (
    <SafeAreaView style={styles.container}>

      <View  >
     <Text style={styles.header}>Bookmark</Text>
     <Text style={styles.subheader}>LAST READ BOOK</Text>
     <View style={styles.line}/>
     <View style={{flexDirection:"row", justifyContent:"space-between",height:200,padding:10}}>
      <Image  source={images.spinning} style={styles.headerImage} resizeMode="contain" />
      <View  style={{flexDirection:'column',justifyContent:"space-between"}}>
       
       <View>
        <Text style={{color:COLORS.gray, alignItems:'flex-start',justifyContent:'flex-start'}}>
         Spinning Silver A Novel
        </Text>
        <Text style={{color:COLORS.gray}}>
        Naomi Novik 
        </Text>
        </View>

<View>
        <View style={styles.line}/>

        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:2}}>
         <View style={{borderRadius:10}}>
          <Text style={{fontStyle:"italic",color:COLORS.gray}}>Last Read</Text>
          <Text style={{color:COLORS.primary}}>13/10</Text>
         </View>

         <View >
          <Text style={{fontStyle:"italic",color:COLORS.gray}}>Created</Text>
          <Text style={{color:COLORS.primary}}>25/09</Text>
          </View>

        
          </View>
          <View style={{width:'100%',justifyContent:"center",alignItems:"center"}}>
         <Text style={{fontStyle:"italic",color:COLORS.gray}}>Progress</Text>
          <Text style={{color:COLORS.primary}}>56 0f 264</Text>
          </View>
          </View>

       </View>
      

     </View>
    
      
     </View>
     <Text style={{marginTop:10, color:COLORS.primary,fontSize:20, fontWeight:"400"}}>MORE RECENT READS</Text>
     <RecentReads />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container:{
  flex:1,
  padding:10,
  backgroundColor:COLORS.white,
  marginTop:30,
  flexDirection:'column'
 },
 header: {
  color:COLORS.white,
  backgroundColor:COLORS.primary,
  fontWeight:"bold",
  fontSize:35

 },
 headerImage:{
  height:"100%",
  width:150,
  borderRadius:10
 },
 line:{
  borderBottomColor: COLORS.gray,
  borderBottomWidth: StyleSheet.hairlineWidth,
  //color:COLORS.gray,
  margin:5
  
 },
 subheader:{
  color:COLORS.primary,
  backgroundColor:COLORS.white,
  fontWeight:"600",
  fontSize:20
 },
});


export default Bookmark