import React, { useState, useMemo } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, 
  ScrollView, StatusBar, Dimensions, Keyboard, Image, useColorScheme 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Paletas de colores para ambos temas
const colorPalettes = {
  dark: {
    background: '#121212',
    cardBackground: '#1E1E1E',
    text: '#FFFFFF',
    secondaryText: '#A0A0A0',
    inputBackground: '#2D2D2D',
    border: '#2D2D2D',
    positive: '#4CAF50',
    selectedBorder: '#4CAF50',
    button: '#4CAF50',
    icon: '#FFFFFF'
  },
  light: {
    background: '#F5F5F5',
    cardBackground: '#FFFFFF',
    text: '#333333',
    secondaryText: '#757575',
    inputBackground: '#F0F0F0',
    border: '#E0E0E0',
    positive: '#388E3C',
    selectedBorder: '#388E3C',
    button: '#388E3C',
    icon: '#333333'
  }
};

const BuyMochocoinScreen = () => {
  const theme = useColorScheme();
  const palette = colorPalettes[theme] || colorPalettes.dark;
  const styles = useMemo(() => createStyles(palette), [palette]);
  
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
      <StatusBar 
        barStyle={theme === 'dark' ? "light-content" : "dark-content"} 
        backgroundColor={palette.background} 
      />

      {/* Encabezado con botón de volver */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={palette.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mochocoin</Text>
          <Text style={styles.subtitle}>MHC</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image 
              source={require('../icon/search.png')} 
              style={[styles.icon, { tintColor: palette.icon }]} 
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={require('../icon/bell.png')} 
              style={[styles.icon, styles.iconMargin, { tintColor: palette.icon }]} 
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.balanceContainer, { backgroundColor: palette.cardBackground }]}>
          <Text style={[styles.balanceLabel, { color: palette.secondaryText }]}>Saldo Disponible</Text>
          <Text style={[styles.balanceAmount, { color: palette.text }]}>4.500 M</Text>
        </View>

        <View style={[styles.section, { backgroundColor: palette.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Comprar Mochocoin</Text>

          <View style={styles.priceContainer}>
            <Text style={[styles.priceLabel, { color: palette.secondaryText }]}>Precio actual:</Text>
            <Text style={[styles.priceValue, { color: palette.text }]}>0,50 Bs</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, { color: palette.secondaryText }]}>Cantidad a Comprar</Text>
            <View style={[styles.amountInputContainer, { backgroundColor: palette.inputBackground }]}>
              <TextInput
                style={[styles.amountInput, { color: palette.text }]}
                placeholder="0,00"
                placeholderTextColor={palette.secondaryText}
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                returnKeyType="done"
              />
              <Text style={[styles.currencySymbol, { color: palette.secondaryText }]}>Bs</Text>
            </View>
          </View>

          <Text style={[styles.banksTitle, { color: palette.text }]}>Selecciona un banco</Text>

          <View style={styles.banksGrid}>
            {banks.map((bank) => (
              <TouchableOpacity
                key={bank.id}
                style={[
                  styles.bankCard, 
                  { backgroundColor: palette.inputBackground },
                  selectedBank?.id === bank.id && [
                    styles.selectedBankCard, 
                    { borderColor: palette.selectedBorder }
                  ]
                ]}
                onPress={() => setSelectedBank(bank)}
              >
                <Text style={[styles.bankName, { color: palette.text }]}>{bank.name}</Text>
                <Text style={[styles.bankPrice, { color: palette.positive }]}>{bank.price}</Text>
                {selectedBank?.id === bank.id && (
                  <View style={[styles.selectedIndicator, { backgroundColor: palette.cardBackground }]}>
                    <Ionicons name="checkmark" size={20} color={palette.positive} />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.buyButton, { backgroundColor: palette.button }]} 
        onPress={handleBuy}
      >
        <Text style={styles.buyButtonText}>Comprar Mochocoin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const createStyles = (palette) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
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
    color: palette.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 16,
    marginTop: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconMargin: {
    marginLeft: 15,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  balanceContainer: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  section: {
    borderRadius: 16,
    padding: 25,
  },
  sectionTitle: {
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
    fontSize: 18,
    marginRight: 10,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  banksTitle: {
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
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedBankCard: {
    borderColor: palette.selectedBorder,
  },
  bankName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bankPrice: {
    fontSize: 16,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
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