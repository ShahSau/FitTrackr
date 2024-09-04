import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabLayout =()=> {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused}) => (
            <TabBarIcon name="home" color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
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
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({  focused }) => (
            <TabBarIcon name="analytics"  color={focused ? theme['color-primary-400'] : theme['color-primary-200'] } />
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
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}


export default TabLayout;