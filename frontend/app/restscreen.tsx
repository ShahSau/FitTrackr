import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import rest1 from '../assets/images/rest-1.jpg';
import rest2 from '../assets/images/rest-2.jpg';
import rest3 from '../assets/images/rest-3.jpg';
import rest4 from '../assets/images/rest-4.jpg';
import rest5 from '../assets/images/rest-5.jpg';
import rest6 from '../assets/images/rest-6.jpg';
import rest7 from '../assets/images/rest-7.jpg';
import rest8 from '../assets/images/rest-8.jpg';
import rest9 from '../assets/images/rest-9.jpg';
import { StatusBar } from "expo-status-bar";
  
const RestScreen = () => {
    const router = useRouter();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(2);
    const images = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9];
    const [restImage, setRestImage] = useState(images[0]);
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
        const randomNumner = Math.floor(Math.random() * images.length);
        setRestImage(images[randomNumner]);
      },[]);

      useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
      });
  return (
    <SafeAreaView className="mt-10">
      <StatusBar style="dark" />
      <Image
        resizeMode="cover"
        source={restImage}
        style={{ width: "100%", height: 420 }}
        className='rounded-b-[48px]'
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