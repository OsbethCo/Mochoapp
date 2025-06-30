import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Paletas de colores para ambos temas
const colorPalettes = {
  dark: {
    background: '#121212',
    cardBackground: '#1E1E1E',
    text: '#FFFFFF',
    secondaryText: '#A0A0A0',
    border: '#2D2D2D',
    positive: '#4CAF50',
    logoutButton: '#1E1E1E',
    logoutText: '#F44336',
    switchTrack: { false: '#767577', true: '#4CAF50' },
    switchThumb: '#f4f3f4',
    statusBar: 'light-content',
  },
  light: {
    background: '#F5F5F5',
    cardBackground: '#FFFFFF',
    text: '#333333',
    secondaryText: '#757575',
    border: '#E0E0E0',
    positive: '#388E3C',
    logoutButton: '#FFFFFF',
    logoutText: '#F44336',
    switchTrack: { false: '#767577', true: '#388E3C' },
    switchThumb: '#f4f3f4',
    statusBar: 'dark-content',
  }
};

const UserSettingsScreen = () => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const navigation = useNavigation();

  const palette = colorPalettes[theme] || colorPalettes.dark;
  const styles = useMemo(() => createStyles(palette), [palette]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const settings = [
    {
      id: 1,
      name: 'Notificaciones',
      type: 'switch',
      action: () => setNotificationEnabled(!notificationEnabled),
      value: notificationEnabled,
    },
    {
      id: 2,
      name: 'Temas',
      type: 'switch',
      action: toggleTheme,
      value: theme === 'dark',
    },
    {
      id: 3,
      name: 'Idioma',
      type: 'arrow',
      action: () => navigation.navigate('idiomas'),
    },
    {
      id: 4,
      name: 'Privacidad',
      type: 'arrow',
      action: () => navigation.navigate('privacidad'),
    },
  ];

  const supportItems = [
    {
      id: 5,
      name: 'Ayuda y soporte',
      type: 'arrow',
      action: () => navigation.navigate('ayuda'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <StatusBar
        barStyle={palette.statusBar}
        backgroundColor={palette.background}
      />

      <ScrollView style={styles.content}>
        <View style={[styles.section, { backgroundColor: palette.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: palette.secondaryText }]}>Configuración</Text>

          {settings.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.settingItem, { borderBottomColor: palette.border }]}
              onPress={item.action}
            >
              <Text style={[styles.settingText, { color: palette.text }]}>{item.name}</Text>

              {item.type === 'switch' ? (
                <Switch
                  trackColor={palette.switchTrack}
                  thumbColor={palette.switchThumb}
                  ios_backgroundColor={palette.cardBackground}
                  onValueChange={item.action}
                  value={item.value}
                />
              ) : (
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={palette.secondaryText}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.section, { backgroundColor: palette.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: palette.secondaryText }]}>Soporte</Text>
          {supportItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.settingItem, { borderBottomColor: palette.border }]}
              onPress={item.action}
            >
              <Text style={[styles.settingText, { color: palette.text }]}>{item.name}</Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={palette.secondaryText}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: palette.logoutButton }]}
          onPress={() => alert('Sesión cerrada')}
        >
          <Text style={[styles.logoutText, { color: palette.logoutText }]}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const createStyles = (palette) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    borderBottomColor: palette.border,
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

export default UserSettingsScreen