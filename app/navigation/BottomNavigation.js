import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IonsIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ConversationScreen from '../screens/CoversationScreen';
import PlusOption from '../components/PlusIcon';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateTask from '../screens/CreateTask';

function BottomNavBar(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Homepage') {
            iconName = focused ? 'home' : 'home-outline';
            return <IonsIcon name={iconName} size={size} color={color} />;
          }

          if (route.name === 'Conversation') {
            iconName = focused ? 'message' : 'message-outline';
            return <MCIcon name={iconName} size={size} color={color} />;
          }

          if (route.name === 'MessageScreen') {
            iconName = focused ? 'calendar-month' : 'calendar-month-outline';
            return <MCIcon name={iconName} size={size} color={color} />;
          }

          if (route.name === 'ProfileScreen') {
            iconName = focused ? 'account-circle' : 'notifications-none';
            return <MCIcon name="account-circle" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Homepage" component={HomeScreen} />
      <Tab.Screen name="MessageScreen" component={MessageScreen} />
      <Tab.Screen
        name="CreateTask"
        component={CreateTask}
        options={{tabBarButton: () => <PlusOption />}}
      />
      <Tab.Screen name="Conversation" component={ConversationScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default BottomNavBar;
