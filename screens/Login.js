import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/loginStyles';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeta+</Text>

      <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#000" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#000" secureTextEntry />

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textButtonLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.textSocial}>Login com Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.textSocial}>Login com Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.createAccount}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
