import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeta+@@@@@ww</Text>

      <TouchableOpacity style={styles.buttonRed}>
        <Text style={styles.textWhite}>Emergência</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGray}>
        <Text style={styles.textBlack}>Anônimo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonWhite}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textBlack}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
