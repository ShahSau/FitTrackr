import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';

const Nutrition = () => {
  return (
    <SafeAreaView className='flex-1 flex mt-10' edges={['top']}>
      <ScrollView>
      <StatusBar style='dark' />
        {/*header */}
        <View className='flex-row justify-between items-center mx-5'>
          <View className='space-y-2'>
            <Text 
              style={{fontSize:hp(4.5)}}
              className='font-bold trackin text-neutral-700'
            >
              Fuel Body {"\n"}
              <Text 
                style={{fontSize:hp(4.5)}}
                className='font-bold trackin text-rose-500'
              >
                Elevate  Life
              </Text>
            </Text>
          </View>

        </View>
  
        {/*rest of the screen */}
        <View className='flex-1'>

          {/* Today's consumption Section */}
          <View className='mx-4 py-4 bg-gray-200'>
            <Text className='text-xl font-semibold text-center'>Today's consumption</Text>
            <View className='flex-row justify-between mt-4 '>
              <View className='flex-1'>
                <Text className='text-center'>1,770mg</Text>
                <Text className='text-center text-gray-500'>Calories</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>166mg</Text>
                <Text className='text-center text-gray-500'>Fat</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>26mg</Text>
                <Text className='text-center text-gray-500'>Protien</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>16mg</Text>
                <Text className='text-center text-gray-500'>Sodium</Text>
              </View>
            </View>
          </View>

          {/* Breakfast Section */}
          <View className='p-4 border-b border-gray-300'>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Breakfast</Text>
              <TouchableOpacity mode="text" onPress={() => {}} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>

            <Text className='text-gray-500 mb-2'>
              Cafe Au Lait - Grams{'\n'}
              Nescafe-dolce Gusto, 180 ml
            </Text>
            <Text className='text-gray-500 mb-2'>Egg{'\n'}2 medium</Text>

          </View>

          {/* Lunch Section */}
          <View className='p-4 border-b border-gray-300'>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Lunch</Text>
              <TouchableOpacity mode="text" onPress={() => {}} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View>
        
          {/* Dinner Section */}
          <View className='p-4 border-b border-gray-300'>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Dinner</Text>
              <TouchableOpacity mode="text" onPress={() => {}} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View>
    
        
          {/* Snacks Section */}
          <View className='p-4 '>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Snacks</Text>
              <TouchableOpacity mode="text" onPress={() => {}} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View> 
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Nutrition

const styles = StyleSheet.create({})