import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';


const BodyPartCard = ({item,index, router}:{item:any, index:number, router:any}) => {

  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity
        style={{width:wp(44), height:hp(40)}}
        className='flex justify-end p-4 mb-4'
        onPress={()=>router.push({
            pathname:'/exercises',
            params:{id:item.id, name:item.name, image:item.image}
        })}
      >
        <Image
            source={item.image}
            resizeMode='cover'
            style={{width:wp(44), height:hp(40), borderRadius:10}}
            className='rounded-[35px] absolute'

        />
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={[StyleSheet.absoluteFillObject, {width:wp(44), height:hp(40)}]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='absolute rounded-[35px] bottom-0'
        />
        <Text 
            style={{fontSize:hp(2.3), color:'white'}} className='font-semibold text-center tracking-wide'
        >
          {item.name}
        </Text>

      </TouchableOpacity>

    </Animated.View>
  )
}

export default BodyPartCard

const styles = StyleSheet.create({})