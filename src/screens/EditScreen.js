import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet } from 'react-native';//TextInput for the user to input text
import { Context } from '../context/BlogContext';// import can get access to our context
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation})=> {
    const { state } =useContext(Context);
//iterate through arr blogpost- all the posts and find one with the same I.D. as navigation get param I.D
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    return <BlogPostForm />
    
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