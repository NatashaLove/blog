import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
//TextInput for the user to input text

const BlogPostForm = ()=> {
//need two different pieces of state one to handle the title entry and one to handle the content entry;
// we need to tell those text inputs what their values are- 
//We need to customize those initial starting values that we're passing:
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
            <Button 
                title="Save Blog Post" 
              //  onPress={()=> {} }
             />
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
   