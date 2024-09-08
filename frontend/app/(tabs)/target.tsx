import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TargetParts from '../components/TargetParts';

const Target = () => {
  return (
    <SafeAreaView className='flex-1 flex space-y-5' edges={['top']}>
      <StatusBar style='dark' />
      {/*/* */}
      <View className=' mx-5'>
        <View className='space-y-2'>
          <Text 
            style={{fontSize:hp(4.5)}}
            className='font-bold trackin text-neutral-700'
          >
            Guide to {""}
          
            <Text 
                style={{fontSize:hp(4.5)}}
                className='font-bold trackin text-rose-500'
            >
                Smarter Workout
            </Text>
          </Text>
        </View>
      </View>
      
      <View className='flex-1'>
        <TargetParts />
      </View>

    </SafeAreaView>
  )
}

export default Target

const styles = StyleSheet.create({})