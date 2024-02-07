import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTrackCargo = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      const response = await axios.get(`http://kaposelfcargo.somee.com/api/Shipment/SearchShipment?trackingNumber=${trackingNumber}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        }
      });

      const data = response.data;

      if (data.responseCode === 200) {
        const cargoData = data.data[0];
        navigation.navigate('CargoDetails', {
          trackingNumber: cargoData.trackingNumber,
          sender: cargoData.sender,
          recipient: cargoData.recipient,
          shippingCompany: cargoData.shippingCompany,
          shipmentStatus: cargoData.shipmentStatus,
          shipmentDate: cargoData.shipmentDate,
          estimatedDeliveryDate: cargoData.estimatedDeliveryDate,
          deliveryDate: cargoData.deliveryDate,
          totalCost: cargoData.totalCost,
        });
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while fetching cargo data.');
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
