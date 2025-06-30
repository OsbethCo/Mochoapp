import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Importa pantallas principales
import WelcomeScreen from '../components/register1';
import RegisterScreen from '../components/login/register2';
import VerificationScreen from '../components/login/register3';
import PasswordConfirmationScreen from '../components/login/register4';
import PasswordConfirmScreen from '../components/login/passwordconfirm';
import LogScreen from '../components/log';
import RecoverPassScreen from '../components/login/recoverpass';
import CodConfirmScreen from '../components/login/codconfirm';

import LobbyScreen from '../components/homescreen';
import PriceScreen from '../components/price';
import TransactionScreen from '../components/transacc';
import HistoryScreen from '../components/history';
import ConfigStack from './ConfigStack';
import BuyMochocoinScreen from '../components/buy';

import LanguageScreen from '../components/config/idioma';
import PrivacySettingsScreen from '../components/config/privacidad';
import NotificationsScreen from '../components/config/notificacionesyalertas';
import HelpCenterScreen from '../components/config/centrodeayuda';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Transacciones':
              iconName = 'swap-horizontal-outline';
              break;
            case 'Precio':
              iconName = 'pricetags-outline';
              break;
            case 'Historial':
              iconName = 'time-outline';
              break;
            case 'Usuario':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00074F',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={LobbyScreen} />
      <Tab.Screen name="Transacciones" component={TransactionScreen} />
      <Tab.Screen name="Precio" component={PriceScreen} />
      <Tab.Screen name="Historial" component={HistoryScreen} />
      <Tab.Screen name="Usuario" component={ConfigStack} />
    </Tab.Navigator>
  );
};

// Stack principal de la app (pantallas de inicio, registro, recuperación y la navegación principal con tabs)
const AppNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainTabs">
        {/* Registro e inicio */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Register2" component={RegisterScreen} />
        <Stack.Screen name="Register3" component={VerificationScreen} />
        <Stack.Screen name="Register4" component={PasswordConfirmationScreen} />
        <Stack.Screen name="LoginScreen" component={LogScreen} />
        <Stack.Screen name="RecoverPassScreen" component={RecoverPassScreen} />
        <Stack.Screen name="CodConfirmScreen" component={CodConfirmScreen} />
        <Stack.Screen name="PasswordConfirmScreen" component={PasswordConfirmScreen} />
        {/* Navegación principal con tabs */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="BuyScreen" component={BuyMochocoinScreen} />

        {/* Pantallas de configuración */}
        <Stack.Screen name="notificacion" component={NotificationsScreen}/>
        <Stack.Screen name="idiomas" component={LanguageScreen}/>
        <Stack.Screen name="ayuda" component={HelpCenterScreen}/>
        <Stack.Screen name="privacidad" component={PrivacySettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;