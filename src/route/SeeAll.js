import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './routerStack/HomeRoute';
import ListScreen from './routerStack/ListRoute';

const HomeRouter = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    List: {
      screen: ListScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(HomeRouter);
