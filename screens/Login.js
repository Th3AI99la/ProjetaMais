import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  KeyboardAvoidingView, 
  Platform,
  Animated 
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import styles from '../styles/loginStyles';
import useLoginAnimation from  '../hooks/useLoginAnimation'; 

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const { fadeAnim, slideAnim } = useLoginAnimation();


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Projeta+</Text>
      </View>

      <Animated.View 
        style={[
          styles.mainContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        {/* O restante do seu JSX continua exatamente o mesmo */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="rgba(255, 255, 255, 0.7)" />
          <TextInput 
            style={styles.input} 
            placeholder="CPF" 
            placeholderTextColor="rgba(255, 255, 255, 0.7)" 
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="rgba(255, 255, 255, 0.7)" />
          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="rgba(255, 255, 255, 0.7)" 
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <View style={styles.socialButtonContent}>
              <AntDesign name="facebook-square" size={22} color="white" />
              <Text style={styles.textSocialFacebook}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <View style={styles.socialButtonContent}>
              <AntDesign name="google" size={22} color="#DB4437" />
              <Text style={styles.textSocialGoogle}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.createAccount}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}