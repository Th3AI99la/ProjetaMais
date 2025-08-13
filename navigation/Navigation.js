// Em navigation/Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons'; // <-- A CORREÇÃO ESTÁ AQUI

// Importe todas as telas
import Home from '../screens/Home';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import Emergency from '../screens/Emergency';
import History from '../screens/History';

// Importe o conteúdo customizado do Drawer
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Um grupo de telas que pertencem ao fluxo principal (com menu lateral)
function MainDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        headerShown: false,
        drawerActiveBackgroundColor: '#e63946',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -20, fontFamily: 'Poppins-Regular', fontSize: 15 }
      }}
    >
      <Drawer.Screen name="Início" component={Home} options={{
        drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
      }}/>
      <Drawer.Screen name="Emergência" component={Emergency} options={{
        drawerIcon: ({color}) => <Feather name="alert-triangle" size={22} color={color} />
      }}/>
      <Drawer.Screen name="Histórico" component={History} options={{
        drawerIcon: ({color}) => <Feather name="clock" size={22} color={color} />
      }}/>
    </Drawer.Navigator>
  );
}

// Navegador principal que decide entre o fluxo de autenticação e o fluxo principal
export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      {/* Telas que não têm o menu lateral ficam aqui */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}