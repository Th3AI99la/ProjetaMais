// Em styles/CreateAccountStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
  },
  scrollContainerContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    flex: 1,
    marginRight: 30, // Compensa o ícone de voltar
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
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
  button: {
    backgroundColor: '#f1faee',
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    elevation: 8,
  },
  buttonText: {
    color: '#1d3557',
    fontSize: 20,
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
    fontSize: 13,
    marginLeft: 5,
  },
});