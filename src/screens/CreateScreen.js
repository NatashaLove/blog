import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';// import can get access to our context
import BlogPostForm from '../components/BlogPostForm';

//need navigation prop ou of all - using navigate func to other screens
const CreateScreen = ({ navigation})=> {

//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
  const {addBlogPost} = useContext(Context);

//!!! to customize the form - 1st! here inside <BlogPostForm /> -we need to formulate -
//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
  return <BlogPostForm onSubmit={(title, content)=> {
//anytime the user submits the form -the blogpostform invokes this onSubmit prop-
//(it's custom - should be in the form component as a var also..)-

//Inside this callback function: 1.call addblogpost ;
//-2.pass in the new title and content, that the user just created;
//3.pass in a callback as a 3d arg -to navigate back to the index screen using that navigation prop:
    addBlogPost(title, content, () => navigation.navigate('Index'));
  }} />;
//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   

};

const styles = StyleSheet.create({

    
});

export default CreateScreen;

/*
this code was transferred from inside of the component to blogpostform:
    //need two different pieces of state one to handle the title entry and one to handle the content entry:
    const [title, setTitle]= useState('');
    const[content, setContent] = useState('');
    */
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