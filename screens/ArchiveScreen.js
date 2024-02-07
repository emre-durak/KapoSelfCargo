import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ArchiveScreen = () => {
  const [cargoDetails, setCargoDetails] = useState([]);

  useEffect(() => {
    const fetchCargoDetails = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');

        const response = await axios.get('http://kaposelfcargo.somee.com/api/Shipment/GetShipment', {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        });

        const data = response.data;
        if (data.responseCode === 200) {
          setCargoDetails(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCargoDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archive Screen</Text>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Tracking Number</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>

        {cargoDetails && cargoDetails.map(item => (
          <DataTable.Row key={item.trackingNumber}>
            <DataTable.Cell>{item.trackingNumber}</DataTable.Cell>
            <DataTable.Cell>{item.shipmentStatus}</DataTable.Cell>
            <DataTable.Cell>{item.shipmentDate}</DataTable.Cell>
            <DataTable.Cell>{item.estimatedDeliveryDate}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default ArchiveScreen;
