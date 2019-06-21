import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './routerStack/HomeRoute';
import StoreFrontScreen from '../components/StoreFront';
import ListScreen from './routerStack/ListRoute';
import MapScreen from './routerStack/MapRoute';
import PromotionScreen from '../components/PromotionFrontI';
import PromotionScreenII from '../components/PromotionFrontII';

const HomeRouter = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    StoreFont: {
      screen: StoreFrontScreen,
    },
    List: {
      screen: ListScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Promotion: {
      screen: PromotionScreen,
    },
    PromotionI: {
      screen: PromotionScreenII,
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
