//import React, { useReducer } from 'react';// don't need now because not using jsx in this file..
import createDataContext from './createDataContext';
//adding useState helper function to rerender app with new data
//but going to use hook - useReducer instead- the key to the reducer function - 
// no matter what it always returns a new value to be used as our state object
/*
import createDataContext from './createDataContext';// don't need it specificallyy now after created and imported the createDataContext(automated)
*/
//const BlogContext = React.createContext();//don't need now - will be created automatically
//reducer has 2 args: 1. state, 2. action and uses switch statement to do the action clicked on:
const blogReducer = (state, action)=>{
//the difference with reducer is that we can very easily add additional case statements to switch and can modify our list of blog posts in different ways:
    switch (action.type) {
        case 'add_blogpost':
//similar codes described below in comments from useState
            return [
                ...state,
                { 
//we should add in an I.D. property-we can use this I.D. to figure out exactly what blog post a user is trying to delete.
                    id: Math.floor (Math.random()*99999),//randomly generates the I.D
                    title: `Blog Post #${state.length + 1}`
                }
            ];//2 arg- action

//filter function is going to iterate through all the different elements inside of our state array and then run some child function 
//+that we'll pass in, if we return a true value from this.
//Then the given element will be returned inside of an overall new overall array.
//-If we return false then it's going to be rejected.
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !==action.payload);
//blogPost obj is going to be returned and included into a new arr, because it's not equal (by id) to the one to be deleted

        default:
            return state;
    }
};

//create a new temp helper func 'addblogpost' -I'm gonna pass this helper function down into my value prop -
//so that my index screen can very easily dispatch in action to add in a new blog post
//we must make sure that this add blog post function gets access to dispatch from another file (createdatacontext)-
//-that's how we change our state- make sure that we call this function  with The (Dispatch)
const addBlogPost = dispatch => {
    return ()=>{
    dispatch({ type: 'add_blogpost'});
    };
//anytime someone calls add blog post we're going to dispatch an action object, which is 'add_blogpost' from switch
//it describes how we want to change our data.
};
//to add a new way to change state of object (like delete/edit post):
//-need to 1.add a new func, which will call dispatch func;2. add a new case
const deleteBlogPost = dispatch => {
    return (id) =>{
        dispatch ({ type: 'delete_blogpost', payload: id })//dispatch has 2 arg : type and payload
    }
}
//new export statement: destructure out context and provider from create datacontext func:
export const { Context, Provider}= createDataContext(
//all 3 args from the function in the file: 1.reducer, 2.object that contains all the different actions that we want to have:
//In that case that's gonna be our addblogpost function, 3.initial default state value =an empty array :
    blogReducer, 
    { addBlogPost, deleteBlogPost}, 
    []
    )


/*
 //!!!pasted addBlogPost func outside the function : 'export const BlogProvider = ( {children})=> ' and deleted the entire Blogprovider,
 because everything inside of here is always going to look almost identical no matter what type of resource we are dealing with!!!

//create blog post provider
//export in order to make use of it inside of app.js
//export const (not default) - because exporting it into the same file - 
//into BlogContext - and then exporting Blog context as default 
-------

export const BlogProvider = ( {children})=> {
// created component which can accept another component as {children}- argument - it is <App> wrapped in this {children} arg   

const [blogPosts, dispatch] = useReducer(blogReducer, []);//useReducer func: 1arg-reducer itself created earlier, 2 arg- initial state of obj - empty arr
//when application first starts up we have an empty array because by default there won't be any blog posts 

//setBlogPosts -this setter completely updates this list blogPosts- but since now using hook useReducer - changed to 'dispatch' func,
//also could change 'blogPost' by 'state'(for reducer) - but not necessary, better to remember that it's a list of posts. 
/*
    // after the state variable - make a new function called addblogposts. / deleted it all because don't use useState, but useReducer func.
    //the goal this function is to use our setter to add in a new blog post to our blog post variable array:
    const addBlogPost = () => {
    //to update a state variable -we're always going to call the setter:
    // never going to modify the original value of arr blogPosts, so by adding in setBlogPosts([]) a new array -
    //it creates a brand new array from scratch and not changing the original blog post variable 
    //all the existing blog posts are added into this new Array :
    setBlogPosts([ ...blogPosts, {title:`Blog Post #${blogPosts.length+1}`}]);//1st arg -this code means: create a new array and inside that new Array take all the current blog posts we have and add them into the Arr.
    }//2nd arg -new blog post = new object: to have a property title - but changing blog title with every new post:
    //So going to make the title out of a template string: so use `back ticks` and make the title "blog post #" 
    //and to print out the number of this new blog posts=its index - to use it-  place dollar sign $, curly braces{} and inside - the length of blog posts+1.

//creating arr of blog posts - later will use it as 'value' in blogCobtext.provider:
/*const blogPosts = [
    {title: 'Blog Post #1'},
    {title: 'Blog Post #2'}
];
//but rather than generating this static list of blog posts-better use a STATE var 
//rerender app after the data was changed - change of STATE- for that we need a state variable-with every new blog post added - it'll rerender the app

//.Provider accepts information - so must be with the context obj;
//it's a source of information -and the information we provide it with -
//is going to be available to all of our child components. (not having to pass it through all screens down)
//to share some information from the very top level component down to a nested child-
//- in blogcontext.provider add a prop called 'value' (so any child can extract the 'valie'):
//value can be= int, 'string'. [arr]- we have a list of blogposts Flatlist)
//value -not just blogPost arr, it should be an object with callback func, which rerenders the app-
//so we need two sets of curly braces to insert an object with props like data and func: (addBlogPost: addBlogPost = addBlogPost) /key:value /-with reducer-don't need useState and func: addBlogPost /erased from value/
//because we need to use 'dispatch' func with reducer hook:
return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}    
</BlogContext.Provider>
};
//{children} is a var - initialized in App.js as <App>
//it means all wrapped stack navigator (in custom "app" component)
// is directly accessed by the blogcontext

export default BlogContext;

//export default it - so other children could access it and the data in it directly
// we don't really need to export our blog context anymore because that's not even created inside of here - deleted..
*/