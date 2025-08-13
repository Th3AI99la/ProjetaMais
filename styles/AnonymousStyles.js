import { StyleSheet } from 'react-native';

const darkTheme = {
  background: '#212121', // Fundo principal (cinza bem escuro)
  surface: '#333333', // Fundo dos inputs e caixas
  primaryText: '#E0E0E0', // Texto principal (cinza claro)
  secondaryText: '#9E9E9E', // Texto secundário (placeholders)
  accent: '#BB86FC', // Cor de destaque (roxo)
  error: '#CF6679', // Cor de erro
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
  },
  scrollContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: darkTheme.primaryText,
    marginBottom: 10,
  },
  pickerButton: {
    backgroundColor: darkTheme.surface,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: darkTheme.primaryText,
  },
  pickerButtonPlaceholder: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: darkTheme.secondaryText,
  },
  descriptionInput: {
    backgroundColor: darkTheme.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
    padding: 15,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    height: 120,
    textAlignVertical: 'top',
    color: darkTheme.primaryText,
  },
  locationBox: {
    backgroundColor: darkTheme.surface,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#555',
  },
  addressText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: darkTheme.primaryText,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  mediaButton: {
    backgroundColor: darkTheme.accent,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginLeft: 10,
  },
  mediaSummary: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    borderRadius: 10,
    alignItems: 'center',
  },
  mediaSummaryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: darkTheme.accent,
  },
  submitButton: {
    backgroundColor: darkTheme.accent,
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});