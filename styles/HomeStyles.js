// Em styles/HomeStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2362",
    
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 60,
  },

  title: {
    fontSize: 52,
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Poppins-Regular",
    marginTop: 8,
  },

  button: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  buttonEmergency: {
    backgroundColor: "#e63946",
  },

  buttonAnonymous: {
    backgroundColor: "#457b9d",
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginLeft: 12,
  },

  textWhite: {
    color: "#fff",
  },
});
