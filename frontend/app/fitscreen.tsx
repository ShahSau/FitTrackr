import { StyleSheet, Text, SafeAreaView, Image,Pressable, View  } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { FitnessContext } from './Context';


const FitScreen = () => {
  const params = useLocalSearchParams()
  const {id, name} = params
  
  const router = useRouter()
  const {completed, setCompleted, currentWorkout, setCurrentWorkout} = useContext(FitnessContext);

  const [excersises, setExcersises] = useState(currentWorkout)
  const [index, setIndex] = useState(0)
  const current = excersises[index]
  return (
    <SafeAreaView className='mt-10'>
      <StatusBar style='dark' />
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />

      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>

      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
      {index + 1 >= excersises.length ? (
        <Pressable
        //   onPress={() => {
        //     navigation.navigate("Home");
        //   }}
        onPress={()=>{
          router.push({
            pathname:'/workout',
            params:{id:id, name:name}
        })
        setCurrentWorkout([])
      }}
        style={{
          backgroundColor: "green",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          borderRadius: 20,
          padding: 10,
          width: 150,
        }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            End
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            // navigation.navigate("Rest");
            router.push({
                pathname:'/restscreen',
            })
            setCompleted([...completed, current.name]);
            //setWorkout(workout + 1);
            //setMinutes(minutes + 2.5);
            //setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            router.push({
                pathname:'/restscreen',
            })

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            PREV
          </Text>
        </Pressable>
        {index + 1 >= excersises.length ? (
          <Pressable
            onPress={() => {
              router.push({
                    pathname:'/workout',
                    params:{id:id, name:name}
              });
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
                router.push({
                    pathname:'/restscreen',
                })

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})





[{"_id": "66dcdbae9638210972ead943", "id": "10", "image": "https://i.ibb.co/THQ15x6/Dumbbell-Chest-Press.gif", "name": "Dumbbell Chest Press", "sets": 10}, {"_id": "66dcdbae9638210972ead944", "id": "11", "image": "https://i.ibb.co/ydskVPQ/Diamond-Kicks.gif", "name": "Diamond Kicks", "sets": 10}, {"_id": "66dcdbae9638210972ead945", "id": "12", "image": "https://i.ibb.co/j3fnL4D/Dumbbell-Pullover.gif", "name": "Dumbbell Pullover", "sets": 20}, {"_id": "66dcdbae9638210972ead946", "id": "13", "image": "https://i.ibb.co/r6V48s8/Side-Plank-Rotation.gif", "name": "Side Plank Rotation", "sets": 10}, {"_id": "66dcdbae9638210972ead947", "id": "14", "image": "https://i.ibb.co/2yRz4Kf/Lunge-Back-Kick.gif", "name": "Lunge Back Kick", "sets": 14}, {"_id": "66dcdbae9638210972ead948", "id": "15", "image": "https://i.ibb.co/LRYwwmb/Rope-Climb-Crunches.gif", "name": "Rope Climb Crunches", "sets": 14}, {"_id": "66dcdbae9638210972ead949", "id": "16", "image": "https://i.ibb.co/VDJyhLQ/Frog-Bridge.gif", "name": "Frog Bridge", "sets": 14}, {"_id": "66dcdbae9638210972ead94a", "id": "17", "image": "https://i.ibb.co/WPzZyr2/Touch-And-Hop.gif", "name": "Touch And Hop", "sets": 14}]