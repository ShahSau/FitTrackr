import React from 'react';
import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';


const HomeScreen =() => {
  return (
    <SafeAreaView>
      <Text className="bg-black">exercise</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


export default HomeScreen;