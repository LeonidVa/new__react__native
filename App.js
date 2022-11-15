import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, FlatList} from 'react-native';
import Header from "./components/header";
import {useState} from "react";
import ListItem from "./components/listItem";

export default function App() {

    const [listOfItem, setListOfItems] = useState([
        {
            text: 'Buy watch', index: 1
        },
        {
            text: 'love Evgenia', index: 2
        },
        {
            text: 'Buy tesla', index: 3
        },
        {
            text: 'Buy house', index: 4
        }
    ])

    function deleteItem(index){
       let newArray = listOfItem.filter((element)=> element.index !== index)
        setListOfItems(newArray)
    }

    return (
        <View>
            <Header/>
            <FlatList data={listOfItem} renderItem={({item})=> (
                <ListItem el={item} deleteFunction={deleteItem}/>
            )}/>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({});
