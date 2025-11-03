// Em components/CustomDrawerContent.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler, Platform } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props) {
   // Usando useSafeAreaInsets para lidar com áreas seguras
   const insets = useSafeAreaInsets();

   // Função para lidar com o logout
   const handleLogout = () => {
      Alert.alert("Sair", "Você tem certeza que deseja sair?", [
         { text: "Cancelar", style: "cancel" },
         {
            text: "Sim, Sair",
            onPress: () => {
               // Lógica para sair do app
               if (Platform.OS === "android") {
                  BackHandler.exitApp(); // Fecha o app no Android
               } else {
                  // Opcional: Avisa o usuário de iOS
                  Alert.alert("Aviso", "No iOS, por favor, use o gesto nativo para fechar o app.");
               }
            }
         }
      ]);
   };

   return (
      <View style={{ flex: 1 }}>
         <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
            contentContainerStyle={{ backgroundColor: "#1d3557", flex: 1 }}
         >
            <View style={styles.header}>
               <Text style={styles.headerTitle}>Proteja+</Text>
            </View>

            <View style={styles.drawerItemsContainer}>
               <DrawerItemList {...props} />
            </View>
         </DrawerContentScrollView>

         <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
               <View style={styles.logoutContent}>
                  <Feather name="log-out" size={22} color="#fff" />
                  <Text style={styles.logoutText}>Sair</Text>
               </View>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   header: {
      padding: 20,
      paddingTop: 50,
      paddingBottom: 20
   },
   headerTitle: {
      color: "white",
      fontSize: 28,
      fontFamily: "Poppins-Bold"
   },
   drawerItemsContainer: {
      flex: 1,
      paddingTop: 10
   },
   footer: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: "#4a5a73",
      backgroundColor: "#1d3557"
   },
   logoutButton: {
      paddingVertical: 10
   },
   logoutContent: {
      flexDirection: "row", // <-- GARANTE O ALINHAMENTO HORIZONTAL
      alignItems: "center"
   },
   logoutText: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
      marginLeft: 15, // <-- GARANTE O ESPAÇAMENTO ENTRE ÍCONE E TEXTO
      color: "white"
   }
});
