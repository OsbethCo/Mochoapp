import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const PriceScreen = () => {
  const [activeTab, setActiveTab] = useState('Estadísticas');
  
  // Datos para el gráfico
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

  // Datos de rendimiento
  const performanceData = [
    { period: "34 Horas", value: "+0.31%" },
    { period: "7 días", value: "+0.72%" },
    { period: "15 días", value: "+0.27%" },
    { period: "1 mes", value: "+0.15%" },
  ];

  // Otras criptomonedas
  const cryptoData = [
    { name: "Ethereum", symbol: "ETH/USD", price: "2.280,91", change: "+0.31%", isPositive: true },
    { name: "Litecoin", symbol: "LTC", price: "90,39", change: "+2.99%", isPositive: true },
    { name: "XRP", symbol: "XRP", price: "2,22", change: "-0.45%", isPositive: false },
  ];

  // Noticias
  const newsData = [
    { id: 1, title: "Mechocoin Sube de Precio", time: "2024-01-15 14:30" },
    { id: 2, title: "Estafa de Criptomonedas", time: "2024-01-15 15:30" },
    { id: 3, title: "Mochocoin la Mejor Criptomoneda", time: "2024-01-15 17:00" },
  ];

  // Información sobre Mochocoin
  const mochocoinInfo = "Mochocoin es una criptomoneda creada para estabilizar la economía venezolana, ofreciendo una alternativa digital y más factible al dólar. Nuestro objetivo es impulsar el uso de criptomonedas para que los venezolanos tengan una opción estable y confiable en sus transacciones diarias, mejorando así su poder adquisitivo y promoviendo la inclusión financiera.";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <Text style={styles.title}>Mochocoin</Text>
        <TouchableOpacity>
          <Image 
            source={require('./assets/search.png')} 
            style={styles.icon} 
          />
        </TouchableOpacity>
      </View>
      
      {/* Pestañas */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Estadísticas' && styles.activeTab]}
          onPress={() => setActiveTab('Estadísticas')}
        >
          <Text style={[styles.tabText, activeTab === 'Estadísticas' && styles.activeTabText]}>Estadísticas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Noticias' && styles.activeTab]}
          onPress={() => setActiveTab('Noticias')}
        >
          <Text style={[styles.tabText, activeTab === 'Noticias' && styles.activeTabText]}>Noticias</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Información' && styles.activeTab]}
          onPress={() => setActiveTab('Información')}
        >
          <Text style={[styles.tabText, activeTab === 'Información' && styles.activeTabText]}>Información</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === 'Estadísticas' && (
          <>
            {/* Precio actual */}
            <View style={styles.priceCard}>
              <Text style={styles.priceLabel}>Precio actual</Text>
              <Text style={styles.priceValue}>5.50.000</Text>
              <View style={styles.priceChange}>
                <Text style={styles.positiveChange}>+2.789</Text>
                <Text style={styles.positiveChange}>+7.63% Hoy</Text>
              </View>
            </View>
            
            {/* Gráfico */}
            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Rendimiento de MHC</Text>
              <LineChart
                data={chartData}
                width={width - 40}
                height={220}
                yAxisLabel="Bs "
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: '#1E1E1E',
                  backgroundGradientFrom: '#1E1E1E',
                  backgroundGradientTo: '#1E1E1E',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "4",
                    strokeWidth: "2",
                    stroke: "#4CAF50"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
            
            {/* Rendimiento */}
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
            
            {/* Otras criptomonedas */}
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
                <Text style={styles.newsTime}>{news.time}</Text>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <View style={styles.newsDivider} />
              </View>
            ))}
          </View>
        )}
        
        {activeTab === 'Información' && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Sobre Mochocoin</Text>
            <Text style={styles.infoText}>{mochocoinInfo}</Text>
            
            <View style={styles.statsCard}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>5.50.000</Text>
                <Text style={styles.statLabel}>Precio Actual</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>+7.63%</Text>
                <Text style={styles.statLabel}>Cambio 24h</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>4.500M</Text>
                <Text style={styles.statLabel}>Volumen 24h</Text>
              </View>
            </View>
            
            <Text style={styles.sectionTitle}>Características Clave</Text>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Text style={styles.iconText}>✓</Text>
                </View>
                <Text style={styles.featureText}>Estabilidad económica para Venezuela</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Text style={styles.iconText}>✓</Text>
                </View>
                <Text style={styles.featureText}>Alternativa digital al dólar</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Text style={styles.iconText}>✓</Text>
                </View>
                <Text style={styles.featureText}>Transacciones rápidas y seguras</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Text style={styles.iconText}>✓</Text>
                </View>
                <Text style={styles.featureText}>Bajas comisiones de transacción</Text>
              </View>
            </View>
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
    paddingBottom: 10,
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
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  priceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  priceLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 5,
  },
  priceValue: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  priceChange: {
    flexDirection: 'row',
    marginTop: 10,
  },
  positiveChange: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  negativeChange: {
    color: '#F44336',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  chartContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  chartTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  performanceContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  performanceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  performanceItem: {
    width: '48%',
    marginBottom: 15,
  },
  performancePeriod: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  performanceValue: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
  },
  cryptoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  cryptoName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cryptoSymbol: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  cryptoRight: {
    alignItems: 'flex-end',
  },
  cryptoPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cryptoChange: {
    fontSize: 14,
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#F44336',
  },
  newsContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
  },
  newsCard: {
    paddingVertical: 15,
  },
  newsTime: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 5,
  },
  newsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  newsDivider: {
    height: 1,
    backgroundColor: '#2D2D2D',
    marginTop: 15,
  },
  infoContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoText: {
    color: '#E0E0E0',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2D2D2D',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  featureList: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
});

export default PriceScreen;