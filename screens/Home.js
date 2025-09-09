// Em screens/Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/HomeStyles';
import useHomeAnimation from '../hooks/useHomeAnimation';
import Header from '../components/Header';

export default function Home({ navigation }) {
  const { titleAnim, button1Anim, button2Anim } = useHomeAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <Header title="Início" onMenuPress={() => navigation.openDrawer()} backgroundColor="#1d3557" />
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
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
            <TouchableOpacity 
              style={[styles.button, styles.buttonAnonymous]}
              onPress={() => navigation.navigate('Anônimo')}
            >
              <Feather name="shield" size={22} color="white" />
              <Text style={[styles.buttonText, styles.textWhite]}>Anônimo</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}