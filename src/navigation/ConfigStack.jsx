// ConfigStack.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserSettingsScreen from '../components/config/configuracon';       // Pantalla principal del tab Usuario
import PrivacySettingsScreen from '../components/config/privacidad';      // Pantalla privacidad
import NotificationsScreen from '../components/config/notificacionesyalertas';    // Notificaciones
import LanguageScreen from '../components/config/idioma';                  // Idioma
import HelpCenterScreen from '../components/config/centrodeayuda';        // Centro de ayuda
import EmailScreen from '../components/config/addmail';                  // Agregar correo
import ChangePasswordScreen from '../components/config/changepassw';          // Cambiar contraseña

const Stack = createNativeStackNavigator();

export default function ConfigStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserSettings"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#00074F',
      }}
    >
      <Stack.Screen
        name="UserSettings"
        component={UserSettingsScreen}
        options={{ title: 'Usuario' }}
      />
      <Stack.Screen
        name="PrivacySettings"
        component={PrivacySettingsScreen}
        options={{ title: 'Privacidad' }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notificaciones' }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ title: 'Idioma' }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenterScreen}
        options={{ title: 'Centro de ayuda' }}
      />
      <Stack.Screen
        name="AddMailScreen"
        component={EmailScreen}
        options={{ title: 'Agregar correo' }}
      />
      <Stack.Screen
        name="ChangePasswScreen"
        component={ChangePasswordScreen}
        options={{ title: 'Cambio de contraseña' }}
      />
    </Stack.Navigator>
  );
}
