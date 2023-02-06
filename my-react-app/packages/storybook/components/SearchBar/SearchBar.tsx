import React from 'react'
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

type SearchBarProps = {
    searchPhrase: string
    setSearchPhrase: (searchPhrase: string) => void
    clicked: boolean
    setClicked: (clicked: boolean) => void
}

const SearchBar : React.FC<SearchBarProps> = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    !props.clicked
                        ? styles.searchBar__unclicked
                        : styles.searchBar__clicked
                }
            >
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={props.searchPhrase}
                    onChangeText={props.setSearchPhrase}
                    onFocus={() => {
                        props.setClicked(true);
                    }}
                />
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {props.clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        props.setSearchPhrase("")
                    }} />
                )}
            </View>
            {props.clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            props.setClicked(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    )
}

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
