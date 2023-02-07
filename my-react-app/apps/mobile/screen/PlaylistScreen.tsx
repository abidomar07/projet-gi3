import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar, CustomCard } from '@my-workspace/my-ui'
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";

const PlaylistScreen = ({ navigation }) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    const [playlist] = useState([{
        title: "First song",
        uri: 'https://picsum.photos/200',
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
    }, {
        title: "Second song",
        uri: 'https://picsum.photos/200',
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
    },
    {
        title: "First song",
        uri: 'https://picsum.photos/200',
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
    }, {
        title: "Second song",
        uri: 'https://picsum.photos/200',
        urlMp4: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration: 70,
        poster: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
    }])
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
            {/* {playlist.map(p => {
                if (searchPhrase === "") {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { ...p })}>
                        <Text> {p.name} </Text>
                    </TouchableOpacity>
                                     )
                }
                if (p.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Home", { ...p })}>
                            <Text> {p.name} </Text>
                        </TouchableOpacity>)
                }
                
            })} */}
            <CustomCard listArtiste={playlist} searchPhrase={searchPhrase} />



            <Button title='Artiste' onPress={() => { navigation.navigate('Artiste') }}>
            </Button>

        </View>
    )
}

export default PlaylistScreen

const styles = StyleSheet.create({})