// Em navigation/Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';

// Importe as telas e componentes
import Home from '../screens/Home';
import Emergency from '../screens/Emergency';
import History from '../screens/History';
import Anonymous from '../screens/Anonymous';
import Settings from '../screens/Settings';
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
        // drawerActiveBackgroundColor foi REMOVIDO daqui para permitir cores individuais
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
          headerShown: true,
          header: ({ navigation }) => <Header title="Início" onLeftPress={() => navigation.openDrawer()} backgroundColor="#1d3557"/>,
          drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
        }}
      />

      <Drawer.Screen 
        name="Emergência" 
        component={Emergency} 
        options={{
          drawerActiveBackgroundColor: '#e63946', // Vermelho
          headerShown: true,
          header: ({ navigation }) => <Header title="Emergência" onLeftPress={() => navigation.openDrawer()} />,
          drawerIcon: ({color}) => <Feather name="alert-triangle" size={22} color={color} /> // ÍCONE RESTAURADO
        }}
      />
      <Drawer.Screen 
        name="Anônimo" 
        component={Anonymous} 
        options={{
          drawerActiveBackgroundColor: '#3700B3', // Roxo
          headerShown: true,
          header: ({ navigation }) => <Header title="Modo Anônimo" onLeftPress={() => navigation.openDrawer()} backgroundColor="#3700B3" />,
          drawerIcon: ({color}) => <Feather name="shield" size={22} color={color} /> // ÍCONE RESTAURADO
        }}
      />

      <Drawer.Screen 
        name="Histórico" 
        component={History} 
        options={{
          drawerActiveBackgroundColor: '#1d3557', // Azul
          headerShown: true,
          header: ({ navigation }) => <Header title="Histórico" onLeftPress={() => navigation.openDrawer()} backgroundColor="#333333" />,
          drawerIcon: ({color}) => <Feather name="clock" size={22} color={color} /> // ÍCONE RESTAURADO
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}