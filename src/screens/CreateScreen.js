import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';// import can get access to our context
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation})=> {
/*
this code was transferred to blogpostform:
    //need two different pieces of state one to handle the title entry and one to handle the content entry:
    const [title, setTitle]= useState('');
    const[content, setContent] = useState('');
    */
//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
  const {addBlogPost} = useContext(Context);

  return <BlogPostForm />
    
};

const styles = StyleSheet.create({

    
});

export default CreateScreen;

//this return statement from the createscreen component - was transferred to the blogpostform-because it's a separate component now:
/*
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
                title="Add Blog Post" 
                onPress={()=> {
                    addBlogPost(title, content, ()=> {
                        navigation.navigate('Index');
//better pass that navigate call inside of a callback to addblogpost as a third argument-
//it gets a callback function with the navigate call inside. 
//!!!above is a very valuable solution for handling any kind of saving of data to an outside API                       
                    });
// navigation.navigate('Index');-better not to immediately put it after-
// in case the above function is more complex and then this code may cause error
                }}
// we call addblogpost with args: title and content Whenever user taps on the button 
                />
        </View>
    );
*/