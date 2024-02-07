import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = (buttonText) => {
    if (buttonText === 'Kargom Nerede?') {
      navigation.navigate('Home');
    } else if (buttonText === 'Kurye Talep Et') {
      navigation.navigate('NewCourierRequest');
    } else if (buttonText === 'Arşiv') {
      navigation.navigate('ArchiveScreen'); 
    } else if (buttonText === 'Kargo Ekle') { 
      navigation.navigate('AddShipment'); 
    } else {
      alert(`Button "${buttonText}" pressed!`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Kargom Nerede?')}
      >
        <FontAwesome name="question-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Where is My Cargo?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Kurye Talep Et')}
      >
        <FontAwesome name="truck" size={24} color="white" />
        <Text style={styles.buttonText}>Request Courier</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Arşiv')}
      >
        <FontAwesome name="archive" size={24} color="white" />
        <Text style={styles.buttonText}>Archive</Text>
      </TouchableOpacity>
      {}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Kargo Ekle')}
      >
        <FontAwesome name="plus" size={24} color="white" />
        <Text style={styles.buttonText}>Add Shipment</Text>
      </TouchableOpacity>
      {}
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
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DashboardScreen;
