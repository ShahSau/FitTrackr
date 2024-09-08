import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { Image } from 'expo-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons  from '@expo/vector-icons/Ionicons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Exercisesdetails = () => {
    const params:any = useLocalSearchParams()
    const router = useRouter()
    const { equipment, gifUrl, instructions, name, secondaryMuscles, target} = params

  return (
    <SafeAreaView className='flex flex-1 mt-10'>
      <View className='shadow-md bg-netural-200 rounded-b-[40px]'>
        <Image
            source={{uri:gifUrl}}
            contentFit='cover'
            style={{height:wp(100), width:wp(100)}}
            className='rounded-b-[40px]'
        />
      </View>

      <TouchableOpacity
        onPress={()=>router.back()}
        className='absolute mx-2 mt-2 rounded-full right-0'
      >
        <Ionicons name="close-circle" size={hp(4.5)} color="#F43F5E" />
      </TouchableOpacity>

      {/*details*/}
      <ScrollView
        className='mx-4 space-y-2 mt-3'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:hp(10)}}
        >
            <Animated.Text 
                entering={FadeInDown.duration(300).springify()}
                style={{fontSize:hp(3.5)}}
                className='text-neutral-700 font-semibold tracking-wide'
            >
                {name}
            </Animated.Text>
            <Animated.Text 
                entering={FadeInDown.delay(100).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Equipment: <Text className='font-bold text-neutral-800'>{equipment}</Text>
            </Animated.Text>
            <Animated.Text 
                entering={FadeInDown.delay(200).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Secondary Muscel: <Text className='font-bold text-neutral-800'>{secondaryMuscles}</Text>
            </Animated.Text>
            <Animated.Text 
                entering={FadeInDown.delay(300).duration(300).springify()}
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Target Muscel: <Text className='font-bold text-neutral-800'>{target}</Text>
            </Animated.Text>
            <Animated.Text 
                entering={FadeInDown.delay(400).duration(300).springify()}
                style={{fontSize:hp(3)}}
                className='text-neutral-700  tracking-wide'
            >
                Instruction:
            </Animated.Text>
                
            {(instructions as string).split(',').map((instruction:any, index:number)=>(
                    <Animated.Text 
                        entering={FadeInDown.delay(500+index*100).duration(300).springify()}
                        key={index} 
                        className='text-neutral-800' style={{fontSize:hp(1.7)}}
                    >
                        {instruction}
                    </Animated.Text>
            ))}
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default Exercisesdetails

const styles = StyleSheet.create({})
