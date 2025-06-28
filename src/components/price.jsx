import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native'; // Importación para navegar

const { width } = Dimensions.get('window');

const PriceScreen = () => {
  const [activeTab, setActiveTab] = useState('Estadísticas');
  const navigation = useNavigation(); // Hook de navegación

  const chartData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        data: [4.2, 4.8, 5.1, 5.5, 5.0, 5.5],
        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  const performanceData = [
    { period: "24 Horas", value: "+0.31%" },
    { period: "7 días", value: "+0.72%" },
    { period: "15 días", value: "+0.27%" },
    { period: "1 mes", value: "+0.15%" },
  ];

  const cryptoData = [
    { name: "Ethereum", symbol: "ETH/USD", price: "2.280,91", change: "+0.31%", isPositive: true },
    { name: "Litecoin", symbol: "LTC/USD", price: "90,39", change: "+2.99%", isPositive: true },
    { name: "XRP", symbol: "XRP/USD", price: "2,22", change: "-0.45%", isPositive: false },
  ];

  const newsData = [
    { id: 1, title: "Mochocoin Sube de Precio", time: "2024-01-15 14:30" },
    { id: 2, title: "Estafa de Criptomonedas", time: "2024-01-15 15:30" },
    { id: 3, title: "Mochocoin la Mejor Criptomoneda", time: "2024-01-15 17:00" },
  ];

  const mochocoinInfo = "Mochocoin es una criptomoneda creada para estabilizar la economía venezolana, ofreciendo una alternativa digital y más factible al dólar...";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mochocoin</Text>
          <Text style={styles.subtitle}>MHC</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Image source={require('../icon/search.png')} style={styles.icon} />
          <Image source={require('../icon/bell.png')} style={[styles.icon, styles.iconMargin]} />
        </View>
      </View>

      {/* Botón para ir a BuyMochocoin */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.buyButton}
          onPress={() => navigation.navigate('BuyMochocoin')}
        >
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>

      {/* Pestañas */}
      <View style={styles.tabsContainer}>
        {["Estadísticas", "Noticias", "Información"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === 'Estadísticas' && (
          <>
            <View style={styles.priceCard}>
              <View style={styles.priceInfo}>
                <Text style={styles.priceLabel}>Precio actual</Text>
                <Text style={styles.priceValue}>$50.000</Text>
                <View style={styles.priceChange}>
                  <Text style={styles.positiveChange}>+2.789</Text>
                  <Text style={styles.positiveChange}>+7.63% Hoy</Text>
                </View>
              </View>
            </View>

            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Rendimiento de MHC</Text>
              <LineChart
                data={chartData}
                width={width - 40}
                height={220}
                yAxisLabel="Bs "
                chartConfig={{
                  backgroundColor: '#1E1E1E',
                  backgroundGradientFrom: '#1E1E1E',
                  backgroundGradientTo: '#1E1E1E',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
                  labelColor: () => '#FFFFFF',
                  style: { borderRadius: 16 },
                  propsForDots: { r: "4", strokeWidth: "2", stroke: "#4CAF50" },
                }}
                bezier
                style={{ marginVertical: 8, borderRadius: 16 }}
              />
            </View>

            <View style={styles.performanceContainer}>
              <Text style={styles.sectionTitle}>Rendimiento de MHC</Text>
              <View style={styles.performanceGrid}>
                {performanceData.map((item, index) => (
                  <View key={index} style={styles.performanceItem}>
                    <Text style={styles.performancePeriod}>{item.period}</Text>
                    <Text style={styles.performanceValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.cryptoContainer}>
              <Text style={styles.sectionTitle}>Otras Criptomonedas</Text>
              {cryptoData.map((crypto, index) => (
                <View key={index} style={styles.cryptoCard}>
                  <View>
                    <Text style={styles.cryptoName}>{crypto.name}</Text>
                    <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
                  </View>
                  <View style={styles.cryptoRight}>
                    <Text style={styles.cryptoPrice}>{crypto.price}</Text>
                    <Text style={[styles.cryptoChange, crypto.isPositive ? styles.positive : styles.negative]}>
                      {crypto.change}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === 'Noticias' && (
          <View style={styles.newsContainer}>
            {newsData.map((news) => (
              <View key={news.id} style={styles.newsCard}>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <Text style={styles.newsTime}>{news.time}</Text>
              </View>
            ))}
          </View>
        )}

        {activeTab === 'Información' && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Sobre Mochocoin</Text>
            <Text style={styles.infoText}>{mochocoinInfo}</Text>
            <Image source={require('../icon/info.png')} style={styles.logo} />
          </View>
        )}
      </ScrollView>
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
    padding: 20, 
    paddingBottom: 10
  },
  titleContainer: {
    flexDirection: 'column' 
  },
  title: {
    color: '#FFFFFF', 
    fontSize: 24, 
    fontWeight: 'bold'
  },
  subtitle: { 
    color: '#A0A0A0', 
    fontSize: 16, 
    marginTop: 4
  },
  iconsContainer: { 
    flexDirection: 'row'
  },
  icon: { 
    width: 24, 
    height: 24, 
    tintColor: '#FFFFFF'
  },
  iconMargin: { 
    marginLeft: 15
  },
  buyButton: { 
    backgroundColor: '#4CAF50', 
    borderRadius: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 20
  },
  buyButtonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  tabsContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#1E1E1E', 
    borderRadius: 12, 
    marginHorizontal: 20, 
    marginBottom: 20, 
    overflow: 'hidden'
  },
  tab: { 
    flex: 1, 
    paddingVertical: 14, 
    alignItems: 'center'
  },
  activeTab: { 
    backgroundColor: '#4CAF50'
  },
  tabText: { 
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: 'bold'
  },
  activeTabText: { 
    color: '#FFFFFF'
  },
  content: { 
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  priceCard: { 
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20
  },
  priceInfo: { 
    flex: 1
  },
  priceLabel: { 
    color: '#A0A0A0', 
    fontSize: 16, 
    marginBottom: 5
  },
  priceValue: { 
    color: '#FFFFFF', 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginBottom: 5
  },
  priceChange: { 
    flexDirection: 'row'
  },
  positiveChange: { 
    color: '#4CAF50', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginRight: 15
  },
  chartContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 20
  },
  chartTitle: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  performanceContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 20
  },
  sectionTitle: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15
  },
  performanceGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  },
  performanceItem: { 
    width: '48%', 
    marginBottom: 15 },
  performancePeriod: { 
    color: '#A0A0A0', 
    fontSize: 14
  },
  performanceValue: { 
    color: '#4CAF50', 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  cryptoContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20
  },
  cryptoCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#2D2D2D'
  },
  cryptoName: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '600'
  },
  cryptoSymbol: { 
    color: '#A0A0A0', 
    fontSize: 14
  },
  cryptoRight: { 
    alignItems: 'flex-end'
  },
  cryptoPrice: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '600'
  },
  cryptoChange: { 
    fontSize: 14
  },
  positive: { 
    color: '#4CAF50'
  },
  negative: { 
    color: '#F44336'
  },
  newsContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20
  },
  newsCard: { 
    paddingVertical: 15
  },
  newsTitle: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 5
  },
  newsTime: { 
    color: '#A0A0A0', 
    fontSize: 14
  },
  infoContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20
  },
  infoTitle: { 
    color: '#FFFFFF', 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15
  },
  infoText: { 
    color: '#E0E0E0', 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 20
  },
  logo: { 
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop: 20 
  },
});

export default PriceScreen;