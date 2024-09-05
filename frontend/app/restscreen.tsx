import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import restImage from '../assets/images/rest.jpg';
  
const RestScreen = () => {
    const router = useRouter();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(10);
    const startTime = () => {
        setTimeout(() => {
          if (timeLeft <= 0) {
            router.back();
            clearTimeout(timer);
          }
          setTimeLeft(timeLeft - 1);
        }, 1000);
      };
      useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
      });
  return (
    <SafeAreaView>
      <Image
        resizeMode="cover"
        source={restImage}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({})