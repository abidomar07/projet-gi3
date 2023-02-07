import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from 'react'
import { CustomCard, SearchBar } from "@my-workspace/my-ui";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";

const ArtisteScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const listArtiste = [
    {
      title: 'Image 1',
      description: 'This is a description for Image 1',
      uri: 'https://picsum.photos/200',
      songs: [{
        name: "video 1",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"

      }, {
        name: "video 2",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
      }]
    },
    {
      title: 'Image 2',
      description: 'This is a description for Image 2',
      uri: 'https://picsum.photos/200',
      songs: [{
        name: "video 1",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"

      }, {
        name: "video 2",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
      }]
    },
    {
      title: 'Image 3',
      description: 'This is a description for Image 3',
      uri: 'https://picsum.photos/200',
      songs: [{
        name: "video 1",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"

      }, {
        name: "video 2",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
      }]
    },
    {
      title: 'Image 4',
      description: 'This is a description for Image 4',
      uri: 'https://picsum.photos/200',
      songs: [{
        name: "video 1",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"

      }, {
        name: "video 2",
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
      }]
    }
  ];
  return (
    <View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        loopIcon={<Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
      />}
      closeIcon={<Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
          setSearchPhrase("")
      }} />}
      />
      <CustomCard listArtiste={listArtiste} searchPhrase={searchPhrase}/>

    </View>
  );
};



const styles = StyleSheet.create({});
export default ArtisteScreen;