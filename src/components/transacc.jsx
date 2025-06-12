import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

const TransactionScreen = () => {
  const [activeTab, setActiveTab] = useState('Comprar');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');

  // Datos de bancos para compra/venta
  const banks = [
    { id: 1, name: 'BNC', price: '4.000 Bs' },
    { id: 2, name: 'Provincial', price: '4.050 Bs' },
    { id: 3, name: 'Baresco', price: '4.000 Bs' },
    { id: 4, name: 'Bancrocer', price: '4.000 Bs' },
  ];

  // Manejar las transacciones
  const handleTransaction = () => {
    Keyboard.dismiss();
    // Aquí iría la lógica de la transacción
    alert(`Transacción de ${activeTab} realizada con éxito!`);
    
    // Resetear formularios
    if (activeTab === 'Comprar') setBuyAmount('');
    if (activeTab === 'Vender') setSellAmount('');
    if (activeTab === 'Enviar') {
      setSendAmount('');
      setRecipient('');
      setNote('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado con hora simulada */}
      <View style={styles.header}>
        <Text style={styles.title}>Transacciones</Text>
      </View>

      {/* Saldo disponible */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Disponible</Text>
        <Text style={styles.balanceAmount}>4.500 ₫</Text>
      </View>

      {/* Pestañas de transacción */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Comprar' && styles.activeTab]}
          onPress={() => setActiveTab('Comprar')}
        >
          <Text style={[styles.tabText, activeTab === 'Comprar' && styles.activeTabText]}>Comprar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Vender' && styles.activeTab]}
          onPress={() => setActiveTab('Vender')}
        >
          <Text style={[styles.tabText, activeTab === 'Vender' && styles.activeTabText]}>Vender</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Enviar' && styles.activeTab]}
          onPress={() => setActiveTab('Enviar')}
        >
          <Text style={[styles.tabText, activeTab === 'Enviar' && styles.activeTabText]}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido de las pestañas */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {activeTab === 'Comprar' && (
            <View style={styles.tabContent}>
              <Text style={styles.tabTitle}>✔ Comprar Mochocoin</Text>
              
              <Text style={styles.priceLabel}>Precio actual: 0,50 Bs</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Cantidad a Comprar</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor="#A0A0A0"
                  keyboardType="numeric"
                  value={buyAmount}
                  onChangeText={setBuyAmount}
                />
              </View>
              
              <Text style={styles.banksTitle}>Bancos Disponibles</Text>
              
              <View style={styles.banksGrid}>
                {banks.map((bank) => (
                  <View key={bank.id} style={styles.bankCard}>
                    <Text style={styles.bankName}>{bank.name}</Text>
                    <Text style={styles.bankPrice}>{bank.price}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {activeTab === 'Vender' && (
            <View style={styles.tabContent}>
              <Text style={styles.tabTitle}>✔ Vender Mochocoin</Text>
              
              <Text style={styles.balanceInfo}>Saldo Disponible: 4.500 ₫</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Cantidad a Vender</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor="#A0A0A0"
                  keyboardType="numeric"
                  value={sellAmount}
                  onChangeText={setSellAmount}
                />
              </View>
              
              <Text style={styles.banksTitle}>Bancos Disponibles</Text>
              
              <View style={styles.banksGrid}>
                {banks.map((bank) => (
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
                  placeholder="Correo directo rico o @usuario"
                  placeholderTextColor="#A0A0A0"
                  value={recipient}
                  onChangeText={setRecipient}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Cantidad</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0,00"
                  placeholderTextColor="#A0A0A0"
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
                  placeholderTextColor="#A0A0A0"
                  multiline
                  numberOfLines={3}
                  value={note}
                  onChangeText={setNote}
                />
              </View>
            </View>
          )}
        </ScrollView>
        
        {/* Botón de acción */}
        <TouchableOpacity 
          style={[styles.actionButton, !(buyAmount || sellAmount || sendAmount) && styles.disabledButton]}
          onPress={handleTransaction}
          disabled={!(buyAmount || sellAmount || sendAmount)}
        >
          <Text style={styles.actionButtonText}>
            {activeTab === 'Comprar' && 'Comprar Mochocoin'}
            {activeTab === 'Vender' && 'Vender Mochocoin'}
            {activeTab === 'Enviar' && 'Enviar Mochocoin'}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
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
  contentContainer: {
    flex: 1,
  },
  tabContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  tabTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 20,
  },
  balanceInfo: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 18,
  },
  noteInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  banksTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  banksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankCard: {
    width: '48%',
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
  },
  bankName: {
    color: '#FFFFFF',
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