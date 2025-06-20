import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Inicio</Text>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}