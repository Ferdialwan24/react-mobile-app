import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Data log
const logData = [
  { id: '1371082409040002', username: 'Ferdi', status: 'Open Door', date: '29-08-2024' },
  // Tambahkan lebih banyak data jika diperlukan
];

export default function LogScreen() {
  // Fungsi untuk menangani interaksi ketika baris ditekan
  const handlePress = (item) => {
    alert(`ID: ${item.id}\nUsername: ${item.username}\nStatus: ${item.status}\nDate: ${item.date}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>No</Text>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>USERNAME</Text>
        <Text style={styles.headerText}>STATUS</Text>
        <Text style={styles.headerText}>DATE</Text>
      </View>
      <FlatList
        data={logData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
              <Text style={styles.rowText}>{index + 1}</Text>
              <Text style={styles.rowText}>{item.id}</Text>
              <Text style={styles.rowText}>{item.username}</Text>
              <Text style={styles.rowText}>{item.status}</Text>
              <Text style={styles.rowText}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white', // Menambahkan latar belakang untuk keseluruhan layar
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#480bef',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  header: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'black',
    height: "100%",
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  rowText: {
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  evenRow: {
    backgroundColor: '#e0e0e0',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
});
