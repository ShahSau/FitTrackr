import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text,TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter,useLocalSearchParams } from 'expo-router';
import axios from "axios";
// import { recipie } from './constants/recipie';

const Addnutrition = () => {
    const router = useRouter();
    const params = useLocalSearchParams()
    const [search, setSearch] = useState('pizza')
    const [recipies, setRecipies] = useState<any>([])
    const [link, setLink] = useState('')

    // api credentials
    const base_url ='https://api.edamam.com/api/recipes/v2'
    const type = 'public'
    const app_id = 'e8555c2b'
    const app_key = '66f7d5653cc1b96aee824fed3e71ecae'


    // search api
    const apiCall = async (url: any, params: any) =>{
        try {
            const options = {
                method: 'GET',
                url: url,
                params: {
                    type: type,
                    app_id: app_id,
                    app_key: app_key,
                    q: search,
                    from: 0,
                    to: 10
                },
            }
            const response = await axios.request(options)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const searchApi = async () => {
        const data = await apiCall(`${base_url}`, {})
        setRecipies(data.hits)
    }

    useEffect(() => {
        searchApi()
    }
    ,[search])



  return (
    <ScrollView className='mt-6'>
    <View className='flex-1 bg-white flex mt-6'>
        {/* Header */}
        <View className='flex-row justify-between items-center p-4'>
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
              onSubmitEditing={text => setSearch(text.nativeEvent.text)}
            />
          </View>
        </View>

        {/* Search Results */}
        <ScrollView className='p-4'>
          <Text className='text-lg font-bold mb-2'>Search Results</Text>
          {
            recipies.map((item, index) => (
                <TouchableOpacity
                key={index}
                    onPress={() => router.push({
                        pathname:'/nutritiondetails',
                        params:{
                            name:item.recipe.label,
                            calories:item.recipe.calories,
                            protein:item.recipe.totalNutrients.PROCNT.quantity,
                            sodium:item.recipe.totalNutrients.NA.quantity,
                            fat:item.recipe.totalNutrients.FAT.quantity,
                            energy:item.recipe.totalNutrients.ENERC_KCAL.quantity,
                            carbs:item.recipe.totalNutrients.CHOCDF.quantity,
                            // image:item.recipe.image,
                            ingredients:item.recipe.ingredientLines,
                             // url:item.recipe.url,
                            type:item.recipe.cuisineType[0],
                            time:item.recipe.totalTime,
                             servings:item.recipe.yield,
                            links:item._links.self.href,
                           
                        }
                    })}
                >
                <View  className='mb-4 flex-row justify-between items-center p-4 bg-gray-100 rounded-lg'>
                  <View>
                    <Text className='font-bold text-lg'>
                      {item.recipe.label} <Ionicons name="star" size={hp(2)} color="#F43F5E" />
                    </Text>
                    <Text className='text-gray-600'>{(parseFloat(item.recipe.calories).toFixed(2)).toString()} cal, {(parseFloat(item.recipe.totalNutrients.ENERC_KCAL.quantity).toFixed(2)).toString()} kcal energy</Text>
                    <Text className='text-gray-600'>{(parseFloat(item.recipe.totalNutrients.PROCNT.quantity).toFixed(2)).toString()} g protein, {(parseFloat(item.recipe.totalNutrients.NA.quantity).toFixed(2)).toString()} mg sodium</Text>
                  </View>
                    <Ionicons name="chevron-forward-circle" size={hp(3)} color="#F43F5E" />
                </View>
                </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
      </ScrollView>
  )
}

export default Addnutrition

const styles = StyleSheet.create({})