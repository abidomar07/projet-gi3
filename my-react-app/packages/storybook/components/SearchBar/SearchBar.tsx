import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Keyboard, Button } from "react-native";
// import { Feather, Entypo } from "@expo/vector-icons";


interface Props {
    searchPhrase: string
    setSearchPhrase: (searchPhrase: string) => void
    clicked: boolean
    setClicked: (clicked: boolean) => void
    loopIcon: string
    closeIcon: string
    bgColor:string
}

const SearchBar: React.FC<Props> = ({
    searchPhrase,
    setSearchPhrase,
    clicked,
    setClicked,
    loopIcon,
    closeIcon,
    bgColor
}) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    !clicked
                        ? styles.searchBar__unclicked
                        : styles.searchBar__clicked
                    
                }
            >
                <TextInput
                    style={{ fontSize: 20, marginLeft: 10,width: "90%",backgroundColor:bgColor}}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {loopIcon}
                {clicked && (
                    closeIcon
                )}
                {/* <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )} */}
            </View>
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            setClicked(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
})