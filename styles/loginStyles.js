import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // --- Estrutura Principal ---
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
    padding: 30,
  },
    scrollContainerContent: {
    flexGrow: 1, 
    justifyContent: 'space-between', 
    padding: 15, // Mover o padding para cima para evitar o overflow
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
  },
  footer: {
    alignItems: 'center', 
    paddingBottom: 15,
    paddingTop: 15, // Adiciona um pouco de espaço acima do rodapé
    marginTop: 15, // Espaço entre o conteúdo principal e o rodapé
  },
  footerContent: {
    flexDirection: 'row', 
  },
    footerText: {
    color: 'rgba(255, 255, 255, 0.7)', // Um pouco mais suave que o branco puro
    fontSize: 16,
  },

  // --- Elementos de Texto ---
  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'right',
    width: '100%',
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  createAccount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', // Deixa o link em negrito
    textDecorationLine: 'underline',
    marginLeft: 5, // Adiciona um pequeno espaço
  },

  // --- Formulário ---
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo translúcido
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  
  // --- Botões ---
  buttonLogin: {
    backgroundColor: '#f5c518', // Um amarelo mais vibrante
    width: '100%',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    // Sombra para dar profundidade (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra (Android)
    elevation: 5,
  },
  textButtonLogin: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
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
    borderRadius: 10,
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
    fontWeight: '500',
    marginLeft: 10,
  },
  textSocialGoogle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});