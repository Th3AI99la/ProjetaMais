// Em components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header({ title, onLeftPress, leftIconName = 'menu', backgroundColor = '#d90429' }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); 

  return (
    // O container principal aplica a cor de fundo e o espaçamento dinâmico no topo
    <View style={[styles.container, { 
      backgroundColor, 
      paddingTop: insets.top,
      height: 60 + insets.top,
    }]}>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
        <Feather name={leftIconName} size={28} color="white" />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
        <Feather name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  title: { 
    color: 'white', 
    fontSize: 22, 
    fontFamily: 'Poppins-Bold' 
  },
  iconButton: { 
    padding: 5 
  },
});