
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: 1, type: 'enviado', description: 'Enviado a Carlos Perez', amount: -5000, date: '2024-01-15 14:30' },
  { id: 2, type: 'recibido', description: 'Recibido de Miguel Petit', amount: 5200, date: '2024-01-15 14:30' },
  { id: 3, type: 'compra', description: 'Compra de Mochicoin', amount: 1000, date: '2024-01-15 14:30' },
  { id: 4, type: 'venta', description: 'Venta de Mochicoin', amount: -2000, date: '2024-01-15 14:30' },
  { id: 5, type: 'enviado', description: 'Enviado a Ana Jimenez', amount: -5000, date: '2024-01-15 14:30' },
  { id: 6, type: 'enviado', description: 'Enviado a Juan Molina', amount: -1600, date: '2024-01-15 14:30' },
];

const HistoryScreen = () => {
  const [filter, setFilter] = useState('todas');
  
  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'enviados') return transaction.type === 'enviado';
    if (filter === 'recibidos') return transaction.type === 'recibido';
    if (filter === 'trading') return transaction.type === 'compra' || transaction.type === 'venta';
    return true; // todas
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setFilter('todas')}><Text style={styles.tab}>Todas</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('enviados')}><Text style={styles.tab}>Enviados</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('recibidos')}><Text style={styles.tab}>Recibidos</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('trading')}><Text style={styles.tab}>Trading</Text></TouchableOpacity>
      </View>
      <ScrollView>
        {filteredTransactions.map(transaction => (
          <View key={transaction.id} style={styles.transaction}>
            <Text style={styles.description}>{transaction.description}</Text>
            <Text style={[styles.amount, transaction.amount < 0 ? styles.negative : styles.positive]}>
              {transaction.amount}
            </Text>
            <Text style={styles.date}>{transaction.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: '#007BFF',
  },
  transaction: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default HistoryScreen;