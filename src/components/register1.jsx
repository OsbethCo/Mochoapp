import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, StatusBar, Image,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  
  const colors = {
    light: {
      background: '#F5F5F5',
      text: '#333333',
      buttonBg: '#F59E0B',
      buttonText: '#FFFFFF',
      cardBg: '#FFFFFF',
      cardBorder: '#E0E0E0',
      iconTint: null
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      buttonBg: '#F59E0B',
      buttonText: '#FFFFFF',
      cardBg: '#1E1E1E',
      cardBorder: '#333333',
      iconTint: '#FFFFFF'
    }
  };
  
  const theme = colors[colorScheme] || colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme.background}
      />
      
      <View style={[styles.content, {
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder
      }]}>
        <Text style={[styles.title, { color: theme.text }]}>¡Bienvenido!</Text>
        
        <View style={styles.iconContainer}>
          <Image
            source={require('../icon/icon.png')}
            style={[styles.icon, { tintColor: theme.iconTint }]}
            resizeMode="contain"
          />
        </View>
        
        {/* Botón Iniciar sesión */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.buttonBg }]}
          onPress={() => navigation.navigate('LoginScreen')}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>Iniciar sesión</Text>
        </TouchableOpacity>
        
        {/* Botón Registrate */}
        <TouchableOpacity 
          style={[styles.button, { 
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.buttonBg,
            marginTop: 16
          }]}
          onPress={() => navigation.navigate('Register2')}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, { color: theme.buttonBg }]}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 30,
  },
  icon: {
    width: 80,
    height: 80,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
