import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EmailScreen = () => {
  // Masked email function
  const maskEmail = (email) => {
    const [username, domain] = email.split('@');
    if (username.length > 1) {
      return username.charAt(0) + '*'.repeat(username.length - 1) + '@' + domain;
    }
    return email;
  };

  const maskedEmail = maskEmail('usuario@gmail.com');

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Buenas usuario de Mochacoin.</Text>
      
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Este es el correo que cuenta</Text>
        <Text style={styles.messageText}>actualmente en nuestra</Text>
        <Text style={styles.messageText}>aplicacion: <Text style={styles.maskedEmail}>{maskedEmail}</Text></Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Agregar correo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  maskedEmail: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EmailScreen;