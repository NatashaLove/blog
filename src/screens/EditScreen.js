import React, { useContext, useState } from 'react';//useState here to control TextInput
import { StyleSheet } from 'react-native';//TextInput for the user to input text
import { Context } from '../context/BlogContext';// import can get access to our context
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation})=> {
    const { state, editBlogPost, deleteBlogPost } =useContext(Context);
    //const {editBlogPost} = useContext(Context);
//iterate through arr blogposts/state- all the posts and find one with the same I.D. -
//as navigation.getparam (I.D) and assign it to const blogPost (current to edit):
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );
   

//add in some callback func to our editscreen and pass it down into blogpostform(separate component/file)-
// and then we will come back to this <BlogPostForm> and make sure -
//-that we take that updated/edited title and content and pass it to some function -
//coming from our 'Context' object inside of editScreen:
    return (
//existing title and content values should be taken from -const BlogPost - above (by id),
//and passed down as some starting initial form values to our form:        
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content, id: blogPost.id}}
//data prop =blog posts: our array of objects 
          //   data={state} // pass in that data property to our flat list

// key extractor: a function that's going to be called with every object inside of our array.
// from key extractor we have to return a String to be used as a key: in our case we have a unique string -
//It's the title of every blog post.
            keyExtractor={(state) => state.title}
            
            onSubmit={(title, content, id) => {

            console.log(title, content, id);

            deleteBlogPost(blogPost.id);
    
            editBlogPost(title, content, blogPost.id, () => navigation.navigate('Index'));
                   
            }}

        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;

//{navigation.getParam('id')}//like that edit screen knows -
//-0exactly what it is supposed to be editing. -inside <Text></Text>
/*
these lines are transferred from inside of the component to the blogpostform:
//whenever we call useState- we pass in the initial default value inside-
//our initial default value for title is this blogpost title:
    const [title, setTitle] = useState(blogPost.title);
//when we first initialize our 'state' property, the title variable inside [] is going to be =
//=whatever the title is of the blogpost that we're trying to edit

    const [content, setContent] = useState(blogPost.content);

//this code (direct call) was deleted from return:
(
        <View>
            <Text> Edit Title: </Text>
            <TextInput value={title} onChangeText= {(newTitle) => setTitle(newTitle) } />
        </View>
    );    
*/