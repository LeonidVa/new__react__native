import {StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

export default function ListItem({el, deleteFunction}) {

    return (
        <TouchableNativeFeedback onPress={()=>{
            deleteFunction(el.key)
        }}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
        text:{
            padding: 20,
            textAlign: "center",
            borderRadius: 5,
            backgroundColor: '#fafafa',
            borderWidth: 1,
            marginTop: 20,
            width: '60%',
            marginLeft: '20%'
        }
});
