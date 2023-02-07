import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PlaylistScreen from "./PlaylistScreen";
// import ArtisteScreen from "./ArtisteScreen";
// import HomeScreen from "./HomeScreen";

// const Tab = createBottomTabNavigator();

const WelcomeComponent = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <Text>web</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Next Playlist"
          onPress={() => navigation.navigate("Playlist")}
        />

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={WelcomeComponent} />
          <Tab.Screen name="Settings" component={PlaylistScreen} />
          <Tab.Screen name="Profile" component={ArtisteScreen} />
        </Tab.Navigator> */}
      </View>
    </View>
  );
}

export default WelcomeComponent


const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});