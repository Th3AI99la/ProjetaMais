import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  buttonLogin: {
    backgroundColor: 'yellow',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  textButtonLogin: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fff',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  textSocial: {
    color: '#000',
    fontSize: 16,
  },
  createAccount: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
