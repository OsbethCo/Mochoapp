import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrivacySettingsScreen = () => {
  const [privacyToggles, setPrivacyToggles] = useState({
    pagos: false,
    gps: true,
    incognito: false,
  });

  const [securityToggles, setSecurityToggles] = useState({
    verificacion: true,
  });

  const togglePrivacy = (key) => {
    setPrivacyToggles({ ...privacyToggles, [key]: !privacyToggles[key] });
  };

  const toggleSecurity = (key) => {
    setSecurityToggles({ ...securityToggles, [key]: !securityToggles[key] });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Botón regresar */}
      <View style={styles.backRow}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </View>

      {/* PRIVACIDAD */}
      <Text style={styles.sectionTitle}>Privacidad</Text>
      <View style={styles.box}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Restriccion de pagos</Text>
          <Switch
            value={privacyToggles.pagos}
            onValueChange={() => togglePrivacy('pagos')}
            trackColor={{ false: '#ccc', true: '#00074F' }}
            thumbColor="#ffffff"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Permitir ubicacion por GPS</Text>
          <Switch
            value={privacyToggles.gps}
            onValueChange={() => togglePrivacy('gps')}
            trackColor={{ false: '#ccc', true: '#00074F' }}
            thumbColor="#ffffff"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Transferencias incognitos</Text>
          <Switch
            value={privacyToggles.incognito}
            onValueChange={() => togglePrivacy('incognito')}
            trackColor={{ false: '#ccc', true: '#00074F' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* SEGURIDAD */}
      <Text style={styles.sectionTitle}>Seguridad</Text>
      <View style={styles.box}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Verificacion en dos pasos</Text>
          <Switch
            value={securityToggles.verificacion}
            onValueChange={() => toggleSecurity('verificacion')}
            trackColor={{ false: '#ccc', true: '#00074F' }}
            thumbColor="#ffffff"
          />
        </View>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Agregar correo electronico</Text>
          <Ionicons name="chevron-forward" size={20} color="#00074F" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Cambio de contraseña</Text>
          <Ionicons name="chevron-forward" size={20} color="#00074F" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backRow: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#000',
  },
  box: {
    backgroundColor: '#FBF9FA',
    borderRadius: 16,
    paddingVertical: 4,
    marginBottom: 24,
  },
  item: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    color: '#00074F',
  },
});

export default PrivacySettingsScreen;
