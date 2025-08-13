// Em styles/ProfileStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121', // Fundo escuro consistente
  },
  // Seção superior com avatar e nome
  profileHeader: {
    padding: 30,
    paddingTop: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#E0E0E0',
  },
  userEmail: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#9E9E9E',
  },
  // Estilos para a lista de opções
  listItem: {
    backgroundColor: '#333333',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#E0E0E0',
    marginLeft: 20,
  },
});