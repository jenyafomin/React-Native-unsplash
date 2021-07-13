import React from 'react'
import { StyleSheet, View, Dimensions, FlatList} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const imageWidth = width * 0.8
const imageHight = width * 1.1

export default function ScreenLoad() {
    return (
        <View style={{ backgroundColor: '#222' }}>
            <SkeletonPlaceholder backgroundColor='#282828' highlightColor='#383838' >
                
                <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: imageWidth, height: imageHight, borderRadius: 20, marginTop: 8 }} />
                    <View style={{width:200,height:20, borderRadius:20, marginTop:8,alignSelf:'flex-start'}}/>
                </View>

            </SkeletonPlaceholder>
        </View>
    )
}

const styles = StyleSheet.create({})
