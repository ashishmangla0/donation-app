import './gesture-handler';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
   
  );
}