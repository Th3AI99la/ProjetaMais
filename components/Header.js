import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header({ title, onLeftPress, leftIconName = "menu", backgroundColor = "#1d3557" }) {
   const navigation = useNavigation();
   const insets = useSafeAreaInsets();

   return (
      <View
         style={[
            styles.container,
            {
               paddingTop: insets.top + 10,
               paddingBottom: 10,
               backgroundColor
            }
         ]}
      >
         <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
            <Feather name={leftIconName} size={28} color="white" />
         </TouchableOpacity>

         <Text style={styles.title}>{title}</Text>

         <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.iconButton}>
            <Feather name="settings" size={24} color="white" />
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   title: {
      color: "white",
      fontSize: 22,
      fontFamily: "Poppins-Bold"
   },
   iconButton: {
      padding: 5
   }
});
