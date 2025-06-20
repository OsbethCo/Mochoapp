// screens/LoginScreen.js
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';

const LoginScreen = () => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';
  
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#F5F5F5' 
    }}>
      <Text style={{ color: textColor, fontSize: 24 }}>Pantalla de Inicio de Sesión</Text>
    </View>
  );
};

export default LoginScreen;