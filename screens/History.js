// Em screens/History.js
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/HistoryStyles';

// A prop 'navigation' não é mais necessária aqui, pois o Header agora é gerenciado pelo Navegador
export default function History() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* O Header foi removido daqui. O Navigation.js já o adiciona. */}
      
      <View style={styles.content}>
        <Feather name="clock" size={60} color="rgba(255, 255, 255, 0.5)" style={styles.icon} />
        <Text style={styles.title}>Nenhum Histórico</Text>
        <Text style={styles.subtitle}>Suas denúncias aparecerão aqui quando forem enviadas.</Text>
      </View>
    </View>
  );
}