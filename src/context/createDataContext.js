//small letter (create)- because we are going to export a plain function and label it with lowercase(filee=function)
//this code should automate the code from BlogContext
import React, {useReducer} from 'react';

//1.first thing we'd have to change- the reducer function itself.
//So when we call this function- it'll create a new data context for us automatically 
//1st arg -our 'reducer' function;
//2. second argument - 'actions': object that has all these callback functions ,
//-we want to make available to our child components so they can somehow dispatch an action and change our state.
//3.we had initial state of an empty array[] but there are other types of initial state ,
//-like empty object or a number or a string etc..
//3.So the last argument to our createdatacontext function will be some initial state:

export default (reducer, actions, initialState)=> {
    const Context = React.createContext();

    const Provider = ({children}) => { //it is <App> wrapped in this {children} arg   

        const[state, dispatch] = useReducer(reducer, initialState);

//actions === { addBlogPOst: (dispatch) => {return ()=>{}}}
/*
we're going to loop through that actions object for every key-add a blog post 
-we're gonna take that function and call it with the dispatch argument /addBlogPOst: (dispatch)/ 
and that's going to give us back that function 'return ()=>{}'.
And we're going to pass it on down into our value prop right here below:
And it's essentially going to let all of our child components make changes to our state object..
*/

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);//add, edit, delete..
            }


        return <Context.Provider value={{state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
};
//we created a reusable function- to automate the process of setting up context and the provider