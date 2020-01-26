import React from 'react';

const BlogContext = React.createContext();

//create blog post provider
//export in order to make use of it inside of app.js
//export const (not default) - because exporting it into the same file - 
//into BlogContext - and then exporting Blog context as default 
export const BlogProvider = ( {children})=> {
// created component which can accept another component as {children}- argument    

//creating arr of blog posts - later will use it as 'value' n blogCobtext.provider:
const blogPosts = [
    {title: 'Blog Post #1'},
    {title: 'Blog Post #2'}
];

//.Provider accepts information - so must be with the context obj;
//it's a source of information -and the information we provide it with -
//is going to be available to all of our child components. (not having to pass it through all screens down)
//to share some information from the very top level component down to a nested child-
//- in blogcontext.provider add a prop called 'value' (so any child can extract the 'valie'):
//value can be= int, 'string'. [arr]- we have a list of blogposts Flatlist)
return <BlogContext.Provider value={blogPosts}>
    {children}    
</BlogContext.Provider>
};
//{children} is a var - initialized in App.js as <App>
//it means all wrapped stack navigator (in custom "app" component)
// is directly accessed by the blogcontext

export default BlogContext;
//export default it - so other children could access it and the data in it directly
