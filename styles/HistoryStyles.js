// Em styles/HistoryStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container principal com o novo fundo
  container: {
    flex: 1,
    backgroundColor: '#212121', // Fundo cinza escuro (tema anônimo)
  },
  // Placeholder para quando a lista estiver vazia
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#E0E0E0',
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: 8,
  },
  // Estilos para cada item da lista
  listItem: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444'
  },
  listItemIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(187, 134, 252, 0.2)', // Roxo translúcido
    marginRight: 15,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#E0E0E0',
  },
  listItemDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9E9E9E',
    marginTop: 4,
  },
});