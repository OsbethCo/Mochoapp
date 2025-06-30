import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, useColorScheme, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordConfirmScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const theme = {
    light: {
      background: '#fff',
      text: '#333',
      inputBorder: '#ccc',
      buttonBg: '#F59E0B',
      buttonText: '#fff',
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      inputBorder: '#444',
      buttonBg: '#F59E0B',
      buttonText: '#fff',
    },
  }[colorScheme] || theme.light;

  const handleConfirm = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      Alert.alert('Éxito', 'Contraseña confirmada con éxito');
      navigation.navigate('MainTabs');
    } else {
      Alert.alert('Error', 'Las contraseñas no coinciden');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Confirmar contraseña</Text>

      {/* Nueva contraseña */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Nueva contraseña</Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.inputBorder, color: theme.text },
          ]}
          placeholder="Contraseña"
          placeholderTextColor={theme.text + '88'}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      {/* Confirmar contraseña */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Confirmar contraseña</Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.inputBorder, color: theme.text },
          ]}
          placeholder="Confirmar contraseña"
          placeholderTextColor={theme.text + '88'}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, { backgroundColor: theme.buttonBg }]}
        onPress={handleConfirm}
      >
        <Text style={[styles.confirmButtonText, { color: theme.buttonText }]}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  confirmButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordConfirmScreen;
