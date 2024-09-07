import { StyleSheet, Text, View, SafeAreaView, Image,Pressable  } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const FitScreen = () => {
    const excersises= [
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
      ]
    const [index, setIndex] = useState(0)
    const current = excersises[index]
    const router = useRouter()
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
        onPress={()=>router.push({
            pathname:'/workout',
        })}
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
            //setCompleted([...completed, current.name]);
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