import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {targetMuscles} from '../constants/index';
import { useRouter } from 'expo-router';
import TargetPartCard from './TargetPartCard';


const TargetParts = () => {
    const router = useRouter();
  return (
    <View className='mx-4'>
      <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>Target Muscles</Text>
      <FlatList
        data={targetMuscles}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50, paddingTop:20}}
        columnWrapperStyle={{justifyContent:'space-between'}}
        keyExtractor={(item) => item.name}
        renderItem={({item,index})=><TargetPartCard item={item} index={index} router={router}/>}
        />
    </View>
  )
}

export default TargetParts

const styles = StyleSheet.create({})