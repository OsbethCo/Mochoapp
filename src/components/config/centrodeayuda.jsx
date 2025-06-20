import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpCenterScreen = () => {
  const menuItems = [
    { title: 'Condiciones y política de privacidad', icon: 'document-text-outline' },
    { title: 'Informacion de la cripto', icon: 'logo-bitcoin' },
    { title: 'Informacion de la aplicacion', icon: 'information-circle-outline' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Centro de ayuda</Text>
      </View>

      <ScrollView style={styles.content}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem}
            onPress={() => alert(`Seleccionado: ${item.title}`)}
          >
            <Ionicons name={item.icon} size={24} color="#007AFF" style={styles.icon} />
            <Text style={styles.menuText}>{item.title}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default HelpCenterScreen;