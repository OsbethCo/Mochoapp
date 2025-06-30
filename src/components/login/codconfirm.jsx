import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CodConfirmScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const theme = {
    light: {
      background: '#FFFFFF',
      text: '#333',
      border: '#DDD',
      primary: '#F59E0B',
      link: '#F59E0B',
    },
    dark: {
      background: '#121212',
      text: '#EEE',
      border: '#444',
      primary: '#F59E0B',
      link: '#66B2FF',
    },
  }[colorScheme] || theme.light;

  const handleChange = (text) => {
    setCode(text);
  };

  const handleConfirm = () => {
    // Aquí podrías validar el código
    navigation.navigate('PasswordConfirmScreen');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>📧</Text>
      </View>

      <Text style={[styles.title, { color: theme.text }]}>
        Ingresa el código de confirmación
      </Text>

      <Text style={[styles.subtitle, { color: theme.text }]}>
        Hemos enviado un código de 6 dígitos a {'\n'}
        <Text style={{ color: theme.primary }}>usuario@ejemplo.com</Text>
      </Text>

      <View style={styles.inputContainer}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              style={[
                styles.input,
                {
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={handleChange}
            />
          ))}
      </View>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={{ color: theme.link }}>¿No recibiste el código? Reenviar código</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.confirmButton, { backgroundColor: theme.primary }]}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
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
  iconContainer: {
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#F6F6F6',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  resendButton: {
    marginBottom: 20,
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CodConfirmScreen;
