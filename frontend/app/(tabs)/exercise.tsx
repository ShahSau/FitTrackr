import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FitnessParts from '../components/FitnessParts';

const Exercise = () => {
  return (
    <SafeAreaView className='flex-1 flex space-y-5' edges={['top']}>
      <StatusBar style='dark' />
      <View className='flex-row justify-between items-center mx-5'>
        <View className='space-y-2'>
          <Text 
            style={{fontSize:hp(4.5)}}
            className='font-bold trackin text-neutral-700'
          >
            Power Up Your {""}
          
            <Text 
              style={{fontSize:hp(4.5)}}
              className='font-bold trackin text-rose-500'
            >
              Potential
            </Text>
          </Text>
        </View>
      </View>

      {/*exercise cards */}
      <View className='flex-1'>
        <FitnessParts />
      </View>
      
    </SafeAreaView>
  )
}

export default Exercise

const styles = StyleSheet.create({})