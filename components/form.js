import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useState} from "react";

export default function Form({addItem}) {

    const [text, setText] = useState(``)

    const onChange = (text) =>{
            setText(text)
    }

    return (
        <View >
            <TextInput style={styles.input} onChangeText={onChange} placeholder={`Add task...`}/>
            <Button title={`Add task`} color="green" onPress={()=>{
                addItem(text)
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});
