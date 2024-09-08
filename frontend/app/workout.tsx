import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView, StatusBar,Image, Pressable } from 'react-native'
import React, {useState, useEffect,useContext} from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { ScrollView } from 'react-native-virtualized-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons  from '@expo/vector-icons/Ionicons';
import LoadingScreen from './components/LoadingScreen';
import { getExerciseMineById } from './api/ererciseDB';
import { FitnessContext } from './Context';

const Workout = () => {
    const router = useRouter()
    const params = useLocalSearchParams()
    const {id, name} = params
    const [loading, setLoading] = useState(true)
    const [exercises, setExercises] = useState<any>([])

    const {completed, setCompleted, currentWorkout, setCurrentWorkout} = useContext(FitnessContext);

    useEffect(() => {
      getExercise()
    },[id])

    const getExercise = async () => {
      try {
        const res = await getExerciseMineById(id)
        setExercises(res)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <SafeAreaView className='mt-10'>
        {
          loading ?
          <LoadingScreen />
          :
          <ScrollView>
        <StatusBar style="light" />
        <Image 
          source={{uri:exercises[0].image}} style={{width: wp(100), height: hp(45)}} 
          className='rounded-b-[48px]'
        />
        <TouchableOpacity
          onPress={()=>
            router.push({
              pathname:'/exercise'
            })
          }
          className='absolute mx-2 mt-2 rounded-full left-0'
        >
          <Ionicons name="arrow-back-circle" size={hp(4.5)} color="#F43F5E" />
        </TouchableOpacity>
        <View className='mx-4 space-y-3 mt-4'>

          <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >
            {exercises[0].name} workout
            </Text>
            <View className='mb-10'>

                {
                    exercises[0].excersises.map((item, index) => (
                    
                    <TouchableOpacity
                        style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
                        key={index}
                    >
                        <Image
                        style={{ width: 90, height: 90 }}
                        source={{ uri: item.image }}
                        />

                        <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold",width:170, }}>
                            {item.name}
                        </Text>

                        <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                            x{item.sets}
                        </Text>
                    </View>

                    {completed.includes(item.name) ? (
                    <Ionicons style={{marginLeft:40}} name="checkmark-circle" size={24} color="green" />
                    ) : (
                    null
                    )}
                </TouchableOpacity>
                    ))
                }
              
            </View>
            <Pressable
                onPress={() =>  {
                  router.push({
                    pathname:'/fitscreen',
                    params:{id:exercises[0].id, name:exercises[0].name} 
                })
                setCurrentWorkout(exercises[0].excersises)
                } 
                }
                
                className='bg-rose-500 p-2 mx-auto my-4 rounded-[6px] w-[120px]'
            >
                <Text
                    className='text-white font-bold text-lg text-center'
                >
                    START
                </Text>
            </Pressable>

        </View>
        </ScrollView>
        }
    </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({})