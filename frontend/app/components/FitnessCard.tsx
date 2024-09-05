import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';


const FitnessCard= ({item,index, router}:{item:any, index:number, router:any}) => {
    console.log(item.excersises)
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity
        className='items-center justify-center m-2'
        onPress={()=>router.push({
            pathname:'/workout',
            // params:{id:item.id, name:item.name, image:item.image, description:item.description, excersises:[item.excersises]} 
            params:{id:item.id, name:item.name}
        })}
      >
        <Image
            source={{ uri: item.image }}
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            resizeMode='cover'
            className='rounded-[7px]'

        />
        {/* <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={[StyleSheet.absoluteFillObject, {width:wp(90), height:hp(16)}]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='absolute '
        /> */}
        
        <Text
            style={{fontSize:hp(2)}}
            className='absolute text-white font-bold text-lg top-5 left-5'
          >
            {item.name}
          </Text>

      </TouchableOpacity>

    </Animated.View>
  )
}

export default FitnessCard

const styles = StyleSheet.create({})