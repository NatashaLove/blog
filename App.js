//import { createAppContainer, createStackNavigator } from 'react-navigation';
//changed because of updated and more downloads 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react'; // must import it always when using jsx <>
import { Provider } from './src/context/BlogContext';// import in {}, because it's not a default export, but a variable to export
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

//create navigator (between screens)
//it must have 2 args
const navigator = createStackNavigator(
  {
//1.is our route configuration object so we list out all the possible screens that a user can navigate to
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }, 
  {
//2.configuration options specifically for our stack Navigator: 
    initialRouteName: 'Index',
    defaultNavigationOptions: {
//this title is set inside of the header.
      title: 'Blogs'
    }
  }
);
// createappcontainer takes in our navigator and returns a very simple react component 
//that shows some very particular component on the screen (like index screen).
//export default createAppContainer(navigator);

//instead of exporting the container with navigator - we assign the results of that function to a variable 'app'.
const App = createAppContainer(navigator);

//export default my own custom component -simple function that's going to return app:
export default () =>{
  //passing <app> as children to <Provider>
  return <Provider>
    <App />
  </Provider>
  };
//{children} is a var declared in BlogContext and - initialized in App.js as <App>
//it means all wrapped stack navigator (in custom "app" component)
// is directly accessed by the blogcontext