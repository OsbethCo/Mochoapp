import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Switch } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const NotificationsScreen = () => {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);


  const notifications = [
    {
      id: 1,
      icon: <MaterialIcons name="check-circle" size={24} color="#00C853" />,
      title: 'Transacción recibida',
      description: '0.003 BTC desde 0x4a...',
      time: 'Hace 10 minutos',
      unread: true
    },
    {
      id: 2,
      icon: <MaterialIcons name="warning" size={24} color="#F44336" />,
      title: 'Alerta de precio',
      description: 'BTC cayó 5% hoy',
      time: 'Hoy, 08:43 AM',
      unread: false
    },
    {
      id: 3,
      icon: <FontAwesome5 name="exclamation-circle" size={24} color="#FF9800" />,
      title: 'Inicio de sesión sospechoso',
      description: 'IPs desconocidas detectadas',
      time: 'Ayer, 11:12 PM',
      unread: false,
      showMore: true
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor="#FFFFFF" />

      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text style={styles.title}>Notificaciones y alertas</Text>
      </View>

      {/* Switch de notificaciones */}
      <View style={styles.toggleContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Notificaciones Activas</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
            trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
            thumbColor="#ffffff"
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Marketing</Text>
          <Switch
            value={marketingEnabled}
            onValueChange={() => setMarketingEnabled(!marketingEnabled)}
            trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* Filtros */}
      <View style={styles.filters}>
        {['Todo', 'No leído', 'Leído'].map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setActiveFilter(filter)}
            style={styles.filterButton}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText
              ]}
            >
              {filter}
            </Text>
            {filter === 'No leído' && (
              <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
            )}
            {activeFilter === filter && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de notificaciones */}
      <ScrollView contentContainerStyle={styles.notificationsList}>
        {notifications.map((item) => (
          <View key={item.id} style={styles.notificationCard}>
            <View style={styles.icon}>{item.icon}</View>
            <View style={{ flex: 1 }}>
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                {item.unread && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.notificationDescription}>{item.description}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
              {item.showMore && (
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreText}>Ver más</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  toggleContainer: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    margin: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: {
    fontSize: 15,
    color: '#000',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterButton: {
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#888',
  },
  activeFilterText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  underline: {
    height: 3,
    backgroundColor: '#4CAF50',
    width: '100%',
    marginTop: 4,
    borderRadius: 2,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  notificationsList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
    justifyContent: 'center',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginLeft: 8,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  moreButton: {
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  moreText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default NotificationsScreen;
