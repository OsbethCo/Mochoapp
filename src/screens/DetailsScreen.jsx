import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Detalles</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}