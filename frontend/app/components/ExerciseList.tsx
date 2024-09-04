import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ExerciseCard from './ExerciseCard';
import { useRouter } from 'expo-router';

const ExerciseList = ({data}:any) => {
    const router = useRouter();
  return (
    <View>
      {/* <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>Exercises</Text> */}
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:60, paddingTop:20}}
        columnWrapperStyle={{justifyContent:'space-between'}}
        keyExtractor={(item) => item.name}
        renderItem={({item,index})=><ExerciseCard item={item} index={index} router={router}/>}
        />
    </View>
  )
}

export default ExerciseList

const styles = StyleSheet.create({})