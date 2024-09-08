import { StyleSheet,View, Text, TextInput, TouchableOpacity, Image , Button } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ SlideInLeft, SlideInRight } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import { FitnessContext } from './Context';
import { signin } from './api/ererciseDB';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {setAuthenticated, setLoggedEmail} = useContext(FitnessContext);

    const handleLogin = async () => {
      const res = await signin(email, password)
      if (res?.token){
        await SecureStore.setItemAsync("email", res.user.email);
      }
      if(res?.user && res?.token){
        setAuthenticated(true);
        setEmail('');
        setPassword('');
        setLoggedEmail(res.user.email);
        router.push('/');
      }

    }

  return ( 
    <View className='flex-1 flex justify-end'>
        <StatusBar style='light' />
        <Image className='h-full w-full absolute' source={require('../assets/images/sign.jpg')} />
        <LinearGradient
          colors={['transparent', '#18181b']}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.4, y: 0.9 }}
          className=' flex justify-end pb-12 spac-y-8'
        >
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
              onPress={handleLogin}
            >
              <Text className='text-gray-200 font-bold tracking-widest'>
                Sign In
              </Text>
            </TouchableOpacity>
          </Animated.View>
        
        <Animated.View entering={SlideInRight.delay(350).springify()}>
            <TouchableOpacity
                onPress={() => router.push('/register')}
            >
                <Text className='text-gray-200 text-center mt-2'>
                    Register
                </Text>
            </TouchableOpacity>
        </Animated.View>

        </LinearGradient>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({})