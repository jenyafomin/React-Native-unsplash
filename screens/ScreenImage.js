import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity,View,Dimensions } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const width1 = Dimensions.get('window')

export default function ScreenImage(props) {
    const {uri,item} = props.route.params
    const [isCover, setIsCover] = useState(true)

    console.log('URI->',uri)
    console.log('Item->',item)
    return (
            <TouchableOpacity style={styles.container} onPress={()=> {setIsCover(!isCover)}}>
                <Image style={[styles.img,
                {
                    resizeMode:isCover?'cover':'contain'
                }]} source={{uri:uri}}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222'
    },
    img:{
        width:'100%',
        height:'100%',
        // resizeMode:'cover'
    }
})
