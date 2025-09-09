// Em screens/Settings.js
import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants'; // Importa o Constants
import styles from '../styles/SettingsStyles';

export default function Settings() {
  const appVersion = Constants.expoConfig.version;
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <Feather name="bell" size={22} color="#BB86FC" />
            <Text style={styles.listItemText}>Notificações</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => setNotificationsEnabled(previousState => !previousState)}
            value={notificationsEnabled}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <Feather name="lock" size={22} color="#BB86FC" />
            <Text style={styles.listItemText}>Privacidade</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#9E9E9E" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.versionText}>Projeta+ Versão {appVersion}</Text>
      </View>
    </View>
  );
}