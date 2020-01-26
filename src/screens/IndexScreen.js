import React, { useContext } from 'react';//imported hook into the child : useContext - to make use of that contex (from BlogContext)
//function that's going look at some context object and give us access (to value prop - for example)
import { View, Text, StyleSheet, FlatList } from 'react-native';
//need flatlist for  arr of posts (objects)
import BlogContext from '../context/BlogContext';



const IndexScreen = () => {
//variable 'blogPosts' here is going to be exactly = to the value prop assigned in the blogcontext.provider
const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
             <FlatList
//data prop =blog posts: our array of objects 

                data={blogPosts}

// key extractor: a function that's going to be called with every object inside of our array.
// from key extractor we have to return a String to be used as a key: in our case we have a unique string -
//It's the title of every blog post.
                keyExtractor={(blogPosts) => blogPosts.title}

//renderItem is called with a argument that is an object that has a couple of different properties on it.
//The only property we care about is the item property.
//So we destructure that off with a set of curly braces 
// item inside is equal to our individual blog post objects:                
                renderItem={({ item }) => {
                return <Text>{item.title}</Text>;
                }}
             />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;