import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CoverProp = {
  BorderR: number;
  imageUrl: string;
};

const Cover: React.FC<CoverProp> = (props) => {
  const { BorderR, imageUrl } = props;
  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        imageStyle={{ borderRadius:BorderR}}
        style={{height: 100, width: 100}}
      ></ImageBackground>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({});
