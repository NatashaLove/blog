import React, { useContext, useEffect } from 'react';//imported hook into the child : useContext - to make use of that contex (from BlogContext)
//function that's going look at some context object and give us access (to value prop - for example)
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
//need flatlist for  arr of posts (objects)
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';//library on github with icons (trash icon)

const IndexScreen = ({navigation}) => {//{navigation } is the prop we need
//(variable 'blogPosts' here is going to be exactly = to the value prop assigned in the blogcontext.provider
//instead of var 'blogPosts' - insert the value - destructured object from BlogContext with callback func)
//state==data
    const {state, deleteBlogPost, getBlogPosts } = useContext(Context);
//inside useEffect - callback func runs only first time when app rendered:   
    useEffect(()=> {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });//arrow function here tells react navigation that anytime the index screen gains focus (becomes the primary screen on the device)-
// then this callback function will be invoked with { getBlogPosts();}

        return () => {
            listener.remove();
        };// this action will be invoked in case we decide not to show index screen any more - and completely removed it..
//-the callback func in the return- cleans up after the listner-so there's no memory leak.


    }, []);// empty array right there means that we only want to run that error function 
    //exactly one time when our component first shows up on the screen.

/*
!!! never call getBlogPosts func direcly onside the body like:
getBlogPosts();
anytime that we have a function like this -that modifies any state inside of application at all.
-it'll infinite loop: app will rerender - cal the getblogposts-from the API- load them and rerender again etc
-instead - useEffect -used to make sure that we only run some bit of code One time when a component is first rendered.
/*
had to delete the button (it was in View below):
<Button title="Add Post" 
            //callback func onPress ={() => addBlogPost()} can be shortened - rather than creating this extra function -
            // we can instead just pass a reference to the function that we want to be called anytime a user presses:
 onPress ={addBlogPost}/> 
*/
    return (
        <View>
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
                    <TouchableOpacity 
                    onPress = {()=>navigation.navigate('Show', { id: item.id})}
//anytime we call the navigate function - we can optionally pass in a second argument-
//that will convey some information to the next screen that we want to show .
//so as second argument we put in an object that has an I.D. property - the I.D. of the item that we want to show on the other screen.                    
                    >
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
                </TouchableOpacity>
                );
                }}
             />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation}) => {
    return {
//returning obj - which we can use to customize things that are displayed inside of our header and what happens whenever users say taps on them        
        headerRight: 
        <TouchableOpacity onPress={()=> navigation.navigate('Create') }>
         <Feather name="plus" size ={30} />
        </TouchableOpacity>
//react element assigned directly to headerRight - will be displayed on the right side of the header.        
    };
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