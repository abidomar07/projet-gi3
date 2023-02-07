import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const ImageItem = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const CustomCard = (props) => {
  return (
    <View style={styles.container}>

      {props.listArtiste.map((item, index) => {

        {
          // when no input, show all
          if (props.searchPhrase === "") {
            return (<TouchableOpacity key={index} style={
              styles.itemContainer
            } >
              <ImageItem item={item} />
            </TouchableOpacity>)
          }
          // filter of the name
          if (item.title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return (
              <TouchableOpacity key={index} style={styles.itemContainer}>
                <ImageItem item={item} />
              </TouchableOpacity>)
          }
        }

      })}
    </View >
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    width: '50%',
    padding: 10
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    padding: 10
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  textContainer: {
    padding: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray'
  }
});


