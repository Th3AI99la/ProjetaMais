import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native'; 

// Importe as das telas
import Home from '../screens/Home';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import Emergency from '../screens/Emergency';
import History from '../screens/History';
import Anonymous from '../screens/Anonymous'; 
import CustomDrawerContent from '../components/CustomDrawerContent';
import Header from '../components/Header'; 
import Profile from '../screens/Profile'; 

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        headerShown: false, 
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'rgba(255, 255, 255, 0.7)', 
        drawerLabelStyle: {fontFamily: 'Poppins-Regular', fontSize: 15 }
      }}
    >
      <Drawer.Screen 
        name="Início" 
        component={Home} 
        options={{
          drawerActiveBackgroundColor: '#1d3557', 
          drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
        }}
      />
      <Drawer.Screen 
        name="Emergência" 
        component={Emergency} 
        options={{
          drawerActiveBackgroundColor: '#e63946', 
          headerShown: true,
          header: ({ navigation }) => (
            <Header 
              title="Emergência" 
              onMenuPress={() => navigation.openDrawer()} 
              onProfilePress={() => Alert.alert("Perfil Clicado")}
            />
          ),
          drawerIcon: ({color}) => <Feather name="alert-triangle" size={22} color={color} />
        }}
      />

      <Drawer.Screen 
        name="Anônimo" 
        component={Anonymous} 
        options={{
          drawerActiveBackgroundColor: '#3700B3', 
          headerShown: true,
          header: ({ navigation }) => (
            <Header 
              title="Modo Anônimo" 
              onMenuPress={() => navigation.openDrawer()}
              onProfilePress={() => Alert.alert("Perfil Clicado")}
              backgroundColor="#3700B3" 
            />
          ),
          drawerIcon: ({color}) => <Feather name="shield" size={22} color={color} />
        }}
      />
  <Drawer.Screen 
        name="Histórico" 
        component={History} 
        options={{
          drawerActiveBackgroundColor: '#1d3557',
          headerShown: true,
          header: ({ navigation }) => (
            <Header 
              title="Histórico" 
              onMenuPress={() => navigation.openDrawer()} 
              onProfilePress={() => Alert.alert("Perfil Clicado")}
              backgroundColor="#333333" // <-- ADICIONE/ALTERE A COR AQUI
            />
          ),
          drawerIcon: ({color}) => <Feather name="clock" size={22} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}