// Em styles/HistoryStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container principal com o fundo azul escuro
  container: {
    flex: 1,
    backgroundColor: '#1d2362',
  },
  // Container para o conteúdo da tela
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Estilo para o ícone do placeholder
  icon: {
    marginBottom: 20,
  },
  // Estilo para o texto principal do placeholder
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  // Estilo para o subtítulo do placeholder
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 8,
  },
});