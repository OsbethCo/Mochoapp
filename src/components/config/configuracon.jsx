import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserSettingsScreen = () => {
  const [theme, setTheme] = useState('dark');
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Definición de temas
  const themeStyles = theme === 'light' ? {
    container: { backgroundColor: '#F8F8F8' },
    header: { backgroundColor: '#FFFFFF' },
    time: { color: '#666666' },
    title: { color: '#000000' },
    section: { backgroundColor: '#FFFFFF' },
    sectionTitle: { color: '#666666' },
    settingItem: { borderBottomColor: '#F0F0F0' },
    settingText: { color: '#333333' },
    logoutButton: { backgroundColor: '#FFFFFF' },
    logoutText: { color: '#F44336' },
    switchTrack: { false: '#767577', true: '#4CAF50' },
    switchThumb: '#f4f3f4',
    statusBar: 'dark-content'
  } : {
    container: { backgroundColor: '#121212' },
    header: { backgroundColor: '#121212' },
    time: { color: '#A0A0A0' },
    title: { color: '#FFFFFF' },
    section: { backgroundColor: '#1E1E1E' },
    sectionTitle: { color: '#A0A0A0' },
    settingItem: { borderBottomColor: '#2D2D2D' },
    settingText: { color: '#FFFFFF' },
    logoutButton: { backgroundColor: '#1E1E1E' },
    logoutText: { color: '#F44336' },
    switchTrack: { false: '#767577', true: '#4CAF50' },
    switchThumb: '#f4f3f4',
    statusBar: 'light-content'
  };

  const settings = [
    { id: 1, name: 'Notificaciones', type: 'switch', action: () => setNotificationEnabled(!notificationEnabled), value: notificationEnabled },
    { id: 2, name: 'Temas', type: 'switch', action: toggleTheme, value: theme === 'dark' },
    { id: 3, name: 'Idioma', type: 'arrow', action: () => alert('Selección de idioma') },
    { id: 4, name: 'Limite de transferencias', type: 'arrow', action: () => alert('Configuración de límites') },
    { id: 5, name: 'Privacidad', type: 'arrow', action: () => alert('Configuración de privacidad') },
  ];

  const supportItems = [
    { id: 6, name: 'Ayuda y soporte', type: 'arrow', action: () => alert('Ayuda y soporte') }
  ];

  return (
    <View style={[styles.container, themeStyles.container]}>
      <StatusBar barStyle={themeStyles.statusBar} backgroundColor={themeStyles.header.backgroundColor} />
      
      {/* Título principal */}
      <Text style={[styles.title, themeStyles.title]}>Usuario</Text>
      
      {/* Contenido de configuración */}
      <ScrollView style={styles.content}>
        {/* Sección de configuración */}
        <View style={[styles.section, themeStyles.section]}>
          <Text style={[styles.sectionTitle, themeStyles.sectionTitle]}>Configuración</Text>
          
          {settings.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.settingItem, themeStyles.settingItem]}
              onPress={item.action}
            >
              <Text style={[styles.settingText, themeStyles.settingText]}>{item.name}</Text>
              
              {item.type === 'switch' ? (
                <Switch
                  trackColor={themeStyles.switchTrack}
                  thumbColor={themeStyles.switchThumb}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={item.action}
                  value={item.value}
                />
              ) : (
                <Ionicons 
                  name="chevron-forward" 
                  size={24} 
                  color={theme === 'dark' ? '#A0A0A0' : '#666666'} 
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Sección de soporte */}
        <View style={[styles.section, themeStyles.section]}>
          <Text style={[styles.sectionTitle, themeStyles.sectionTitle]}>Soporte</Text>
          {supportItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.settingItem, themeStyles.settingItem]}
              onPress={item.action}
            >
              <Text style={[styles.settingText, themeStyles.settingText]}>{item.name}</Text>
              <Ionicons 
                name="chevron-forward" 
                size={24} 
                color={theme === 'dark' ? '#A0A0A0' : '#666666'} 
              />
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Botón de cerrar sesión */}
        <TouchableOpacity 
          style={[styles.logoutButton, themeStyles.logoutButton]}
          onPress={() => alert('Sesión cerrada')}
        >
          <Text style={[styles.logoutText, themeStyles.logoutText]}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Estilos base
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 30,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  section: {
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
  },
  settingText: {
    fontSize: 18,
  },
  logoutButton: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default UserSettingsScreen;