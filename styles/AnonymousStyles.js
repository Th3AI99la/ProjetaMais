import { StyleSheet } from "react-native";

const darkTheme = {
   background: "#212121",
   surface: "#333333",
   primaryText: "#E0E0E0",
   secondaryText: "#9E9E9E",
   accent: "#BB86FC"
};

export default StyleSheet.create({
   container: { flex: 1, backgroundColor: darkTheme.background },
   scrollContainer: { padding: 20 },
   section: { marginBottom: 25 },
   label: { fontSize: 20, fontFamily: "Poppins-Bold", color: darkTheme.primaryText, marginBottom: 10 },
   pickerButton: {
      backgroundColor: darkTheme.surface,
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#555",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   pickerButtonText: { fontSize: 16, fontFamily: "Poppins-Regular", color: darkTheme.primaryText },
   pickerButtonPlaceholder: { fontSize: 16, fontFamily: "Poppins-Regular", color: darkTheme.secondaryText },
   channelsContainer: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: "#555",
      borderRadius: 10,
      paddingTop: 8,
      backgroundColor: darkTheme.surface,
      paddingHorizontal: 8,  
   },

   channelButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#444",
   },
   channelTextContainer: { marginLeft: 15 },
   channelTitle: { fontFamily: "Poppins-Bold", fontSize: 16, color: darkTheme.primaryText },
   channelNumber: { fontFamily: "Poppins-Regular", fontSize: 14, color: darkTheme.accent }
});
