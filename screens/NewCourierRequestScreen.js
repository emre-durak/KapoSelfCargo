import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const NewCourierRequestScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [numberOfPieces, setNumberOfPieces] = useState('');
  const [weight, setWeight] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleCourierRequest = () => {
    
    if (!firstName || !lastName || !idNumber || !phoneNumber || !fromLocation || !toLocation || !numberOfPieces || !weight) {
      alert('Please fill in all required fields.');
      return;
    }

 
    const randomPrice = Math.floor(Math.random() * 100) + 50;
    setEstimatedPrice(randomPrice);
  };

  const handleCallCourier = () => {

    Alert.alert('Congratulations!', 'Your courier is on its way.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courier Request</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="ID Number"
        value={idNumber}
        onChangeText={(text) => setIdNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="From Location"
        value={fromLocation}
        onChangeText={(text) => setFromLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="To Location"
        value={toLocation}
        onChangeText={(text) => setToLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Pieces"
        value={numberOfPieces}
        onChangeText={(text) => setNumberOfPieces(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleCourierRequest}
      >
        <Text style={styles.buttonText}>Request Courier</Text>
      </TouchableOpacity>

      {estimatedPrice !== null && (
        <>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Estimated Price:</Text>
            <Text style={styles.priceValue}>{`$${estimatedPrice}`}</Text>
          </View>
          <TouchableOpacity
            style={styles.callCourierButton}
            onPress={handleCallCourier}
          >
            <Text style={styles.buttonText}>Call Courier</Text>
          </TouchableOpacity>
        </>
      )}
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
  callCourierButton: {
    backgroundColor: 'green',
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
  priceContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  priceText: {
    color: 'white',
    fontSize: 18,
  },
  priceValue: {
    color: '#3498db',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NewCourierRequestScreen;
