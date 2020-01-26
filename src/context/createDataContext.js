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

    const Provider = ({children}) => {
        const[state, dispatch] = useReducer(reducer, initialState);

        return <Context.Provider value={{state}}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
};
//we created a reusable function- to automate the process of setting up context and the provider