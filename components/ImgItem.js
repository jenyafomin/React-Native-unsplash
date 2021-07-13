import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import {SceletonPlaceholder} from 'react-native-skeleton-placeholder'

const {width, height} = Dimensions.get('screen')

const widthImg = width*0.8
const heightImg = width*1.1

export default function ImgItem({item,navigation}) {
    
    return (
        <View style={styles.img_container}>
          {/* <SceletonPlaceholder> */}
            <TouchableOpacity onPress={()=> {
                navigation.push('Image', {uri:item.urls.full,item:item})
                }}
                style={styles.img_item}
                >
                {/* <Text>{item.id}</Text> */}
                <Image 
                style={styles.img}
                source={{uri:item.urls.regular}}/>
                <Text style={[{color:'white',fontWeight:'600',marginTop:5}]}>{item.user.username}</Text>
            </TouchableOpacity>
          {/* </SceletonPlaceholder> */}
        </View>
    )
}

const styles = StyleSheet.create({
    img_container:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:"center",
      },

      img_item:{  
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius:20
      },

      img:{
        width:widthImg,
        height:heightImg,
        borderRadius:20,
        resizeMode:'cover'  
      }
})
