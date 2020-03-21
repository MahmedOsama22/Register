import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Important from '../screens/important';
import TaskDetail from '../screens/taskDetail';
// import TodoItem from '../screens/todoitem';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'ToDoApp'
      //headerStyle: { backgroundColor: '#BABEC0' }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Omar`s ToDo',
      headerStyle: { backgroundColor: 'skyblue' }
    }
  },
  Important: {
    screen: Important
  },
  TaskDetail: {
    screen: TaskDetail
  }
  // TodoItem: {
  //   screen: TodoItem
  // }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'skyblue' }
  }
});
export default createAppContainer(HomeStack);
