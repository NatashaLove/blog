import React, { useState } from 'react';//adding useState helper function to rerender app with new data

const BlogContext = React.createContext();

//create blog post provider
//export in order to make use of it inside of app.js
//export const (not default) - because exporting it into the same file - 
//into BlogContext - and then exporting Blog context as default 
export const BlogProvider = ( {children})=> {
// created component which can accept another component as {children}- argument - it is <App> wrapped in this {children} arg   

const [blogPosts, setBlogPosts] = useState([]);//when application first starts up we have an empty array because by defaultthere won't be any blog posts 
//this setter completely updates this list blogPosts
// after the state variable - make a new function called addblogposts.
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
*///but rather than generating this static list of blog posts-better use a STATE var 
//rerender app after the data was changed - change of STATE- for that we need a state variable-with every new blog post added - it'll rerender the app

//.Provider accepts information - so must be with the context obj;
//it's a source of information -and the information we provide it with -
//is going to be available to all of our child components. (not having to pass it through all screens down)
//to share some information from the very top level component down to a nested child-
//- in blogcontext.provider add a prop called 'value' (so any child can extract the 'valie'):
//value can be= int, 'string'. [arr]- we have a list of blogposts Flatlist)
//value -not just blogPost arr, it should be an object with callback func, which rerenders the app-
//so we need two sets of curly braces to insert an object with props like data and func: (addBlogPost: addBlogPost = addBlogPost) /key:value /
return <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
    {children}    
</BlogContext.Provider>
};
//{children} is a var - initialized in App.js as <App>
//it means all wrapped stack navigator (in custom "app" component)
// is directly accessed by the blogcontext

export default BlogContext;
//export default it - so other children could access it and the data in it directly
