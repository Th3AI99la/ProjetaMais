// Em screens/Emergency.js
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/EmergencyStyles';

export default function Emergency() {
  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`).catch(() => {
      Alert.alert("Erro", "Não foi possível realizar a chamada.");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fef2f2' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.callButton} onPress={() => handleCall('190')}>
            <Feather name="shield" size={40} color="white" style={styles.callButtonIcon} />
            <View style={styles.callButtonTextContainer}>
              <Text style={styles.callButtonTitle}>Ligar 190 - Polícia Militar</Text>
              <Text style={styles.callButtonDescription}>Risco iminente, agressão em andamento ou ameaça grave.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.callButton} onPress={() => handleCall('192')}>
            <Feather name="plus-circle" size={40} color="white" style={styles.callButtonIcon} />
            <View style={styles.callButtonTextContainer}>
              <Text style={styles.callButtonTitle}>Ligar 192 - SAMU</Text>
              <Text style={styles.callButtonDescription}>Se a vítima estiver ferida ou em estado grave de saúde.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}