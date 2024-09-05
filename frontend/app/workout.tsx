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
            id: "0",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEM-6gDUO7g1cdrNhBaqk_0nwxy6ILlIqsQ&usqp=CAU",
            name: "FULL BODY",
            description: "7x4 CHALLENGE",
            excersises: [
              {
                id: "10",
                image:
                  "https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif",
                name: "JUMPING JACKS",
                sets:12,
              },
              {
                  id:"11",
                  image:"https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Incline-Push-Up.gif",
                  name:"INCLINE PUSH-UPS",
                  sets:10,
              },
              {
                  id:"12",
                  image:"https://media.self.com/photos/583c641ca8746f6e65a60c7e/master/w_1600%2Cc_limit/DIAMOND_PUSHUP_MOTIFIED.gif",
                  name:"INCLINED PUSH-UPS",
                  sets:10,
              },
              {
                  id:"13",
                  image:"https://cdn.prod.openfit.com/uploads/2020/03/10162714/wide-arm-push-up.gif",
                  name:"WIDE ARM PUSH-UPS",
                  sets:12,
              },
              {
                  id:"14",
                  image:"https://www.yogajournal.com/wp-content/uploads/2021/12/Cobra.gif?width=730",
                  name:"COBRA STRETCH",
                  sets:10,
              },
              {
                  id:"15",
                  image:"https://www.vissco.com/wp-content/uploads/animation/sub/double-knee-to-chest-stretch.gif",
                  name:"CHEST STRETCH",
                  sets:10,
              }
            ],
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