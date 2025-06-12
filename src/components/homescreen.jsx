import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.greeting}>iHola Usuario!</Text>
          <Text style={styles.welcome}>Bienvenido a Mochocoin</Text>
        </View>

        {/* Saldo */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Saldo Disponible</Text>
          <Text style={styles.balanceAmount}>4.500M</Text>
        </View>

        {/* Lista de Criptomonedas */}
        <CryptoItem 
          name="Ethereum" 
          amount="2.260,91" 
          pair="ETH / USD" 
          change="0,31%" 
          isPositive={true}
        />
        
        <CryptoItem 
          name="Binance" 
          amount="668,51" 
          pair="BNB / USD" 
          change="0,54%" 
          isPositive={true}
        />
        
        <CryptoItem 
          name="Litecoin" 
          amount="90,39" 
          pair="LTC / USD" 
          change="2,99%" 
          isPositive={true}
        />
        
        <CryptoItem 
          name="Ethereum" 
          amount="2.260,91" 
          pair="ETH / USD" 
          change="0,31%" 
          isPositive={true}
        />
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNav}>
        <NavItem title="Inicio" isActive={true} />
        <NavItem title="Transacciones" />
        <NavItem title="Precio" />
        <NavItem title="Historial" />
        <NavItem title="Usuario" />
      </View>
    </SafeAreaView>
  );
};

// Componente para ítem de criptomoneda
const CryptoItem = ({ name, amount, pair, change, isPositive }) => (
  <View style={styles.cryptoCard}>
    <View>
      <Text style={styles.cryptoName}>{name}</Text>
      <Text style={styles.cryptoPair}>{pair}</Text>
    </View>
    <View style={styles.cryptoRight}>
      <Text style={styles.cryptoAmount}>{amount}</Text>
      <Text style={[styles.cryptoChange, isPositive ? styles.positive : styles.negative]}>
        {change}
      </Text>
    </View>
  </View>
);

// Componente para ítem de navegación
const NavItem = ({ title, isActive = false }) => (
  <View style={styles.navItem}>
    <Text style={[styles.navText, isActive && styles.activeNavText]}>{title}</Text>
    {isActive && <View style={styles.activeIndicator} />}
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  welcome: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 5,
  },
  balanceContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
  },
  balanceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cryptoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  cryptoName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  cryptoPair: {
    color: '#A0A0A0',
    fontSize: 14,
    marginTop: 5,
  },
  cryptoRight: {
    alignItems: 'flex-end',
  },
  cryptoAmount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  cryptoChange: {
    fontSize: 14,
    marginTop: 5,
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#F44336',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    backgroundColor: '#1E1E1E',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  activeNavText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#4CAF50',
    marginTop: 5,
  },
});

export default App;