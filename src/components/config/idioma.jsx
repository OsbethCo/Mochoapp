import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const flags = {
  'Español': require('./flags/spain.png'),
  'Aleman': require('./flags/germany.png'),
  'Portugues': require('./flags/portugal.png'),
  'Frances': require('./flags/france.png'),
  'Italiano': require('./flags/italy.png'),
  'Ingles(EEUU)': require('./flags/usa.png'),
  'Japones': require('./flags/japan.png'),
  'Ruso': require('./flags/russia.png'),
};

const LanguageScreen = () => {
  const currentLanguage = 'Español';

  const languages = [
    'Aleman',
    'Portugues',
    'Frances',
    'Italiano',
    'Ingles(EEUU)',
    'Japones',
    'Ruso',
  ];

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.headerRow}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text style={styles.header}>Idioma actual</Text>
      </View>

      {/* Idioma actual */}
      <View style={styles.currentLanguageContainer}>
        <Text style={styles.currentLanguageText}>{currentLanguage}</Text>
        <Image source={flags[currentLanguage]} style={styles.flag} />
      </View>

      {/* Separador */}
      <Text style={styles.otherLabel}>otros idiomas</Text>

      {/* Lista de idiomas */}
      <View style={styles.languageBox}>
        {languages.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={styles.languageItem}
            onPress={() => alert(`Idioma seleccionado: ${lang}`)}
          >
            <Text style={styles.languageText}>{lang}</Text>
            <Image source={flags[lang]} style={styles.flag} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  currentLanguageContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginBottom: 20,
  },
  currentLanguageText: {
    fontSize: 16,
    color: '#0d47a1',
    fontWeight: '600',
  },
  otherLabel: {
    textTransform: 'uppercase',
    color: '#666',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 4,
  },
  languageBox: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    overflow: 'hidden',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  languageText: {
    fontSize: 16,
    color: '#222',
  },
  flag: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
  },
});

export default LanguageScreen;
