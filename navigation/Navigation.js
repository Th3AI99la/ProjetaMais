// Em navigation/Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

// Importe as telas e componentes
import Home from '../screens/Home';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import Emergency from '../screens/Emergency';
import History from '../screens/History';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Header from '../components/Header'; 

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        headerShown: false, 
        drawerActiveBackgroundColor: '#e63946',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'white',
        drawerLabelStyle: {fontFamily: 'Poppins-Regular', fontSize: 15 }
      }}
    >
      <Drawer.Screen 
        name="Início" 
        component={Home} 
        options={{
          drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
        }}
      />
      <Drawer.Screen 
        name="Emergência" 
        component={Emergency} 
        options={{
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
        name="Histórico" 
        component={History} 
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Header 
              title="Histórico" 
              onMenuPress={() => navigation.openDrawer()} 
              onProfilePress={() => Alert.alert("Perfil Clicado")}
            />
          ),
          drawerIcon: ({color}) => <Feather name="clock" size={22} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}

// O Stack Navigator principal 
export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}