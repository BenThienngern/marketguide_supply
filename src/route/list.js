import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListScreen from './routerStack/ListRoute';
import StoreFrontScreen from '../components/StoreFront';

const ListRouter = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    StoreFont: {
      screen: StoreFrontScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(ListRouter);
