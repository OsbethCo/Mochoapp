import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecoverPassScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');

  const colors = {
    light: {
      background: '#FFFFFF',
      text: '#333333',
      inputBorder: '#DDD',
      buttonBg: '#F59E0B',
      buttonText: '#FFFFFF'
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      inputBorder: '#444',
      buttonBg: '#F59E0B',
      buttonText: '#FFFFFF'
    }
  };

  const theme = colors[colorScheme] || colors.light;

  const handleSendCode = () => {
    // Aquí puedes agregar lógica para enviar código por backend si deseas
    navigation.navigate('CodConfirmScreen');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Recuperar contraseña</Text>
      
      <View style={styles.emailSection}>
        <Text style={[styles.label, { color: theme.text }]}>Correo Electrónico</Text>
        <TextInput
          style={[
            styles.emailInput,
            {
              color: theme.text,
              borderBottomColor: theme.inputBorder,
            }
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="usuario@ejemplo.com"
          placeholderTextColor={theme.text + '88'}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBg }]}
        onPress={handleSendCode}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Enviar código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  emailSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailInput: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RecoverPassScreen;
