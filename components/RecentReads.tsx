import { View, Text,ScrollView,StyleSheet,Image,FlatList,SafeAreaView } from 'react-native'
import React from 'react'
import { libraryData,COLORS } from '../constants'

const Item = ({title,cover,author}) => {
  return(
    <View>
           <View style={styles.line}/>
            <View style={styles.container} >
              
              <Image source={cover} resizeMode="contain" style={styles.image} />
              
           
            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
              <View>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.subheader}>{author}</Text>
                </View>

                <Text style={{color:COLORS.primary, fontWeight:'700'}}>
                    Page 198 of 337(58%)
                </Text>
            </View>
            </View> 
        </View>
  )
}
const RecentReads = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} cover={item.cover} author={item.author}  />
  )
   
  

  return (
<View>
<FlatList 
data={libraryData}
renderItem={renderItem}
keyExtractor={item =>`${item.id}`}

/>
</View>
   
  )
}

const styles = StyleSheet.create({
    container:{
 height:80,
flexDirection:'row',
padding:1,
backgroundColor:COLORS.white,
borderRadius:10

    },
    header: {
      color:COLORS.gray,
      
      fontWeight:"800",
      fontSize:15
    
     },
     image :{
      height:"100%",
     width:"20%",
   marginRight:10
     },
    subheader:{
      color:COLORS.gray,
      fontWeight:"600",
      fontSize:12
     },
    line:{
      borderBottomColor: COLORS.gray,
      borderBottomWidth: StyleSheet.hairlineWidth,
      //color:COLORS.gray,
      margin:5,
    }
})
export default RecentReads