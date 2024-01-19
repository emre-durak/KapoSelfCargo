import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const ArchiveScreen = () => {
  const [cargoDetails, setCargoDetails] = useState([
    { id: '1', trackingNumber: 'ABC123', status: 'Delivered', date: '2023-05-20' },
    { id: '2', trackingNumber: 'XYZ456', status: 'In Transit', date: '2023-06-10' },
  ]);

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

        {cargoDetails.map(item => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.trackingNumber}</DataTable.Cell>
            <DataTable.Cell>{item.status}</DataTable.Cell>
            <DataTable.Cell>{item.date}</DataTable.Cell>
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
