// Em components/CustomDrawerContent.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; // <-- ESTA LINHA ESTAVA FALTANDO

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
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#1d2362'}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Projeta+</Text>
        </View>
        <View style={{backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogout} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="log-out" size={22} />
            <Text style={styles.footerText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, paddingBottom: 10 },
  headerTitle: { color: 'white', fontSize: 22, fontFamily: 'Poppins-Bold' },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' },
  footerText: { fontSize: 16, fontFamily: 'Poppins-Regular', marginLeft: 15 }
});