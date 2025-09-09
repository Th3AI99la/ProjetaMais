// Em styles/EmergencyStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2f2', // Fundo vermelho claro
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  callButton: {
    backgroundColor: '#e63946',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  callButtonIcon: {
    marginRight: 20,
  },
  callButtonTextContainer: {
    flex: 1,
  },
  callButtonTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: 'white',
  },
  callButtonDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
});