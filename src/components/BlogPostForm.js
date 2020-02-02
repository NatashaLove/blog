import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
//TextInput for the user to input text

//should receive this onSubmit prop (from the CreateScreen) at the top of the function-
// destructure onSubmit out of our props object (it becomes one of its props- so we can use it): 
const BlogPostForm = ( {onSubmit, initialValues} )=> {
//need two different pieces of state one to handle the title entry and one to handle the content entry;
// we need to tell those text inputs what their values are- 
//We need to customize those initial starting values that we're passing:
    const [title, setTitle]= useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content);
//added var initialValues for editscreen- but this var is undefined for CreateScreen-(doesn't provide it)
    const id = useState(initialValues.id);
  
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
            <Button 
                title="Save Blog Post" 
                onPress={()=> onSubmit(title, content, id)}
//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   
//add on new prop - onPress and inside of it - run our onSubmit callback-
//- that was passed in as a prop to blogpostform in CreateScreen.

              //  onPress={()=> {} }
             />
        </View>
    );
};

//smth.smth = {} - means "equal to an object"

//defaultProps property right here can be used to give our component some default property values (if another component doesn't provide)-
//react is going to automatically check if our component has this defaultProps property- if it does it's just going to use these props.
//if we ever show this component <BlogPostForm> and choose not to pass in some given prop,
// this object ( BlogPostForm.defaultProps = {}; )- will be used to fill in some default values;
// inside we can put in initialValues and set that to an object that has a 'title'= empty string and content = empty string as well:
BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: '',
        id: ''
    }
};
//whenever we show blogpostform from the createscreen initialValues.title =
//=will be an empty string and content will be an empty string.
//(solving error with extra vars from other components like this with default values)

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

export default BlogPostForm;

/* cut out direct call onPress from above in the Button/will be replaced by some func/:
addBlogPost(title, content, ()=> {
                        navigation.navigate('Index');
//better pass that navigate call inside of a callback to addblogpost as a third argument-
//it gets a callback function with the navigate call inside. 
//!!!above is a very valuable solution for handling any kind of saving of data to an outside API                       
                    });
// navigation.navigate('Index');-better not to immediately put it after-
// in case the above function is more complex and then this code may cause error
*/
// we call addblogpost with args: title and content Whenever user taps on the button 
   