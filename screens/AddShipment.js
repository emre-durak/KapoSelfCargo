import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [shippingCompany, setShippingCompany] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [shipmentDate, setShipmentDate] = useState('');
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const navigation = useNavigation();
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken !== null) {
        setToken(userToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddShipment = async () => {
    try {
      const shipmentData = {
        trackingNumber: trackingNumber,
        sender: sender,
        recipient: recipient,
        shippingCompany: shippingCompany,
        shipmentStatus: shipmentStatus,
        shipmentDate: shipmentDate,
        estimatedDeliveryDate: estimatedDeliveryDate,
        deliveryDate: deliveryDate,
        totalCost: totalCost
      };

      const response = await fetch('http://kaposelfcargo.somee.com/api/Shipment/AddShipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(shipmentData)
      });
      

      const responseData = await response.json();
      console.log(responseData); 

      if (response.status === 200 && responseData.responseCode === 200) {
        Alert.alert('Success', responseData.message || 'Shipment added successfully', [
          { text: 'OK', onPress: () => navigation.navigate('DashboardScreen') },
        ]);
      } else {
        throw new Error(responseData.message || 'Failed to add shipment');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message || 'Failed to add shipment. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Shipment</Text>
      <TextInput
        style={styles.input}
        placeholder="Tracking Number"
        value={trackingNumber}
        onChangeText={text => setTrackingNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sender"
        value={sender}
        onChangeText={text => setSender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipient"
        value={recipient}
        onChangeText={text => setRecipient(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shipping Company"
        value={shippingCompany}
        onChangeText={text => setShippingCompany(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shipment Status"
        value={shipmentStatus}
        onChangeText={text => setShipmentStatus(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shipment Date"
        value={shipmentDate}
        onChangeText={text => setShipmentDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estimated Delivery Date"
        value={estimatedDeliveryDate}
        onChangeText={text => setEstimatedDeliveryDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Date"
        value={deliveryDate}
        onChangeText={text => setDeliveryDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Cost"
        value={totalCost}
        onChangeText={text => setTotalCost(text)}
      />
      <Button
        title="Add Shipment"
        onPress={handleAddShipment}
      />
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
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddShipment;
