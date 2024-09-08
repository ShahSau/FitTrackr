import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ExerciseCard from './ExerciseCard';
import { useRouter } from 'expo-router';

const ExerciseList = ({data}:any) => {
    const router = useRouter();
  return (
    <View>
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