import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NewCourierRequestScreen = () => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [weight, setWeight] = useState('');
  const [shipmentDate, setShipmentDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryUrgency, setDeliveryUrgency] = useState('');
  const [status, setStatus] = useState('');
  const navigation = useNavigation();

  const handleCourierRequest = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await axios.post('http://kaposelfcargo.somee.com/api/CourierRequest/AddCourierRequest', {
        sender,
        recipient,
        shipmentType,
        weight,
        shipmentDate,
        deliveryAddress,
        deliveryUrgency,
        status
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        }
      });

      console.log(response.data);
      setStatus(response.data.data);
      Alert.alert('Success', 'Your courier is on its way!');
      navigation.navigate('DashboardScreen'); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Courier request failed. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courier Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Sender"
        value={sender}
        onChangeText={(text) => setSender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipient"
        value={recipient}
        onChangeText={(text) => setRecipient(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shipment Type"
        value={shipmentType}
        onChangeText={(text) => setShipmentType(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shipment Date"
        value={shipmentDate}
        onChangeText={(text) => setShipmentDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChangeText={(text) => setDeliveryAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Urgency"
        value={deliveryUrgency}
        onChangeText={(text) => setDeliveryUrgency(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={(text) => setStatus(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleCourierRequest}
      >
        <Text style={styles.buttonText}>Request Courier</Text>
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
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NewCourierRequestScreen;
