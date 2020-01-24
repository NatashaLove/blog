import React from 'react';

const BlogContext = React.createContext();

//create blog post provider
//export in order to make use of it inside of app.js
//export const (not default) - because exporting it into the same file - 
//into BlogContext - and then exporting Blog context as default 
export const BlogProvider = ( {children})=> {
// created component which can accept another component as {children}- argument    
return <BlogContext.Provider>
    {children}    
</BlogContext.Provider>
};
//{children} is a var - initialized in App.js as <App>
//it means all wrapped stack navigator (in custom "app" component)
// is directly accessed by the blogcontext