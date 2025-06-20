import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirm = () => {
    // Handle password confirmation logic
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      alert('Contraseña confirmada con éxito');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Confirmar contraseña</Text>

      {/* Sección Nueva contraseña */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nueva contraseña</Text>
        <View style={styles.inputGroup}>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>
      </View>

      {/* Sección Confirmar contraseña */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Confirmar contraseña</Text>
        <View style={styles.inputGroup}>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      {/* Botón Confirmar */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    paddingRight: 40,
  },
  confirmButton: {
    backgroundColor: '#F59E0B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ConfirmPasswordScreen;