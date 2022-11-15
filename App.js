import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, FlatList} from 'react-native';
import Header from "./components/header";
import {useState} from "react";
import ListItem from "./components/listItem";
import Form from "./components/form";

export default function App() {

    const [listOfItem, setListOfItems] = useState([
        {
            text: 'Buy watch', key: '1'
        },
        {
            text: 'love Evgenia', key: '2'
        },
        {
            text: 'Buy tesla', key: '3'
        },
        {
            text: 'Buy house', key: '4'
        }
    ])


    function deleteItem(index){
       let newArray = listOfItem.filter((element)=> element.key !== index)
        setListOfItems(newArray)
    }


    function addItem(text){
        setListOfItems([...listOfItem, {
            text: text,
            key: Math.random().toString(36).substring(7)
        }])
    }

    return (
        <View>
            <Header/>
            <Form addItem={addItem}/>
            <FlatList data={listOfItem} renderItem={({item})=> (
                <ListItem el={item} deleteFunction={deleteItem}/>
            )}/>

            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({});
