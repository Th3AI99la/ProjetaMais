// Em components/CustomDrawerContent.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Você tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim, Sair", onPress: () => console.log("Usuário deslogado") }
      ]
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor: '#1d3557', flex: 1}}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Projeta+</Text>
        </View>

        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          {/* Este View é a chave para o alinhamento */}
          <View style={styles.logoutContent}>
            <Feather name="log-out" size={22} color="#fff"/>
            <Text style={styles.logoutText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { 
    padding: 20, 
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: { 
    color: 'white', 
    fontSize: 28,
    fontFamily: 'Poppins-Bold' 
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  footer: { 
    padding: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#4a5a73',
    backgroundColor: '#1d3557'
  },
  logoutButton: {
    paddingVertical: 10,
  },
  logoutContent: {
    flexDirection: 'row', // <-- GARANTE O ALINHAMENTO HORIZONTAL
    alignItems: 'center',
  },
  logoutText: { 
    fontSize: 16, 
    fontFamily: 'Poppins-Regular', 
    marginLeft: 15, // <-- GARANTE O ESPAÇAMENTO ENTRE ÍCONE E TEXTO
    color: 'white',
  }
});