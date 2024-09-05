import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bodyParts} from '../constants/index';
import BodyPartCard from './BodyPartCard';
import { useRouter } from 'expo-router';



const BodyParts = () => {
    const router = useRouter();
  return (
    <View className='mx-4'>
      <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>Exercises</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50, paddingTop:20}}
        columnWrapperStyle={{justifyContent:'space-between'}}
        keyExtractor={(item) => item.name}
        renderItem={({item,index})=><BodyPartCard item={item} index={index} router={router}/>}
        />
    </View>
  )
}

export default BodyParts

const styles = StyleSheet.create({})