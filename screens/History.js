import React from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/HistoryStyles';

// Dados de exemplo (mock) para visualizarmos o layout
const MOCK_HISTORY = [
  { id: '1', type: 'Violência Física', date: '10 de Agosto de 2025' },
  { id: '2', type: 'Assédio', date: '05 de Julho de 2025' },
  { id: '3', type: 'Violência Psicológica', date: '21 de Junho de 2025' },
];

// Componente para renderizar a tela vazia
const EmptyHistory = () => (
  <View style={styles.emptyContainer}>
    <Feather name="clock" size={60} color="rgba(255, 255, 255, 0.2)" style={styles.emptyIcon} />
    <Text style={styles.emptyTitle}>Nenhum Histórico</Text>
    <Text style={styles.emptySubtitle}>Suas denúncias aparecerão aqui quando forem enviadas.</Text>
  </View>
);

// Componente para renderizar cada item da lista
const HistoryItem = ({ item }) => (
  <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemIconContainer}>
      <Feather name="alert-triangle" size={24} color="#BB86FC" />
    </View>
    <View style={styles.listItemTextContainer}>
      <Text style={styles.listItemTitle}>{item.type}</Text>
      <Text style={styles.listItemDate}>{item.date}</Text>
    </View>
    <Feather name="chevron-right" size={24} color="#9E9E9E" />
  </TouchableOpacity>
);

export default function History() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* O Header é inserido pelo Navigation.js */}
      
      <FlatList
        data={MOCK_HISTORY} // Passe os dados aqui. Se quiser ver a tela vazia, passe um array vazio: []
        renderItem={HistoryItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyHistory}
      />
    </View>
  );
}