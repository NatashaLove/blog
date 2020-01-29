import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

// I.D. that we passed in is not provided directly as a prop -
// we have to receive that {navigation} prop -the navigation prop has a function
//called Get param- then pass in a string that will be the I.D. or some of the property name 
//that we want to retrieve during that navigate call over here: console.log(navigation.getParam('id'));
const ShowScreen = ({ navigation})=> {
    const { state } = useContext(Context);// going to pass data through context-where we get it from
// find - helper func for arrays :  if the I.D. that was provided into this screen is equal to the blog post I.D.-
//We found the appropriate blog post. Let's assign it to that variable.
//And now we can show it on the screen:
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;