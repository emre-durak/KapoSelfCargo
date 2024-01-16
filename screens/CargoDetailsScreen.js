import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CargoDetailsScreen = ({ route, navigation }) => {
  const { trackingNumber, orderDate, paymentMethod, departureDate, estimatedDeliveryDate } = route.params;

  const randomLatitude = 37.5 + Math.random() * 0.5;
  const randomLongitude = -122 + Math.random() * 0.5;

  const detailsData = [
    { label: 'Order Number:', value: trackingNumber },
    { label: 'Order Date:', value: orderDate },
    { label: 'Payment Method:', value: paymentMethod },
    { label: 'Departure Date:', value: departureDate },
    { label: 'Estimated Delivery Date:', value: estimatedDeliveryDate },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargo Details</Text>
      <View style={styles.detailContainer}>
        {detailsData.map((item, index) => (
          <View key={index} style={styles.detailItem}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: randomLatitude,
            longitude: randomLongitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: randomLatitude,
              longitude: randomLongitude,
            }}
            title="Cargo Location"
          />
        </MapView>
      </View>
      <TouchableOpacity
        style={styles.liveChatButton}
        onPress={() => navigation.navigate('LiveChat')}
      >
        <Text style={styles.liveChatButtonText}>Live Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', 
  },
  detailContainer: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  mapContainer: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  liveChatButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  liveChatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CargoDetailsScreen;
