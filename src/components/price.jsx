import React, { useState, useMemo } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, 
  TouchableOpacity, Image, Dimensions, useColorScheme 
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Paletas de colores para ambos temas
const colorPalettes = {
  dark: {
    background: '#121212',
    cardBackground: '#1E1E1E',
    text: '#FFFFFF',
    secondaryText: '#A0A0A0',
    positive: '#4CAF50',
    negative: '#F44336',
    border: '#2D2D2D',
    tabInactive: '#A0A0A0',
    chartGrid: 'rgba(255, 255, 255, 0.2)',
    chartText: '#FFFFFF',
    chartBackground: '#1E1E1E',
  },
  light: {
    background: '#F5F5F5',
    cardBackground: '#FFFFFF',
    text: '#333333',
    secondaryText: '#757575',
    positive: '#388E3C',
    negative: '#D32F2F',
    border: '#E0E0E0',
    tabInactive: '#757575',
    chartGrid: 'rgba(0, 0, 0, 0.2)',
    chartText: '#333333',
    chartBackground: '#FFFFFF',
  }
};

const PriceScreen = () => {
  const theme = useColorScheme();
  const palette = colorPalettes[theme] || colorPalettes.dark;
  const [activeTab, setActiveTab] = useState('Estadísticas');
  const navigation = useNavigation();

  const styles = useMemo(() => createStyles(palette), [palette]);

  const chartData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        data: [4.2, 4.8, 5.1, 5.5, 5.0, 5.5],
        color: (opacity = 1) => `rgba(${theme === 'dark' ? '76, 175, 80' : '56, 142, 60'}, ${opacity})`,
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
      <StatusBar 
        barStyle={theme === 'dark' ? "light-content" : "dark-content"} 
        backgroundColor={palette.background} 
      />
      
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
          onPress={() => navigation.navigate('BuyScreen')}
        >
          <Text style={styles.buyButtonText}>+ Comprar</Text>
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
                      backgroundColor: palette.chartBackground,
                      backgroundGradientFrom: palette.chartBackground,
                      backgroundGradientTo: palette.chartBackground,
                      decimalPlaces: 2,
                      color: (opacity = 1) => `rgba(${theme === 'dark' ? '76, 175, 80' : '56, 142, 60'}, ${opacity})`,
                      labelColor: () => palette.chartText,
                      style: { borderRadius: 16 },
                      propsForDots: { 
                        r: "4", 
                        strokeWidth: "2", 
                        stroke: theme === 'dark' ? "#4CAF50" : "#388E3C" 
                      },
                      propsForLabels: {
                        fontSize: 10
                      },
                      propsForBackgroundLines: {
                        stroke: palette.chartGrid
                      }
                    }}
                    bezier
                    style={{ marginVertical: 5, borderRadius: 16, marginHorizontal: -20 }}
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

const createStyles = (palette) => StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: palette.background,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20, 
    paddingBottom: 20
  },
  titleContainer: {
    flexDirection: 'column' 
  },
  title: {
    color: palette.text, 
    fontSize: 24, 
    fontWeight: 'bold'
  },
  subtitle: { 
    color: palette.secondaryText, 
    fontSize: 16, 
    marginTop: 4
  },
  iconsContainer: { 
    flexDirection: 'row'
  },
  icon: { 
    width: 24, 
    height: 24, 
    tintColor: palette.text
  },
  iconMargin: { 
    marginLeft: 15
  },
  buyButton: { 
    backgroundColor: palette.positive, 
    borderRadius: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 25,
  },
  buyButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabsContainer: { 
    flexDirection: 'row', 
    backgroundColor: palette.cardBackground, 
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
    color: palette.tabInactive,
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
    backgroundColor: palette.cardBackground,
    borderRadius: 16,
    padding: 20, 
    marginBottom: 20
  },
  priceInfo: { 
    flex: 1
  },
  priceLabel: { 
    color: palette.secondaryText, 
    fontSize: 16, 
    marginBottom: 5
  },
  priceValue: { 
    color: palette.text, 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginBottom: 5
  },
  priceChange: { 
    flexDirection: 'row'
  },
  positiveChange: { 
    color: palette.positive, 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginRight: 15
  },
  chartContainer: { 
    backgroundColor: palette.cardBackground, 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 20
  },
  chartTitle: { 
    color: palette.text, 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  performanceContainer: { 
    backgroundColor: palette.cardBackground, 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 20
  },
  performanceGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  },
  performanceItem: { 
    width: '48%', 
    marginBottom: 15
  },
  cryptoSymbol: { 
    color: '#A0A0A0', 
    fontSize: 14
  },
  cryptoRight: { 
    alignItems: 'flex-end'
  },
  cryptoChange: { 
    fontSize: 14
  },
  newsContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20
  },
  infoContainer: { 
    backgroundColor: '#1E1E1E', 
    borderRadius: 16, 
    padding: 20
  },
  logo: { 
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop: 20 
  },
  sectionTitle: { 
    color: palette.text, 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15
  },
  performancePeriod: { 
    color: palette.secondaryText, 
    fontSize: 14
  },
  performanceValue: { 
    color: palette.positive, 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  cryptoContainer: { 
    backgroundColor: palette.cardBackground, 
    borderRadius: 16, 
    padding: 20
  },
  cryptoCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: palette.border
  },
  cryptoName: { 
    color: palette.text, 
    fontSize: 16, 
    fontWeight: '600'
  },
  cryptoSymbol: { 
    color: palette.secondaryText, 
    fontSize: 14
  },
  cryptoPrice: { 
    color: palette.text, 
    fontSize: 16, 
    fontWeight: '600'
  },
  positive: { 
    color: palette.positive
  },
  negative: { 
    color: palette.negative
  },
  newsCard: { 
    paddingVertical: 15
  },
  newsTitle: { 
    color: palette.text, 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 5
  },
  newsTime: { 
    color: palette.secondaryText, 
    fontSize: 14
  },
  infoTitle: { 
    color: palette.text, 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15
  },
  infoText: { 
    color: palette.text, 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 20
  },
});

export default PriceScreen;