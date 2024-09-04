import { theme } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
//import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated,{ SlideInLeft, SlideInRight } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons  from '@expo/vector-icons/Ionicons';



const sliderImages =[
  require('../../assets/images/slider/gym1.jpg'),
  require('../../assets/images/slider/gym2.jpg'),
  require('../../assets/images/slider/gym3.jpg'),
  require('../../assets/images/slider/gym4.jpg'),
  require('../../assets/images/slider/gym5.jpg'),
  require('../../assets/images/slider/gym6.jpg'),
  require('../../assets/images/slider/gym7.jpg'),
]

const HomeScreen =() => {
  //const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
  return (
      <View className='flex-1 flex justify-end'>
        <StatusBar style='dark' />
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
              onPress={() => setAuthenticated(true)}
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
  return (
    <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
      <StatusBar style='dark' />
      {/*/* */}
      <View className='flex-row justify-between items-center mx-5'>
        <View className='space-y-2'>
          <Text 
            style={{fontSize:hp(4.5)}}
            className='font-bold trackin text-neutral-700'
          >
            READY TO
          </Text>
          <Text 
            style={{fontSize:hp(4.5)}}
            className='font-bold trackin text-rose-500'
          >
            Workout
          </Text>
        </View>

        {/*/* */}
        <View className='flex justify-center items-center space-y-2'>
          <Image source={require('../../assets/images/avatar.jpg')} 
            style={{height:hp(8), width:hp(8)}}
            className='rounded-full'
          />
          <View 
            className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
            style={{height:hp(5), width:hp(5)}}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/*/*Image slider */}
      <View>
        {/* <FlatList
          data={sliderImages}
          renderItem={({item, index}) => <ImageSlider item={item} index={index} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          /> */}
      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img:{
    height:'70%',
    width:'100%',


  }
});


export default HomeScreen;