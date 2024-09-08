import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';
import { useRouter } from 'expo-router'
import { getNutrition } from '../api/ererciseDB';
import LoadingScreen from '../components/LoadingScreen';
import { FitnessContext } from '../Context';

const Nutrition = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const [nutrition, setNutrition] = useState([])
  const {loggedemail} = useContext(FitnessContext)
  
  useEffect(() => {
    const fetchNutrition = async () => {
      const data = await getNutrition({email:loggedemail});
      if (data !== undefined) {
        setNutrition(data)
      }
      setIsLoading(false)
    }
    fetchNutrition()
  }, [])

  return (
    <SafeAreaView className='flex-1 flex mt-10' edges={['top']}>
      
      {
        isLoading ?
        <LoadingScreen />
        :
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
                <Text className='text-center'>{nutrition.calories}</Text>
                <Text className='text-center text-gray-500'>Calories</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>{nutrition.fat}</Text>
                <Text className='text-center text-gray-500'>Fat</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>{nutrition.protein}</Text>
                <Text className='text-center text-gray-500'>Protien</Text>
              </View>

              <View className='flex-1'>
                <Text className='text-center'>{nutrition.sodium}</Text>
                <Text className='text-center text-gray-500'>Sodium</Text>
              </View>

            </View>
          </View>

          {/* Breakfast Section */}
          <View className='p-4 border-b border-gray-300'>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Breakfast</Text>
              <TouchableOpacity mode="text" onPress={() => router.push({
                pathname:'/addnutrition',
                params:{name:'Breakfast'}
              })} className='mt-2'>
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
              <TouchableOpacity mode="text" onPress={() => router.push({
                pathname:'/addnutrition',
                params:{name:'Lunch'}
              })} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View>
        
          {/* Dinner Section */}
          <View className='p-4 border-b border-gray-300'>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Dinner</Text>
              <TouchableOpacity mode="text" onPress={() => router.push({
                pathname:'/addnutrition',
                params:{name:'Dinner'}
              })} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View>
    
        
          {/* Snacks Section */}
          <View className='p-4 '>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-lg font-bold'>Snacks</Text>
              <TouchableOpacity mode="text" onPress={() => router.push({
                pathname:'/addnutrition',
                params:{name:'Snacks'}
              })} className='mt-2'>
                <Ionicons name="add" size={hp(3)} color="#F43F5E" />
              </TouchableOpacity>
            </View>
          </View> 
        </View>

      </ScrollView>
      }
    </SafeAreaView>
  )
}

export default Nutrition

const styles = StyleSheet.create({})