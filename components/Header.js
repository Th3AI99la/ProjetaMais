// Em components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // 1. IMPORTE o useNavigation

export default function Header({ title, onMenuPress, backgroundColor = '#d90429' }) {
  const navigation = useNavigation(); // 2. USE o hook de navegação

  const handleProfilePress = () => {
    navigation.navigate('Profile'); // 3. NAVEGUE para a tela 'Profile'
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
        <Feather name="menu" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/* 4. AÇÃO DE CLIQUE agora está definida aqui dentro */}
      <TouchableOpacity onPress={handleProfilePress} style={styles.iconButton}>
        <Feather name="user" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  iconButton: {
    padding: 5,
  },
});