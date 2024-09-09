import { StyleSheet, Text, SafeAreaView, Image,Pressable, View  } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import {useLocalSearchParams, useRouter} from 'expo-router'
import { FitnessContext } from './Context';
import { createWorkout,createCaloriesBurnt } from './api/ererciseDB';


const FitScreen = () => {
  const params = useLocalSearchParams()
  const {id, name} = params
  
  const router = useRouter()
  const {
    completed, setCompleted,
    currentWorkout, setCurrentWorkout,
    burntCalories, setBurntCalories,
    totalMinutes, setTotalMinutes,
    totalSets, setTotalSets
  } = useContext(FitnessContext);

  const [excersises, setExcersises] = useState(currentWorkout)
  const [index, setIndex] = useState(0)
  const current = excersises[index]
  const {loggedemail} = useContext(FitnessContext)
  const sendData = async () => {
    const res = await createWorkout({email:loggedemail,numberofsets:totalSets,duration:totalMinutes})
    return res
  }

  const sentCaloriesBurnt = async () => {
    const res = await createCaloriesBurnt({email:loggedemail,calories:burntCalories})
    return res
  }


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
        onPress={()=>{
          //call backend to store the data
          
          const data = sendData()
          const calDate = sentCaloriesBurnt()
          if (data !== undefined && calDate !== undefined){
           
          router.push({
            pathname:'/workout',
            params:{id:id, name:name}
        })
        setCurrentWorkout([])
        setBurntCalories(0)
        setTotalMinutes(0)
        setTotalSets(0)
      }
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
            router.push({
                pathname:'/restscreen',
            })
            setCompleted([...completed, current.name]);
            setBurntCalories(burntCalories + 6.3);
            setTotalMinutes(totalMinutes + 2.5);
            setTotalSets(totalSets + current.sets);
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
