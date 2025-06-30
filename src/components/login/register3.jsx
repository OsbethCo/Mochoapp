import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, SafeAreaView } from 'react-native';

const VerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef(Array(6).fill(null));
  const email = 'usuario@ejemplo.com'; // Reemplaza con el email dinámico si es necesario

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus al siguiente campo si se ingresó un dígito
    if (text && index < 5 && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleResendCode = () => {
    // Lógica para reenviar el código
    alert(`Código reenviado a ${email}`);
  };

  const handleConfirm = () => {
    Keyboard.dismiss();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      alert(`Código confirmado: ${fullCode}`);
    } else {
      alert('Por favor, ingresa los 6 dígitos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>2 de 3</Text>
      <Text style={styles.header}>Ingresa el código de confirmación</Text>
      <Text style={styles.subheader}>Hemos enviado un código de 6 dígitos a {email}</Text>

      <View style={styles.codeContainer}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            value={code[index]}
            onChangeText={(text) => handleCodeChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
                inputs.current[index - 1].focus();
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>¿No recibiste el código? <Text style={styles.resendLink}>Reenviar código</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Register4')}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 90,
    backgroundColor: '#fff',
  },
  progress: {
    fontSize: 30,
    color: '#666',
    marginBottom: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  resendText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    fontSize: 16,
  },
  resendLink: {
    fontWeight: 'bold',
    color: '#F59E0B',
  },
  confirmButton: {
    backgroundColor: '#F59E0B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VerificationScreen;