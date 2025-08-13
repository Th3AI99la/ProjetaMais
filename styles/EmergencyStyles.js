import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2f2', // Um vermelho bem claro, quase branco
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
    color: '#4f000b',
    marginBottom: 10,
  },
  pickerButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  pickerButtonPlaceholder: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
  descriptionInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    height: 120,
    textAlignVertical: 'top',
  },
  locationBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addressText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  mediaButton: {
    backgroundColor: '#e9c46a',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#264653',
    marginLeft: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 15,
  },
  submitButton: {
    backgroundColor: '#e63946',
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});