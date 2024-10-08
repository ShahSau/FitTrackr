import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { FitnessContext } from '../Context';
import {
  LineChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  BarChart
} from "react-native-chart-kit";
import LoadingScreen from '../components/LoadingScreen';
import { getNutrition,getAllCaloriesBurnt,getAllWorkouts } from '../api/ererciseDB';

// const workoutDays = [
//   { date: "2024-09-02", count: 1 },
//   { date: "2024-09-03", count: 2 },
//   { date: "2024-09-04", count: 3 },
//   { date: "2024-09-05", count: 4 },
//   { date: "2024-09-06", count: 5 },
//   { date: "2024-08-30", count: 2 },
//   { date: "2024-08-31", count: 3 },
//   { date: "2024-08-01", count: 2 },
//   { date: "2024-08-02", count: 4 },
//   { date: "2024-08-05", count: 2 },
//   { date: "2024-08-23", count: 4 }
// ];

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [fooddata, setFoodData] = useState<any>()
  const [caloriesBurnt, setCaloriesBurnt] = useState<any>()
  const [minData, setMinData] = useState<any>()
  const [daysData, setDaysData] = useState<any>()


  const {loggedemail} = useContext(FitnessContext)

  const getNutritionData = async () => {
    const data = await getNutrition({email:loggedemail})
    const calData = await getAllCaloriesBurnt({email:loggedemail})
    const workoutData = await getAllWorkouts({email:loggedemail})

    const total = data.calories + data.fat + data.protein + data.sodium
    const foodData ={
      labels: ["Calories", "Fat", "Protein", "Sodium"],
      data: [data.calories/total, data.fat/total, data.protein/total, data.sodium/total]
    }
    if(calData){
      setCaloriesBurnt(calData)
    }
    if(data){
      setFoodData(foodData)
    }


    if(workoutData){
      setMinData(workoutData.minData)
      setDaysData(workoutData.daysData)
    }
if(data && calData && workoutData){ 
      setLoading(false)
    }

  }


  useEffect(() => {
    getNutritionData()
  }
  ,[])
  return (
    <SafeAreaView className='flex-1 flex space-y-5' edges={['top']}>
        <StatusBar style='dark' />
        {
          loading ?
          <LoadingScreen />
          :
          <ScrollView>

        <View className='flex-row justify-between items-center mx-5'>
          <View className='space-y-2'>
            <Text 
              style={{fontSize:hp(4.5)}}
              className='font-bold trackin text-rose-500'
            >
              Profile
            </Text>
          </View>
        </View>

          {/**Food intake */}
          {/* call today's consumption API*/}
          <Animated.View 
            className='mx-5'
            entering={FadeInDown.duration(400).delay(200).springify()}
          >
            <Text className='font-bold text-rose-500 text-lg'>Food Intake</Text>
            <ProgressChart
              data={fooddata}
              width={wp(90)}
              height={hp(30)}
              strokeWidth={16}
              radius={40}
              chartConfig={{
                //color: (opacity = 1) => `rgba(244, 63, 94, ${opacity})`,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                barPercentage: 0.5,
                backgroundGradientFrom: "#696969",
                backgroundGradientTo: "#555555",
                strokeWidth: 2,

              }}
              hideLegend={false}
            />
          </Animated.View>

          {/**calories burnt */}
          <Animated.View 
            entering={FadeInDown.duration(400).delay(300).springify()}
            className='mx-5'
          >
            <Text className='font-bold text-rose-500 text-lg'>Calories Burnt</Text>
            <LineChart
              data ={caloriesBurnt}
              width={wp(90)}
              height={hp(30)}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                barPercentage: 0.5,
                backgroundGradientFrom: "#696969",
                backgroundGradientTo: "#555555",
                strokeWidth: 2,

              }}
            />
          </Animated.View>

        {/* minutes workout*/}
        <Animated.View 
          className='mx-5'
          entering={FadeInDown.duration(400).delay(400).springify()}
        >
          <Text className='font-bold text-rose-500 text-lg'>Minutes Workout</Text>
          <BarChart
            yAxisLabel=""
            yAxisSuffix=""
            data={minData}
            width={wp(90)}
            height={hp(30)}
            chartConfig={{
              //color: (opacity = 1) => `rgba(244, 63, 94, ${opacity})`,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              barPercentage: 0.5,
              backgroundGradientFrom: "#696969",
              backgroundGradientTo: "#555555",
              strokeWidth: 2,

            }}
          />
        </Animated.View>


        {/*Work out days */}
        <Animated.View 
          entering={FadeInDown.duration(400).delay(600).springify()}
          className='mx-5'
        >
          <Text className='font-bold text-rose-500 text-lg'>Workout Days</Text>
          <ContributionGraph
            values={daysData}
            endDate={new Date("2024-10-06")}
            numDays={105}
            width={wp(90)}
            height={hp(30)}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              backgroundGradientFrom: "#696969",
              backgroundGradientTo: "#555555",
              strokeWidth: 2,
            }}
          />
        </Animated.View>

        </ScrollView>
        }
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})