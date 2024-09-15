import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import FitnessCard from './FitnessCard';
import { getAllexercisesMine } from '../api/ererciseDB';
import LoadingScreen from './LoadingScreen';


const FitnessParts = () => {
    const router = useRouter();
    const [exercises, setExercises] = useState<any>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      getExercises()
    },[])

    const getExercises = async () => {
      try {
        const res = await getAllexercisesMine()
        setLoading(false)
        setExercises(res)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <View className='m-2'>
       {
        loading ?
        <LoadingScreen />
        :
        <>
          <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>Exercises</Text>
          <FlatList
            data={exercises}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50, paddingTop:20}}
            keyExtractor={(item) => item.name}
            style={{width:wp(100)}}
            renderItem={({item,index})=><FitnessCard item={item} index={index} router={router}/>}
          />
        </>
       }
      </View>
    )
}

export default FitnessParts

const styles = StyleSheet.create({})