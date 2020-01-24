//import { createAppContainer, createStackNavigator } from 'react-navigation';
//changed because of updated and more downloads 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react'; // must import it always when using jsx <>

//create navigator (between screens)
//it must have 2 args
const navigator = createStackNavigator(
  {
//1.is our route configuration object so we list out all the possible screens that a user can navigate to
    Index: IndexScreen
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
  return <App />;
}