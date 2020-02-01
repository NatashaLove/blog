import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

// I.D. that we passed in is not provided directly as a prop -
// we have to receive that {navigation} prop -the navigation prop has a function
//called Get param- then pass in a string that will be the I.D. or some of the property name 
//that we want to retrieve during that navigate call over here: console.log(navigation.getParam('id'));
const ShowScreen = ({ navigation})=> {
    const { state } = useContext(Context);// going to pass data through context-where we get it from
// find - helper func for arrays :  if the I.D. that was provided into this screen from Index screen
// is equal to the blog post I.D.-We found the appropriate blog post. Let's assign it to that variable.
//And now we can show it on the screen:
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
        );

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};
/*
when we want to show something inside the header- under our main component add in ShowScreen.navigationOptions = () =>
 and this is going to be a function that needs to return a configuration object that'll customize our header.
*/
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : (
            <TouchableOpacity 
            onPress ={() => 
                navigation.navigate('Edit', {id: navigation.getParam('id')})
//because we get access to that same navigation prop - inside of our touchable opacity we can extend our navigate call :
//as a second argument We could put in an object{} that's going to have an I.D. property and that I.D. will come from navigation.getParam function
            }
        >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;