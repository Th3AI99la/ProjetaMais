import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Linking, Alert, Animated, Vibration } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/EmergencyStyles';

export default function Emergency() {
  const pressAnim190 = useRef(new Animated.Value(1)).current;
  const pressAnim192 = useRef(new Animated.Value(1)).current;

  const handlePressAnimation = (animValue, toValue) => {
    Animated.spring(animValue, {
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const handleCall = (number) => {
    Vibration.vibrate(100);
    Alert.alert(
      `Ligar para ${number}`,
      "Você tem certeza que deseja iniciar a chamada de emergência?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sim, Ligar", 
          onPress: () => Linking.openURL(`tel:${number}`).catch(() => {
            Alert.alert("Erro", "Não foi possível realizar a chamada.");
          })
        }
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fef2f2' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Animated.View style={{ transform: [{ scale: pressAnim190 }] }}>
            <TouchableOpacity 
              style={styles.callButton} 
              onPress={() => handleCall('190')}
              onPressIn={() => handlePressAnimation(pressAnim190, 0.95)}
              onPressOut={() => handlePressAnimation(pressAnim190, 1)}
              activeOpacity={0.9}
            >
              <Feather name="shield" size={40} color="white" style={styles.callButtonIcon} />
              <View style={styles.callButtonTextContainer}>
                <Text style={styles.callButtonTitle}>Ligar 190 - Polícia Militar</Text>
                <Text style={styles.callButtonDescription}>Risco iminente, agressão em andamento ou ameaça grave.</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: pressAnim192 }] }}>
            <TouchableOpacity 
              style={styles.callButton} 
              onPress={() => handleCall('192')}
              onPressIn={() => handlePressAnimation(pressAnim192, 0.95)}
              onPressOut={() => handlePressAnimation(pressAnim192, 1)}
              activeOpacity={0.9}
            >
              <Feather name="plus-circle" size={40} color="white" style={styles.callButtonIcon} />
              <View style={styles.callButtonTextContainer}>
                <Text style={styles.callButtonTitle}>Ligar 192 - SAMU</Text>
                <Text style={styles.callButtonDescription}>Se a vítima estiver ferida ou em estado grave de saúde.</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}