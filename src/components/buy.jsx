import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StatusBar, Dimensions, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const BuyMochocoinScreen = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState(null);

  const banks = [
    { id: 1, name: 'BNC', price: '4.000 Bs' },
    { id: 2, name: 'Provincial', price: '4.050 Bs' },
    { id: 3, name: 'Banesco', price: '4.000 Bs' },
    { id: 4, name: 'Bancrecer', price: '4.000 Bs' },
  ];

  const handleBuy = () => {
    if (!amount) {
      alert('Por favor ingresa la cantidad a comprar');
      return;
    }
    
    if (!selectedBank) {
      alert('Por favor selecciona un banco');
      return;
    }
    
    Keyboard.dismiss();
    alert(`Compra de ${amount} Mochocoin realizada con éxito usando ${selectedBank.name}`);
    setAmount('');
    setSelectedBank(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Mochocoin</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Saldo disponible */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Saldo Disponible</Text>
          <Text style={styles.balanceAmount}>4.500 M</Text>
        </View>
        
        {/* Sección de compra */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comprar Mochocoin</Text>
          
          {/* Precio actual */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Precio actual:</Text>
            <Text style={styles.priceValue}>0,50 Bs</Text>
          </View>
          
          {/* Cantidad a comprar */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cantidad a Comprar</Text>
            <View style={styles.amountInputContainer}>
              <TextInput
                style={styles.amountInput}
                placeholder="0,00"
                placeholderTextColor="#A0A0A0"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                returnKeyType="done"
              />
              <Text style={styles.currencySymbol}>M</Text>
            </View>
          </View>
          
          {/* Bancos disponibles */}
          <Text style={styles.banksTitle}>Selecciona un banco</Text>
          
          <View style={styles.banksGrid}>
            {banks.map((bank) => (
              <TouchableOpacity 
                key={bank.id}
                style={[
                  styles.bankCard, 
                  selectedBank?.id === bank.id && styles.selectedBankCard
                ]}
                onPress={() => setSelectedBank(bank)}
              >
                <Text style={styles.bankName}>{bank.name}</Text>
                <Text style={styles.bankPrice}>{bank.price}</Text>
                {selectedBank?.id === bank.id && (
                  <View style={styles.selectedIndicator}>
                    <Ionicons name="checkmark" size={20} color="#4CAF50" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/* Botón de compra */}
      <TouchableOpacity 
        style={styles.buyButton}
        onPress={handleBuy}
      >
        <Text style={styles.buyButtonText}>Comprar Mochocoin</Text>
      </TouchableOpacity>
      
      {/* Barra de navegación inferior */}
      <View style={styles.bottomNav}>
        <NavItem title="Inicio" isActive={false} icon="home" />
        <NavItem title="Transacciones" isActive={false} icon="home" />
        <NavItem title="Precio" isActive={true} icon="chart" />
        <NavItem title="Historial" isActive={false} icon="history" />
        <NavItem title="Usuario" isActive={false} icon="user" />
      </View>
    </SafeAreaView>
  );
};

// Componente para ítem de navegación
const NavItem = ({ title, isActive, icon }) => (
  <View style={styles.navItem}>
    <View style={[styles.navIcon, isActive && styles.activeNavIcon]}>
      <Ionicons 
        name={icon} 
        size={24} 
        color={isActive ? "#4CAF50" : "#A0A0A0"} 
      />
    </View>
    <Text style={[styles.navText, isActive && styles.activeNavText]}>{title}</Text>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  time: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  balanceContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 5,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 25,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  priceLabel: {
    color: '#A0A0A0',
    fontSize: 18,
    marginRight: 10,
  },
  priceValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 10,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  amountInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  currencySymbol: {
    color: '#A0A0A0',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
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
    width: width / 2 - 40,
    backgroundColor: '#2D2D2D',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedBankCard: {
    borderColor: '#4CAF50',
    backgroundColor: '#2D2D2D',
  },
  bankName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bankPrice: {
    color: '#4CAF50',
    fontSize: 16,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1E1E1E',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    width: width / 4 - 20,
  },
  navIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeNavIcon: {
    backgroundColor: '#2D2D2D',
  },
  navText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  activeNavText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default BuyMochocoinScreen;