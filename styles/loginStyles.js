// Em styles/loginStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // --- Estrutura ---
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
  },
  scrollContainerContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
  },
  mainContent: {}, // Mantido para a animação, mas sem estilos fixos
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  // --- Textos ---
  title: {
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginBottom: 50,
  },
  forgotPassword: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    width: '100%',
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  footerContent: {
    flexDirection: 'row',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  createAccount: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },

  // --- Formulário ---
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  
  // --- Botões ---
  buttonLogin: {
    backgroundColor: '#f1faee', // Cor branca, como na Home
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  textButtonLogin: {
    color: '#1d3557', // Texto escuro
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },

  // --- Botões Sociais ---
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  socialButton: {
    paddingVertical: 12,
    borderRadius: 12, // Bordas consistentes
    width: '48%',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSocialFacebook: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
  },
  textSocialGoogle: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
  },
});