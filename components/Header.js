// Em components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({ title, onMenuPress, onProfilePress, backgroundColor = '#d90429' }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
        <Feather name="menu" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
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