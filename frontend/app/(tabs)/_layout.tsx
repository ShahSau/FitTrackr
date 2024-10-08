import { Tabs } from 'expo-router';
import React, {useState, useContext} from 'react';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme';
import { FitnessContext } from '../Context';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabLayout =()=> {
  const {authenticated, setAuthenticated} = useContext(FitnessContext);
 //this should be set to false when authentication is implemented
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          //these commented out styles need to be check once authentication with state is implemented
          // headerTitleStyle: {
          //   display: 'none',
          // },
          
          tabBarStyle: {
            display: authenticated ? 'flex' : 'none',
          },
          // tabBarIconStyle: {
          //   display: 'none',
          // },
           tabBarIcon: ({ focused}) => (
             <TabBarIcon name="home" color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
          ),
      }}
      />
      <Tabs.Screen
        name="target"
        options={{
          title: 'Target',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="accessibility-sharp" color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
          ),
        }}
      />

      <Tabs.Screen
        name="nutrition"
        options={{
          title: 'Nutrition',
          tabBarIcon: ({  focused }) => (
            <TabBarIcon name="nutrition"  color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
          ),
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          title: 'Exercise',
          tabBarIcon: ({  focused }) => (
            <TabBarIcon name="barbell"  color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({  focused }) => (
            <TabBarIcon name="person"  color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
          ),
        }}
      />
      
    </Tabs>
  );
}


export default TabLayout;