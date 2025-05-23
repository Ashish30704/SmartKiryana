import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../redux/store';
import EnterNewProduct from '../screens/admin/EnterNewProduct';
import BottomTabs from './BottomTabs';
import ChooseItems from '../screens/admin/ChooseItems';
import UserProfile from '../screens/UserProfile';
import MaterialTabs from './MaterialTabs';
import ItemDetails from '../screens/ItemDetails';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Material" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Material" component={MaterialTabs} />
          <Stack.Screen name="Details" component={ItemDetails} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Products" component={EnterNewProduct} />
          <Stack.Screen name="Choose" component={ChooseItems} />
          <Stack.Screen name="Profile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyStack;
