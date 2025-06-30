import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
  ScrollView, KeyboardAvoidingView, Platform, Keyboard, useColorScheme,
} from 'react-native';

const TransactionScreen = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const [activeTab, setActiveTab] = useState('Comprar');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  const banks = [
    { id: 1, name: 'BNC', price: '4.000 Bs' },
    { id: 2, name: 'Provincial', price: '4.050 Bs' },
    { id: 3, name: 'Baresco', price: '4.000 Bs' },
    { id: 4, name: 'Bancrocer', price: '4.000 Bs' },
  ];

  const handleTransaction = () => {
    Keyboard.dismiss();
    alert(`Transacción de ${activeTab} realizada con éxito!`);
    setBuyAmount('');
    setSellAmount('');
    setSendAmount('');
    setRecipient('');
    setNote('');
  };

  const styles = getStyles(isDark);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transacciones</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Disponible</Text>
        <Text style={styles.balanceAmount}>4.500 ₫</Text>
      </View>

      <View style={styles.tabsContainer}>
        {['Comprar', 'Vender', 'Enviar'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {(activeTab === 'Comprar' || activeTab === 'Vender') && (
            <View style={styles.tabContent}>
              <Text style={styles.tabTitle}>
                ✔ {activeTab} Mochocoin
              </Text>
              <Text style={styles.priceLabel}>Precio actual: 0,50 Bs</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                  Cantidad a {activeTab}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor={isDark ? '#A0A0A0' : '#666'}
                  keyboardType="numeric"
                  value={activeTab === 'Comprar' ? buyAmount : sellAmount}
                  onChangeText={activeTab === 'Comprar' ? setBuyAmount : setSellAmount}
                />
              </View>

              <Text style={styles.banksTitle}>Bancos Disponibles</Text>
              <View style={styles.banksGrid}>
                {banks.map(bank => (
                  <View key={bank.id} style={styles.bankCard}>
                    <Text style={styles.bankName}>{bank.name}</Text>
                    <Text style={styles.bankPrice}>{bank.price}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === 'Enviar' && (
            <View style={styles.tabContent}>
              <Text style={styles.tabTitle}>✔ Enviar Mochocoin</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Destinatario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Correo o @usuario"
                  placeholderTextColor={isDark ? '#A0A0A0' : '#666'}
                  value={recipient}
                  onChangeText={setRecipient}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Cantidad</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor={isDark ? '#A0A0A0' : '#666'}
                  keyboardType="numeric"
                  value={sendAmount}
                  onChangeText={setSendAmount}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nota (Opcional)</Text>
                <TextInput
                  style={[styles.input, styles.noteInput]}
                  placeholder="Agregar una nota..."
                  placeholderTextColor={isDark ? '#A0A0A0' : '#666'}
                  multiline
                  numberOfLines={3}
                  value={note}
                  onChangeText={setNote}
                />
              </View>
            </View>
          )}
        </ScrollView>

        <TouchableOpacity
          style={[styles.actionButton, !(buyAmount || sellAmount || sendAmount) && styles.disabledButton]}
          onPress={handleTransaction}
          disabled={!(buyAmount || sellAmount || sendAmount)}
        >
          <Text style={styles.actionButtonText}>
            {activeTab} Mochocoin
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const getStyles = (isDark) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDark ? '#121212' : '#F9F9F9',
    padding: 20,
    paddingTop: 30,
  },
  header: { marginBottom: 30 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDark ? '#FFFFFF' : '#000000',
  },
  balanceContainer: {
    backgroundColor: isDark ? '#1E1E1E' : '#EAEAEA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  balanceAmount: {
    color: isDark ? '#FFFFFF' : '#000',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: isDark ? '#1E1E1E' : '#E0E0E0',
    borderRadius: 12,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
  },
  tabText: {
    color: '#A0A0A0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  contentContainer: { flex: 1 },
  tabContent: {
    backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  tabTitle: {
    color: isDark ? '#FFFFFF' : '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: { marginBottom: 20 },
  inputLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: isDark ? '#2D2D2D' : '#F2F2F2',
    borderRadius: 10,
    padding: 16,
    color: isDark ? '#FFFFFF' : '#000000',
    fontSize: 18,
  },
  noteInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  banksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: isDark ? '#FFFFFF' : '#000000',
    marginBottom: 10,
  },
  banksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankCard: {
    width: '48%',
    backgroundColor: isDark ? '#2D2D2D' : '#EFEFEF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
  },
  bankName: {
    color: isDark ? '#FFFFFF' : '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bankPrice: {
    color: '#4CAF50',
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#2E7D32',
    opacity: 0.7,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactionScreen;
