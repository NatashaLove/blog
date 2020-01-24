//import { createAppContainer, createStackNavigator } from 'react-navigation';
//changed because of updated and more downloads 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

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

export default createAppContainer(navigator);