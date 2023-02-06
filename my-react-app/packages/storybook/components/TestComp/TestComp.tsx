import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type  TestCompProps = {
 messgae: string   
}
const TestComp : React.FC<TestCompProps> = (props) => {
  return (
    <View>
      <Text>TestComp{props.messgae}</Text>
    </View>
  )
}

export default TestComp

const styles = StyleSheet.create({})