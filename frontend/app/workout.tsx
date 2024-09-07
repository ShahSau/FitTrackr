import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView, StatusBar,Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { ScrollView } from 'react-native-virtualized-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons  from '@expo/vector-icons/Ionicons';

const Workout = () => {
    const router = useRouter()
    const params = useLocalSearchParams()
    const {id, name} = params
    const [completed, setCompleted] = useState([
        "JUMPING JACKS",
        "INCLINE PUSH-UPS",
        "CHEST STRETCH"
    ])
    //use this id to call backend to get the details of the workout
    const exercises=[
        {
            id: "4",
            image:
              "https://i.ibb.co/vhFjxkh/core.webp",
            name: "Core",
            description: "7x4 CHALLENGE",
            excersises: [
              {
                id:"20",
                image:"https://i.ibb.co/qYMGF2D/Plie-Squat-Scoop-Up.gif",
                name:"Plie Squat Scoop Up",
                sets:9,
              },
              {
                id:"21",
                image:"https://i.ibb.co/qBsN62Z/Gate-Swings.gif",
                name:"Gate Swings",
                sets:10,
              },
              {
                id:"22",
                image:"https://i.ibb.co/BT7bf1z/Deadlift-Upright-Row.gif",
                name:"Deadlift Upright Row",
                sets:5,
              },
              {
                id:"23",
                image:"https://i.ibb.co/7yVj6rP/Squat-Curl.gif",
                name:"Squat Curl",
                sets:4,
              },
              {
                id:"25",
                image:"https://i.ibb.co/yhCFGqZ/Surfer-Burpees.gif",
                name:"Surfer Burpees",
                sets:12,
              },
              {
                id:"26",
                image:"https://i.ibb.co/n08vYk6/Diamond-Kicks.gif",
                name:"Diamond Kicks",
                sets:10
              },
              {
                id:"27",
                image:"https://i.ibb.co/TqsDgXG/Dead-Bug.gif",
                name:"Dead Bug",
                sets:12,
              },
              {
                id:"28",
                image:"https://i.ibb.co/KrTsC4z/Straight-Leg-Raise.gif",
                name:"Straight Leg Raise",
                sets:10
              }
            ]
          }
    ]
  return (
    <SafeAreaView className='mt-10'>
        <ScrollView>
        <StatusBar style="light" />
        <Image 
          source={{uri:exercises[0].image}} style={{width: wp(100), height: hp(45)}} 
          className='rounded-b-[48px]'
        />
        <TouchableOpacity
          onPress={()=>router.back()}
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
            <TouchableOpacity
                onPress={() =>  
                    router.push({
                        pathname:'/fitscreen',
                        params:{id:exercises[0].id, name:exercises[0].name} 
                    })
                }
                className='bg-rose-500 p-2 mx-auto my-4 rounded-[6px] w-[120px]'
            >
                <Text
                    className='text-white font-bold text-lg text-center'
                >
                    START
                </Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({})