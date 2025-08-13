// Em screens/Home.js

import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/HomeStyles';
import useHomeAnimation from '../hooks/useHomeAnimation';

export default function Home() { 
  const navigation = useNavigation(); 
  const { titleAnim, button1Anim, button2Anim, button3Anim } = useHomeAnimation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* O Header foi removido daqui */}

      <Animated.View style={[styles.titleContainer, titleAnim]}>
        <Text style={styles.title}>Projeta+</Text>
        <Text style={styles.subtitle}>Sua segurança em primeiro lugar</Text>
      </Animated.View>

      <Animated.View style={[{ width: '100%' }, button1Anim]}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonEmergency]}
          onPress={() => navigation.navigate('Emergência')}
        >
          <Feather name="alert-triangle" size={22} color="white" />
          <Text style={[styles.buttonText, styles.textWhite]}>Emergência</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[{ width: '100%' }, button2Anim]}>
        <TouchableOpacity style={[styles.button, styles.buttonAnonymous]}>
          <Feather name="shield" size={22} color="white" />
          <Text style={[styles.buttonText, styles.textWhite]}>Anônimo</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[{ width: '100%' }, button3Anim]}>
        <TouchableOpacity
          style={[styles.button, styles.buttonLogin]}
          onPress={() => navigation.navigate('Login')}
        >
          <Feather name="log-in" size={22} color="#1d3557" />
          <Text style={[styles.buttonText, styles.textBlack]}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}