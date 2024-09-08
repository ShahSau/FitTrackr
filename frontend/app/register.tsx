import { StyleSheet,View, Text, TextInput, TouchableOpacity, Image , Button } from 'react-native'
import React, {useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ SlideInLeft, SlideInRight } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { signup } from './api/ererciseDB';
import { FitnessContext } from './Context';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {setAuthenticated} = useContext(FitnessContext);
    const router = useRouter();

    const handleRegistration = async () => {
      const res = await signup(email, password, name)
      if (res.token){
        await SecureStore.setItemAsync("token", res.token);
      }
      if(res.email && res.token){
        setEmail('');
        setPassword('');
        setName('');
        setAuthenticated(true);
        router.push('/');
      } 
    }

  return ( 
    <View className='flex-1 flex justify-end'>
        <StatusBar style='light' />
        <Image className='h-full w-full absolute' source={require('../assets/images/register.jpg')} />
        <LinearGradient
          colors={['transparent', '#18181b']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.4, y: 0.7 }}
          className=' flex justify-end pb-12 spac-y-8'
        >
        {/* Full Name Input */}
        <Animated.View 
            entering={SlideInRight.delay(350).springify()}
            className='mb-4'
        >
            <TextInput
                placeholder="Full Name"
                className='border border-gray-300 rounded-lg p-3 text-rose-500'
                placeholderTextColor={'#F43F5E'}
                onChange={text => setName(text.nativeEvent.text)}
                onSubmitEditing={text => setName(text.nativeEvent.text)}
            />
        </Animated.View>
        {/* Email Input */}
        <Animated.View 
            entering={SlideInLeft.delay(350).springify()}
            className='mb-4'
        >
          <TextInput
            placeholder="Email"
            className='border border-gray-300 rounded-lg p-3 text-rose-500'
            placeholderTextColor={'#F43F5E'}
            onChange={text => setEmail(text.nativeEvent.text)}
            onSubmitEditing={text => setEmail(text.nativeEvent.text)}
          />
        </Animated.View>
        {/* Password Input */}
        <Animated.View 
            entering={SlideInRight.delay(350).springify()}
            className='mb-4'
        >
          <TextInput
            placeholder="Password"
            className='border border-gray-300 rounded-lg p-3 text-rose-500'
            secureTextEntry={true}
            placeholderTextColor={'#F43F5E'}
            onChange={text => setPassword(text.nativeEvent.text)}
            onSubmitEditing={text => setPassword(text.nativeEvent.text)}
          />
        </Animated.View>
        <Animated.View entering={SlideInLeft.delay(350).springify()}>
            <TouchableOpacity
              style={{height:hp(7), width:wp(80)}}
              className='bg-rose-500 rounded-full flex items-center justify-center mx-auto border-[2px] border-neutral-200'
              onPress={handleRegistration}
            >
              <Text className='text-gray-200 font-bold tracking-widest'>
                Registration
              </Text>
            </TouchableOpacity>
          </Animated.View>
        
        

        </LinearGradient>
    </View>

  )
}

export default Register

const styles = StyleSheet.create({})