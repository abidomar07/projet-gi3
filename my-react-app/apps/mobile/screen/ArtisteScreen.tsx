import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from 'react'
import { CustomCard } from "@my-workspace/my-ui";

const ArtisteScreen = () => {

  const listArtiste = useState([
    {
      title: 'Image 1',
      description: 'This is a description for Image 1',
      uri: 'https://picsum.photos/200'
    },
    {
      title: 'Image 2',
      description: 'This is a description for Image 2',
      uri: 'https://picsum.photos/200'
    },
    {
      title: 'Image 3',
      description: 'This is a description for Image 3',
      uri: 'https://picsum.photos/200'
    },
    {
      title: 'Image 4',
      description: 'This is a description for Image 4',
      uri: 'https://picsum.photos/200'
    }
  ]);
  return (
    <View>

      <CustomCard listArtiste={listArtiste} />

    </View>
  );
};



const styles = StyleSheet.create({});
export default ArtisteScreen;