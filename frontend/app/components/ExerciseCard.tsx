import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';


const ExerciseCard = ({item,index,router}:{item:any, router:any, index:number}) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity
        className='flex py-3 space-y-2'
        onPress={()=>router.push({
            pathname:'/exercisesdetails',
            params:{
                bodyPart:item.bodyPart,
                equipment:item.equipment,
                gifUrl:item.gifUrl,
                id:item.id,
                instructions:item.instructions,
                name:item.name,
                secondaryMuscles:item.secondaryMuscles,
                target:item.target
            }
        })}
      >
            <View className='shadow rounded-[25px] bg-gray-200'>
                <Image 
                    source={{uri:item.gifUrl}} 
                    contentFit='cover'
                    style={{height:wp(52), width:wp(44)}}
                    className='rounded-[25px]'
                />
            </View>
            <Text className='text-neutral-700 font-semibold ml-1 tracking-wide'>
                {
                    item.name.length > 15 ? item.name.slice(0,15)+'...' : item.name
                }
            </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default ExerciseCard

const styles = StyleSheet.create({})