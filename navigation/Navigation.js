// navigation/Navigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

// Telas
import Home from '../screens/Home';
import Emergency from '../screens/Emergency';
import History from '../screens/History';
import Anonymous from '../screens/Anonymous';
import Settings from '../screens/Settings';

// Componentes
import CustomDrawerContent from '../components/CustomDrawerContent';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Função utilitária para não repetir código no header
const headerOptions = (title, navigation, color = "#1d3557") => ({
  headerShown: true,
  header: () => (
    <Header 
      title={title} 
      onLeftPress={() => navigation.openDrawer()} 
      backgroundColor={color} 
    />
  ),
});

// Drawer Navigator
function MainDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
        drawerLabelStyle: { fontFamily: 'Poppins-Regular', fontSize: 15 }
      }}
    >
      <Drawer.Screen 
        name="Início" 
        component={Home} 
        options={({navigation}) => ({
          ...headerOptions("Início", navigation, "#1d3557"),
          drawerActiveBackgroundColor: '#ffffff42',
          drawerIcon: ({color}) => <Feather name="home" size={22} color={color} />
        })}
      />

      <Drawer.Screen 
        name="Emergência" 
        component={Emergency} 
        options={({navigation}) => ({
          ...headerOptions("Emergência", navigation, "#e63946"),
          drawerActiveBackgroundColor: '#e63946',
          drawerIcon: ({color}) => <Feather name="alert-triangle" size={22} color={color} />
        })}
      />

      <Drawer.Screen 
        name="Anônimo" 
        component={Anonymous} 
        options={({navigation}) => ({
          ...headerOptions("Modo Anônimo", navigation, "#3700B3"),
          drawerActiveBackgroundColor: '#3700B3',
          drawerIcon: ({color}) => <Feather name="shield" size={22} color={color} />
        })}
      />

      <Drawer.Screen 
        name="Histórico" 
        component={History} 
        options={({navigation}) => ({
          ...headerOptions("Histórico", navigation, "#333333"),
          drawerActiveBackgroundColor: '#ffffff42',
          drawerIcon: ({color}) => <Feather name="clock" size={22} color={color} />
        })}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator
export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
