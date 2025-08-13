import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'; 
import styles from '../styles/HistoryStyles';

export default function History({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Histórico" onMenuPress={() => navigation.openDrawer()} />
      <View style={styles.content}>
        <Text style={styles.text}>Tela de Histórico de Denúncias</Text>
      </View>
    </View>
  );
}