import { StyleSheet, Text, TouchableOpacity, View, Platform, ScrollView } from 'react-native'
import React, {useState} from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { Image } from 'expo-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons  from '@expo/vector-icons/Ionicons';

const Exercisesdetails = () => {
    const [exercises, setExercises] = useState<any>([])
    const params:any = useLocalSearchParams()
    const router = useRouter()
    const {bodyPart, equipment, gifUrl, id, instructions, name, secondaryMuscles, target} = params

  return (
    <View className='flex flex-1'>
      <View className='shadow-md bg-netural-200 rounded-b-[40px]'>
        <Image
            source={{uri:gifUrl}}
            contentFit='cover'
            style={{height:wp(100), width:wp(100)}}
            className='rounded-b-[40px]'
        />
      </View>

      {Platform.OS == 'ios' && <TouchableOpacity
        onPress={()=>router.back()}
        className='absolute mx-2 mt-2 rounded-full right-0'
      >
        <Ionicons name="close-circle" size={hp(4.5)} color="#F43F5E" />
      </TouchableOpacity>}

      {/*details*/}
      <ScrollView
        className='mx-4 space-y-2 mt-3'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:hp(10)}}
        >
            <Text 
                style={{fontSize:hp(3.5)}}
                className='text-neutral-700 font-semibold tracking-wide'
            >
                {name}
            </Text>
            <Text 
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Equipment: <Text className='font-bold text-neutral-800'>{equipment}</Text>
            </Text>
            <Text 
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Secondary Muscel: <Text className='font-bold text-neutral-800'>{secondaryMuscles}</Text>
            </Text>
            <Text 
                style={{fontSize:hp(2)}}
                className='text-neutral-700 tracking-wide'
            >
                Target Muscel: <Text className='font-bold text-neutral-800'>{target}</Text>
            </Text>
            <Text 
                style={{fontSize:hp(3)}}
                className='text-neutral-700  tracking-wide'
            >
                Instruction:
            </Text>
                
            {(instructions as string).split(',').map((instruction:any, index:number)=>(
                    <Text key={index} className='text-neutral-800' style={{fontSize:hp(1.7)}}>{instruction}</Text>
            ))}
            
        </ScrollView>
    </View>
  )
}

export default Exercisesdetails

const styles = StyleSheet.create({})
