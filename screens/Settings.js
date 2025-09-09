// Em screens/Settings.js
import React from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import styles from '../styles/SettingsStyles';
import Header from '../components/Header';

// Dados para a nossa lista
const SETTINGS_OPTIONS = [
  { id: 'notifications', title: 'Notificações', icon: 'bell', type: 'switch' },
  { id: 'privacy', title: 'Privacidade', icon: 'lock', type: 'navigate' },
];

export default function Settings() {
  const navigation = useNavigation();
  const appVersion = Constants.expoConfig.version;
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <Feather name={item.icon} size={22} color="#BB86FC" />
        <Text style={styles.listItemText}>{item.title}</Text>
      </View>
      
      {item.type === 'switch' ? (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setNotificationsEnabled(previousState => !previousState)}
          value={notificationsEnabled}
        />
      ) : (
        <Feather name="chevron-right" size={22} color="#9E9E9E" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Usando o Header com o ícone de "voltar" */}
      <Header 
        title="Configurações" 
        onLeftPress={() => navigation.goBack()} 
        leftIconName="arrow-left" // <-- Dizemos ao Header para usar o ícone de seta
        backgroundColor="#333333"
      />
      
      <FlatList
        data={SETTINGS_OPTIONS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.content}
      />

      <View style={styles.footer}>
        <Text style={styles.versionText}>Projeta+ Versão {appVersion}</Text>
      </View>
    </View>
  );
}