// Em navigation/Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

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

// 1. Criamos um StackNavigator com TODAS as telas principais
function MainStackNavigator() {
  return (
    <Stack.Navigator
      // O Header é definido aqui para TODAS as telas do Stack
      screenOptions={({ navigation, route }) => ({
        header: () => {
          const isFirstScreen = navigation.getState().index === 0;
          return (
            <Header
              title={route.name}
              leftIconName={isFirstScreen ? 'menu' : 'arrow-left'} // Ícone de menu na Home, de voltar nas outras
              onLeftPress={isFirstScreen ? () => navigation.toggleDrawer() : () => navigation.goBack()}
              backgroundColor={
                route.name === 'Anônimo' ? '#3700B3' : 
                route.name === 'Emergência' ? '#e63946' : 
                route.name === 'Histórico' || route.name === 'Configurações' ? '#333333' : 
                '#1d3557'
              }
            />
          );
        },
      })}
    >
      <Stack.Screen name="Início" component={Home} />
      <Stack.Screen name="Emergência" component={Emergency} />
      <Stack.Screen name="Anônimo" component={Anonymous} />
      <Stack.Screen name="Histórico" component={History} />
      <Stack.Screen name="Configurações" component={Settings} />
    </Stack.Navigator>
  );
}

// 2. O Drawer agora "envolve" o StackNavigator
export default function Navigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // O header é controlado pelo Stack, não pelo Drawer
        drawerActiveBackgroundColor: '#e63946',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
        drawerLabelStyle: { fontFamily: 'Poppins-Regular', fontSize: 15 }
      }}
    >
      <Drawer.Screen 
        name="MainStack" // O Drawer agora tem apenas uma "tela", que é o nosso Stack inteiro
        component={MainStackNavigator}
        options={{
          // Opções para como o item "Início" aparece no menu
          title: 'Início', 
          drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}