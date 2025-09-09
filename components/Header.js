// Em components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Nossas novas propriedades: onLeftPress e leftIconName
export default function Header({ title, onLeftPress, leftIconName = 'menu', backgroundColor = '#d90429' }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Botão da Esquerda (Menu ou Voltar) */}
      <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
        <Feather name={leftIconName} size={28} color="white" />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>

      {/* Ícone de Configurações */}
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
        <Feather name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', height: 100, paddingTop: 40, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
  title: { color: 'white', fontSize: 22, fontFamily: 'Poppins-Bold' },
  iconButton: { padding: 5 },
});