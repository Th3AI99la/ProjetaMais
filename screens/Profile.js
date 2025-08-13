// Em screens/Profile.js
import React from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/ProfileStyles';
import Header from '../components/Header';

// Dados de exemplo para as opções do menu
const menuOptions = [
  { key: '1', title: 'Editar Perfil', icon: 'edit-2' },
  { key: '2', title: 'Mudar Senha', icon: 'lock' },
  { key: '3', title: 'Notificações', icon: 'bell' },
  { key: '4', title: 'Privacidade', icon: 'shield' },
];

export default function Profile() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <Feather name={item.icon} size={22} color="#BB86FC" />
        <Text style={styles.listItemText}>{item.title}</Text>
      </View>
      <Feather name="chevron-right" size={22} color="#9E9E9E" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header 
        title="Perfil" 
        onMenuPress={() => navigation.goBack()} // O ícone de menu agora funciona como "Voltar"
        backgroundColor="#333333" 
      />

      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
            <Feather name="user" size={50} color="#9E9E9E"/>
        </View>
        <Text style={styles.userName}>Lucia</Text>
        <Text style={styles.userEmail}>Lucia@email.com</Text>
      </View>

      <FlatList
        data={menuOptions}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}