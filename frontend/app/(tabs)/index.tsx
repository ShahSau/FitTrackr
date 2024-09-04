import { theme } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated,{ FadeInUp, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen =() => {
  return (
    <View className='flex-1 flex justify-end'>
      <StatusBar style='light' />
      <Image className='h-full w-full absolute' source={require('../../assets/images/initialImage.jpg')} />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.4, y: 0.9 }}
        className=' flex justify-end pb-12 spac-y-8'
        >
          <Animated.View entering={SlideInRight.delay(200).springify()} className='flex items-center'>
            <Text className='text-gray-200' style={{fontSize:hp(5)}}>
              Best <Text className='text-rose-500'>Fitness App</Text>
            </Text>
            <Text className='text-gray-200'style={{fontSize:hp(5)}}>
              For You
            </Text>
          </Animated.View>
          <Animated.View entering={SlideInLeft.delay(350).springify()}>
            <TouchableOpacity
              style={{height:hp(7), width:wp(80)}}
              className='bg-rose-500 rounded-full flex items-center justify-center mx-auto border-[2px] border-neutral-200'
              onPress={() => {}}
            >
              <Text className='text-gray-200 font-bold tracking-widest'>
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  img:{
    height:'70%',
    width:'100%',


  }
});


export default HomeScreen;