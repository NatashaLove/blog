import React, { useContext, useState } from 'react';//useState here to control TextInput
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';//TextInput for the user to input text
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation})=> {
//need two different pieces of state one to handle the title entry and one to handle the content entry:
    const [title, setTitle]= useState('');
    const[content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText ={(text) => setTitle(text)} 
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={(text) => setContent(text)} 
            />
            <Button title="Add Blog Post" />
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:5,//mRgins on both sides
        marginBottom:5,
        paddingHorizontal:5 //to get a little bit spacing between the text and the border

    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginHorizontal:5
    }

});

export default CreateScreen;