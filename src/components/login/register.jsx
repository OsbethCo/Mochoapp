import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Paleta de colores adaptable al tema
  const colors = {
    light: {
      background: '#FFFFFF',
      text: '#000000',
      inputBg: '#FFFFFF',
      inputBorder: '#CCCCCC',
      buttonBg: '#007AFF',
      buttonText: '#FFFFFF',
      secondaryText: '#666666',
      linkText: '#007AFF',
      cardBg: '#F5F5F5'
    },
    dark: {
      background: '#121212',
      text: '#FFFFFF',
      inputBg: '#1E1E1E',
      inputBorder: '#333333',
      buttonBg: '#0A84FF',
      buttonText: '#FFFFFF',
      secondaryText: '#AAAAAA',
      linkText: '#64B5F6',
      cardBg: '#1E1E1E'
    }
  };
  
  const theme = colors[colorScheme] || colors.light;
  const styles = createStyles(theme);

  const handlePhoneChange = (text) => {
    // Remove all non-digit characters
    const cleaned = text.replace(/\D/g, '');
    
    // Apply formatting: +58-XXX-XXXX
    let formatted = '';
    if (cleaned.length > 0) {
      formatted = '+58';
      if (cleaned.length > 3) {
        formatted += '-' + cleaned.substring(3, 6);
      }
      if (cleaned.length > 6) {
        formatted += '-' + cleaned.substring(6, 10);
      }
    }
    
    setPhone(formatted);
  };

  const handleNext = () => {
    // Handle next step
    console.log('Next pressed');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.progress}>1 de 3</Text>
        <Text style={styles.title}>Registro</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor={theme.secondaryText}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Número de Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder="+58-XXX-XXXX"
            placeholderTextColor={theme.secondaryText}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario@ejemplo.com"
            placeholderTextColor={theme.secondaryText}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCompleteType="email"
          />
        </View>

        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginLink} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>
            ¿Ya tienes una cuenta? <Text style={styles.loginLinkText}>Inicia sesión</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Función para crear estilos dinámicos
const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 25,
    flexGrow: 1,
  },
  progress: {
    fontSize: 14,
    color: theme.secondaryText,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: theme.text,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: theme.text,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: theme.inputBorder,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: theme.text,
    backgroundColor: theme.inputBg,
  },
  nextButton: {
    backgroundColor: theme.buttonBg,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  nextButtonText: {
    color: theme.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 25,
    alignItems: 'center',
  },
  loginText: {
    color: theme.secondaryText,
    fontSize: 16,
  },
  loginLinkText: {
    color: theme.linkText,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;