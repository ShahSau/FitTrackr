import React, {useEffect, useState} from 'react'
import { useRouter,useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar,FlatList } from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { ScrollView } from 'react-native-virtualized-view';


const NutritionDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams()
    const [tab, setTab] = useState('ingredients')
    const [data, setData] = useState<any>([])
    const id = params.links.split("/v2")[1].split("?")[0].substring(1)


    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                url: `https://api.edamam.com/api/recipes/v2/${id}`,
                params: {
                    type: 'public',
                    app_id: 'e8555c2b',
                    app_key: '66f7d5653cc1b96aee824fed3e71ecae',
                },

            }
            const response = await axios.request(options)
            console.log(response.data,"9999999")
            return response.data
        } catch (error) {
            console.log(error)
        }
        
    }

    const apiCall = async ()=>{
        const data = await fetchData()
        console.log(data,"DDDD")
        setData(data)
    }

    useEffect(() => {
        console.log("ia jajajaj999")
        apiCall()
        
    },[])

    if(data.length === 0){
        return <Text>Loading...</Text>
    }
    

  return (

        <SafeAreaView className='flex-1 flex space-y-5 mt-2' edges={['top']}>
        <ScrollView className='flex-1 bg-white'>
            <StatusBar style='dark' />
            <Image 
                source={{uri:data.recipe.image}} 
                style={{width: wp(100), height: hp(45)}} 
                className='rounded-b-[48px]'
            />
            <TouchableOpacity
                onPress={()=>router.back()}
                className='absolute mx-2 mt-2 rounded-full left-0'
            >
                <Ionicons name="arrow-back-circle" size={hp(4.5)} color="#F43F5E" />
            </TouchableOpacity>
            <TouchableOpacity 
                className='absolute mx-2 mt-2 mr-4 rounded-full right-0'
                //onPress={()=>router.navigate('addnutrition')} // add to the list
            >
                <Ionicons name="bookmark-outline" size={24} color="#F43F5E" />
            </TouchableOpacity>


        {/* Recipe Title */}
        <View className='px-4 py-4'>
            <Text className='text-2xl font-bold text-center'>{params.name}</Text>
            <Text className='text-gray-500 text-center mt-2'>
            {params.type} • {params.time} mins • {params.servings} servings
            </Text>
        </View>

        {/* Tab Section */}
        <View className='flex-row justify-center items-center px-4 py-2'>
            <TouchableOpacity className={`px-3 py-2 ${tab == 'ingredients'? 'border-b-2 border-rose-500' :''}`} onPress={()=>setTab("ingredients")}>
            <Text className={`text-lg ${tab == 'ingredients' ? 'font-bold text-rose-500 ':'text-gray-500'}`}>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`px-3 py-2 ${tab == 'health'? 'border-b-2 border-rose-500' :''}`}  onPress={()=>setTab('health')}>
            <Text className={`text-lg ${tab == 'health' ? 'font-bold text-rose-500 ':'text-gray-500'}`}>Health</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`px-3 py-2 ${tab == 'direction'? 'border-b-2 border-rose-500' :''}`}  onPress={()=> setTab('direction')}>
            <Text className={`text-lg ${tab == 'direction' ? 'font-bold text-rose-500 ':'text-gray-500'}`}>Direction</Text>
            </TouchableOpacity>
        </View>

        { tab === 'ingredients' && (
        <>
            <View className='px-4 py-4'>
                <FlatList
                    data={data.recipe.ingredients}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:50, paddingTop:20}}
                    //columnWrapperStyle={{justifyContent:'space-between'}}
                    keyExtractor={(item) => item}
                    renderItem={({item,index})=><Text className='text-lg' key={index+item.text}>{item.text}</Text>}
                />

            </View>

            <View className='px-4 py-6'>
                <Text className='text-xl font-bold mb-4'>Nutrition</Text>

                {/* Nutritional Item1 */}
                <View className='flex-row justify-between'>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.calories)}</Text>
                        <Text className='text-rose-500'>Calories</Text>
                        </View>
                    </View>

                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.protein)}</Text>
                        <Text className='text-rose-500'>Protein</Text>
                        </View>
                    </View>

                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.sodium)}</Text>
                        <Text className='text-rose-500'>Sodium</Text>
                        </View>
                    </View>
                </View>

                {/* Nutritional Item1 2*/}
                <View className='flex-row justify-between mt-6'>
                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.fat)}</Text>
                        <Text className='text-rose-500'>Fat</Text>
                        </View>
                    </View>

                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.energy)}</Text>
                        <Text className='text-rose-500'>Energy</Text>
                        </View>
                    </View>

                    <View className='items-center'>
                        <View className='w-20 h-20 rounded-full border-4 border-rose-500 justify-center items-center'>
                        <Text className='text-xl font-bold'>{parseInt(params.carbs)}</Text>
                        <Text className='text-rose-500'>Carbs</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </>
        )}

        { tab === 'health' && (
        <View className='px-4 py-4'>
                <FlatList
                    data={data.recipe.healthLabels}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:50, paddingTop:20}}
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    keyExtractor={(item) => item}
                    renderItem={({item,index})=><Text className=' bg-rose-500  text-white font-bold py-2 px-4 rounded m-2 text-center' key={index}>{item}</Text>}
                />

        </View>
        )}

        { tab === 'direction' && (
        
        <View className='px-4 py-4'>
            <Text>
                {params.ingredients}
            </Text>
            
        </View>
        )}
        </ScrollView>
    </SafeAreaView>
  )
}

export default NutritionDetails

const styles = StyleSheet.create({})







