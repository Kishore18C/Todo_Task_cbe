/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AppNavigation from './app/navigation/AppNavigation';


function App(): JSX.Element {
 

  return (
  <NavigationContainer>
    <AppNavigation/>
  </NavigationContainer>
  );
}


export default App;
