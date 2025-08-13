// Em screens/CreateAccount.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/CreateAccountStyles';
import useCreateAccountForm from '../hooks/useCreateAccountForm';

export default function CreateAccount() {
  const navigation = useNavigation();
  const {
    name, handleNameChange,
    lastName, handleLastNameChange,
    birthDate, handleBirthDateChange,
    cpf, handleCpfChange,
    email, handleEmailChange, isEmailValid,
    password, setPassword,
    confirmPassword, setConfirmPassword, doPasswordsMatch
  } = useCreateAccountForm();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainerContent} keyboardShouldPersistTaps="handled">
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Criar Conta</Text>
        </View>

        {/* Nome */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="rgba(255, 255, 255, 0.7)" />
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="rgba(255, 255, 255, 0.7)" value={name} onChangeText={handleNameChange} />
          </View>
        </View>

        {/* Sobrenome */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="users" size={20} color="rgba(255, 255, 255, 0.7)" />
            <TextInput style={styles.input} placeholder="Sobrenome" placeholderTextColor="rgba(255, 255, 255, 0.7)" value={lastName} onChangeText={handleLastNameChange} />
          </View>
        </View>
        
        {/* Data de Nascimento */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="calendar" size={20} color="rgba(255, 255, 255, 0.7)" />
            <TextInput style={styles.input} placeholder="Data de Nascimento" placeholderTextColor="rgba(255, 255, 255, 0.7)" keyboardType="numeric" value={birthDate} onChangeText={handleBirthDateChange} maxLength={10} />
          </View>
        </View>

        {/* CPF */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="file-text" size={20} color="rgba(255, 255, 255, 0.7)" />
            <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="rgba(255, 255, 255, 0.7)" keyboardType="numeric" value={cpf} onChangeText={handleCpfChange} maxLength={14} />
          </View>
        </View>

        {/* E-mail */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="mail" size={20} color={isEmailValid ? 'rgba(255, 255, 255, 0.7)' : '#e63946'} />
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="rgba(255, 255, 255, 0.7)" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={handleEmailChange} />
          </View>
          {!isEmailValid && <View style={styles.errorContainer}><Feather name="alert-circle" size={16} color="#e63946" /><Text style={styles.errorMessage}>Insira um e-mail válido</Text></View>}
        </View>
        
        {/* Senha */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="rgba(255, 255, 255, 0.7)" />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="rgba(255, 255, 255, 0.7)" secureTextEntry value={password} onChangeText={setPassword} />
          </View>
        </View>

        {/* Confirmar Senha */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color={doPasswordsMatch ? 'rgba(255, 255, 255, 0.7)' : '#e63946'} />
            <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="rgba(255, 255, 255, 0.7)" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
          </View>
          {!doPasswordsMatch && <View style={styles.errorContainer}><Feather name="alert-circle" size={16} color="#e63946" /><Text style={styles.errorMessage}>As senhas não coincidem</Text></View>}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}