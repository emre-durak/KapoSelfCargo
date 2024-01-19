import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTrackCargo = () => {
    const mockCargoData = {
      trackingNumber: 'ABC123',
      orderDate: '2024-01-14',
      paymentMethod: 'Credit Card',
      departureDate: '2024-01-15',
      estimatedDeliveryDate: '2024-01-20',
    };

    if (trackingNumber === mockCargoData.trackingNumber) {
      
      navigation.navigate('CargoDetails', {
        trackingNumber: mockCargoData.trackingNumber,
        orderDate: mockCargoData.orderDate,
        paymentMethod: mockCargoData.paymentMethod,
        departureDate: mockCargoData.departureDate,
        estimatedDeliveryDate: mockCargoData.estimatedDeliveryDate,
      });
    } else {
      alert('Cargo tracking number not found');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      {}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tracking Number"
          value={trackingNumber}
          onChangeText={(text) => setTrackingNumber(text)}
          placeholderTextColor="white" 
        />
        <Button
          title="Track Cargo"
          onPress={handleTrackCargo}
          color="#FFC0CB" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: height * 0.1,
    backgroundColor: 'black', 
  },
  logoContainer: {
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginBottom: height * 0.04,
    color: 'white', 
  },
  inputContainer: {
    width: width * 0.8,
    marginBottom: height * 0.04,
  },
  input: {
    width: '100%',
    height: height * 0.05,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,
    color: 'white', 
  },
  logo: {
    width: width * 0.8,
    height: width * 0.8,
  },
});

export default HomeScreen;
