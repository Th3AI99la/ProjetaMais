import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
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
  footer: {
    padding: 25,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: "#BB86FC",
  },
});