import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import BottomNavBar from './BottomNavigation';
import TaskDetails from '../screens/TaskDetailsScreen';
import Empty from './../screens/Empty';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
      <Stack.Screen name="Empty" component={Empty} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
