// Em screens/Home.js
import React from "react";
import { View, Text, TouchableOpacity, StatusBar, Animated, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/HomeStyles";
import useHomeAnimation from "../hooks/useHomeAnimation";

// O Header não é mais importado ou usado aqui
// import Header from "../components/Header";

export default function Home() {
   const navigation = useNavigation();
   const { titleAnim, button1Anim, button2Anim, pressAnim1, pressAnim2, handlePressIn, handlePressOut } = useHomeAnimation();

   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
         <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            {/* O Header manual foi removido daqui */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={false}>
               <View style={styles.content}>
                  <Animated.View style={[styles.titleContainer, titleAnim]}>
                     <Text style={styles.title}>Projeta+</Text>
                     <Text style={styles.subtitle}>Sua segurança em primeiro lugar</Text>
                  </Animated.View>

                  <Animated.View style={[{ width: "100%", transform: [{ scale: pressAnim1 }] }, button1Anim]}>
                     <TouchableOpacity
                        style={[styles.button, styles.buttonEmergency]}
                        onPress={() => navigation.navigate("Emergência")}
                        onPressIn={() => handlePressIn(pressAnim1)}
                        onPressOut={() => handlePressOut(pressAnim1)}
                        activeOpacity={1}
                     >
                        <Feather name="alert-triangle" size={22} color="white" />
                        <Text style={[styles.buttonText, styles.textWhite]}>Emergência</Text>
                     </TouchableOpacity>
                  </Animated.View>

                  <Animated.View style={[{ width: "100%", transform: [{ scale: pressAnim2 }] }, button2Anim]}>
                     <TouchableOpacity
                        style={[styles.button, styles.buttonAnonymous]}
                        onPress={() => navigation.navigate("Anônimo")}
                        onPressIn={() => handlePressIn(pressAnim2)}
                        onPressOut={() => handlePressOut(pressAnim2)}
                        activeOpacity={1}
                     >
                        <Feather name="shield" size={22} color="white" />
                        <Text style={[styles.buttonText, styles.textWhite]}>Anônimo</Text>
                     </TouchableOpacity>
                  </Animated.View>
               </View>
            </ScrollView>
         </View>
      </SafeAreaView>
   );
}