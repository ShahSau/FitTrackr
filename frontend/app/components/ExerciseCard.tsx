import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ExerciseCard = ({item,index,router}:{item:any, router:any, index:number}) => {
  return (
    <View>
      <TouchableOpacity
        className='flex py-3 space-y-2'
        onPress={()=>router.push({
            pathname:'/exercisesDetails/'+item.id,
            params:{id:item.id, name:item.name, image:item.image}
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
    </View>
  )
}

export default ExerciseCard

const styles = StyleSheet.create({})