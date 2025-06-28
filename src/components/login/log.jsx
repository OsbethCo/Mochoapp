import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, useColorScheme, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const colors = {
    light: {
      background: '#F5F5F5',
      text: '#333333',
      buttonBg: '#4285F4',
      buttonText: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      cardBg: '#FFFFFF',
      cardBorder: '#E0E0E0',
      iconTint: null
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      buttonBg: '#6200EE',
      buttonText: '#FFFFFF',
      inputBg: '#1E1E1E',
      inputBorder: '#333333',
      cardBg: '#1E1E1E',
      cardBorder: '#333333',
      iconTint: '#FFFFFF'
    }
  };

  const theme = colors[colorScheme] || colors.light;

  const handleLogin = () => {
    // Aquí puedes validar credenciales si lo necesitas
    navigation.navigate('HomeScreen');
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecoverPassScreen');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme.background}
      />
      
      <View style={[styles.content, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
        <Text style={[styles.title, { color: theme.text }]}>Inicia sesión</Text>

        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icon.png')}
            style={[styles.icon, { tintColor: theme.iconTint }]}
            resizeMode="contain"
          />
        </View>

        <TextInput
          style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
          placeholder="Correo electrónico"
          placeholderTextColor={theme.text + '88'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
          placeholder="Contraseña"
          placeholderTextColor={theme.text + '88'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.buttonBg }]}
          onPress={handleLogin}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={[styles.linkText, { color: theme.buttonBg }]}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    width: 80,
    height: 80,
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  linkText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LogScreen;