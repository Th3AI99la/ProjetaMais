// Em screens/ForgotPassword.js

import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StatusBar,
  KeyboardAvoidingView, // <-- Este componente fará o trabalho
  Platform,
  Animated 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/ForgotPasswordStyles';
import useForgotPasswordForm from '../hooks/useForgotPasswordForm';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const { phone, email, isEmailValid, errorOpacity, handlePhoneChange, handleEmailChange } = useForgotPasswordForm();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      {/* O ScrollView foi removido daqui */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Recuperar Senha</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Recuperar com Celular</Text>
        <View style={styles.inputContainer}>
          <Feather name="smartphone" size={20} color="rgba(255, 255, 255, 0.7)" />
          <TextInput
            style={styles.input}
            placeholder="+55 (XX) XXXXX-XXXX"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            keyboardType="numeric"
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={19}
          />
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>OU</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.label}>Recuperar com E-mail</Text>
        <View style={styles.inputContainer}>
          <Feather 
            name="mail" 
            size={20} 
            color={'rgba(255, 255, 255, 0.7)'} 
          />
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail cadastrado"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        
        <Animated.View style={[styles.errorContainer, { opacity: errorOpacity }]}>
          <Feather name="alert-circle" size={16} color="#e63946" />
          <Text style={styles.errorMessage}>
            Insira um e-mail válido
          </Text>
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  );
}