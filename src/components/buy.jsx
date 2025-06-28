import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StatusBar, Dimensions, Keyboard, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const BuyMochocoinScreen = () => {
  const navigation = useNavigation();
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

      {/* Encabezado con botón de volver */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mochocoin</Text>
          <Text style={styles.subtitle}>MHC</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image source={require('../icon/search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../icon/bell.png')} style={[styles.icon, styles.iconMargin]} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Saldo Disponible</Text>
          <Text style={styles.balanceAmount}>4.500 M</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comprar Mochocoin</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Precio actual:</Text>
            <Text style={styles.priceValue}>0,50 Bs</Text>
          </View>

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
              <Text style={styles.currencySymbol}>Bs</Text>
            </View>
          </View>

          <Text style={styles.banksTitle}>Selecciona un banco</Text>

          <View style={styles.banksGrid}>
            {banks.map((bank) => (
              <TouchableOpacity
                key={bank.id}
                style={[styles.bankCard, selectedBank?.id === bank.id && styles.selectedBankCard]}
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

      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buyButtonText}>Comprar Mochocoin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 16,
    marginTop: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  iconMargin: {
    marginLeft: 15,
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
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BuyMochocoinScreen;