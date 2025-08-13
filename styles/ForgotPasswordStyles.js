// Em styles/ForgotPasswordStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    flex: 1,
    marginRight: 30, // Espaço para o ícone de voltar não empurrar o título
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    marginBottom: 20,
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
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  separatorText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#f1faee',
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#1d3557',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
    errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 15,
  },
   errorMessage: {
    color: '#e63946',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 5,
  }
});