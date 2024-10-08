import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React,{ useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { FitnessContextProvider } from './Context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <FitnessContextProvider>
      <Stack
        // initialRouteName="(tabs)"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="exercises"  options={{presentation:'fullScreenModal'}} />
        <Stack.Screen name="workout"  options={{presentation:'fullScreenModal'}} />
        <Stack.Screen name="exercisestarget"  options={{presentation:'modal'}} />
        <Stack.Screen name="exercisesdetails"  options={{presentation:'modal'}} />
        <Stack.Screen name="fitscreen"  options={{presentation:'modal'}} />
        <Stack.Screen name="addnutrition"  options={{presentation:'fullScreenModal'}} />
        <Stack.Screen name="nutritiondetails"  options={{presentation:'modal'}} />
        <Stack.Screen name="login"  options={{presentation:'fullScreenModal'}} />
        <Stack.Screen name="register"  options={{presentation:'fullScreenModal'}} />
      </Stack>
    </FitnessContextProvider>
  );
}
