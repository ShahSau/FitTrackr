import { StyleSheet, Text, View, StatusBar, Image, Platform, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import {getExercisesByBodyPart} from './api/ererciseDB'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExercisesList from './components/ExerciseList'
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons  from '@expo/vector-icons/Ionicons';

const Exercises = () => {
  const [exercises, setExercises] = useState<any>([])
  const router = useRouter()
    const params = useLocalSearchParams()
    const {id, name,image} = params

    useEffect(() => {
      if(name) getExercises(name)
    },[name,id])

    const getExercises = async (name: any) => {
      try {
        const res = await getExercisesByBodyPart(name)
        setExercises(res)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image 
        source={image} style={{width: wp(100), height: hp(45)}} 
        className='rounded-b-[48px]'
      />
      {Platform.OS == 'ios' && <TouchableOpacity
        onPress={()=>router.back()}
        className='absolute mx-2 mt-2 rounded-full right-0'
      >
        <Ionicons name="close-circle" size={hp(4.5)} color="#F43F5E" />
      </TouchableOpacity>}
      {/*exercies*/}
      <View className='mx-4 space-y-3 mt-4'>
        <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >
          {name} exercise
          </Text>
          <View className='mb-10'>
            <ExercisesList data={exercises} />
          </View>
      </View>
    </ScrollView>
  )
}

export default Exercises

const styles = StyleSheet.create({})