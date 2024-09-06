import React from 'react';
import { View, ScrollView, Text,TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter,useLocalSearchParams } from 'expo-router';

const Addnutrition = () => {
    const router = useRouter();
    const params = useLocalSearchParams()
  return (
    <ScrollView>
    <View className='flex-1 bg-white flex mt-6'>
        {/* Header */}
        <View className='flex-row justify-between items-center p-4'>
          <Ionicons name="arrow-back" size={hp(3)} color="#F43F5E" />
          <Text className='text-xl font-bold text-rose-500'>{params.name}</Text>
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons name="close-circle" size={hp(3)} color="#F43F5E" />
          </TouchableOpacity>
        </View>

        {/* Search Input */}
        <View className='p-4'>
          <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-2'>
            <Ionicons name="search" size={24} color="#F43F5E" />
            <TextInput
              className='ml-2 flex-1'
              placeholder="Pizza"
              //value={search}
                //onChangeText={(text) => setSearch(text)}
            />
            <TouchableOpacity
                //onPress={()=>setSearch("")}
            >
                <Ionicons name="close" size={24} color="#F43F5E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Results */}
        <ScrollView className='p-4'>
          <Text className='text-lg font-bold mb-2'>Search Results</Text>

          {['Small Cheese Pizza', 'Pizza', 'Vegetarian Pizza', 'Pizza', 'Pizza'].map((item, index) => (
            <View key={index} className='mb-4 flex-row justify-between items-center p-4 bg-gray-100 rounded-lg'>
              <View>
                <Text className='font-bold text-lg'>
                  {item} <Ionicons name="star" size={hp(2)} color="#F43F5E" />
                </Text>
                <Text className='text-gray-600'>180 cal, 1 slice, Pizza Pizza</Text>
              </View>
              {/* <Button mode="text">
                <Icon name="plus-circle-outline" size={24} color="#ccc" />
              </Button> */}
              <TouchableOpacity
                // onPress={() => router.push({
                //   pathname:'/addnutrition',
                //   params:{name:item}
                // })}
                >
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
                </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
  )
}

export default Addnutrition

const styles = StyleSheet.create({})