import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextNew from '../components/Text' // Update the import path to '../components/Text'

const Exercise = () => {
  return (
    <View>
      <Text className='text-red-800'>exercise</Text>
      <TextNew />
    </View>
  )
}

export default Exercise

const styles = StyleSheet.create({})