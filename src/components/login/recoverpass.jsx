import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('usuario@ejemplo.com');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recuperar contraseña</Text>
      
      <View style={styles.emailSection}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.divider} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
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
    color: '#333',
  },
  emailInput: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#F59E0B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordRecoveryScreen;