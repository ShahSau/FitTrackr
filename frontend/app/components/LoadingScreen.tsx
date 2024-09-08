import React, { useEffect } from 'react';
import { View, StyleSheet, Animated,ActivityIndicator } from 'react-native';


const LoadingScreen = () => {


  return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#F43F5E" />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 170,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
export default LoadingScreen;