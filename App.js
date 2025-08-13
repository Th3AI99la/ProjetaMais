// Em App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Navigation from './navigation/Navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}