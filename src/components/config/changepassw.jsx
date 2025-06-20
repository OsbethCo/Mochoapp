import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = () => {
    Keyboard.dismiss();
    
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Las nuevas contraseñas no coinciden');
      return;
    }

    alert('Contraseña cambiada exitosamente');
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Buenas usuario de Mochacoin</Text>
      <Text style={styles.currentPasswordInfo}>
        Este es la contraseña que cuenta actualmente en nuestra aplicacion: !********0
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Escribe antigua contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña antigua"
            secureTextEntry={!showCurrentPassword}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            <Ionicons 
              name={showCurrentPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Escribe nueva contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña nueva"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Ionicons 
              name={showNewPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Escribe otra vez la contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar nueva contraseña"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons 
              name={showConfirmPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
        <Text style={styles.changeButtonText}>Cambio de contraseña</Text>
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
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  currentPasswordInfo: {
    fontSize: 14,
    marginBottom: 30,
    color: '#666',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
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
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  changeButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  changeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChangePasswordScreen;