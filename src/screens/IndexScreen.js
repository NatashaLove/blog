import React, { useContext } from 'react';//imported hook into the child : useContext - to make use of that contex (from BlogContext)
//function that's going look at some context object and give us access (to value prop - for example)
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
//need flatlist for  arr of posts (objects)
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';//library on github with icons (trash icon)

const IndexScreen = () => {
//(variable 'blogPosts' here is going to be exactly = to the value prop assigned in the blogcontext.provider
//instead of var 'blogPosts' - insert the value - destructured object from BlogContext with callback func)
//state==data
const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add Post" 
            //callback func onPress ={() => addBlogPost()} can be shortened - rather than creating this extra function -
            // we can instead just pass a reference to the function that we want to be called anytime a user presses:
            onPress ={addBlogPost}/> 
             <FlatList
//data prop =blog posts: our array of objects 
                data={state} // pass in that data property to our flat list

// key extractor: a function that's going to be called with every object inside of our array.
// from key extractor we have to return a String to be used as a key: in our case we have a unique string -
//It's the title of every blog post.
                keyExtractor={(blogPosts) => blogPosts.title}

//renderItem is called with a argument that is an object that has a couple of different properties on it.
//The only property we care about is the item property.
//So we destructure that off with a set of curly braces 
// item inside is equal to our individual blog post objects:                
                renderItem={({ item }) => {
//wrapped Text in View to be able to add Icon next to text and other elements:
                return (
                <View style={styles.row}>
                <Text style={styles.title}>
                    {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}
 //TouchableOpacity to be able to click the icon (it's not button)               
                >
                    <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
                </View>
                );
                }}
             />
        </View>
    );
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',//to have elements on the same line
        justifyContent: 'space-between',//to add space between everything inside of this view.
        paddingVertical: 20, //to get some spacing above and below each blog post.
        paddingHorizontal: 10,// adds space on edges, not to have to do margins
        borderTopWidth: 1,
        //borderBottomWidth: 1,
        borderColor: 'gray'

    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;