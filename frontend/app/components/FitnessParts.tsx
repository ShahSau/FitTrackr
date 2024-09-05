import { FlatList, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {exercises} from '../constants/index';
import { useRouter } from 'expo-router';
import FitnessCard from './FitnessCard';

const FitnessParts = () => {
    const router = useRouter();
    const FitnessData = exercises
    return (
      <View className='m-2'>
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
      </View>
    )
}

export default FitnessParts

const styles = StyleSheet.create({})