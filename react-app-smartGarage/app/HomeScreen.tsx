import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Definisikan tipe untuk item log
interface LogItem {
  id: string;
  username: string;
  status: string;
  date: string;
}

export default function HomeScreen() {
  // State untuk mengelola status pintu
  const [doorState, setDoorState] = useState('Closed');
  
  // State untuk mengelola status mobil
  const [carState, setCarState] = useState('Outside');
  
  // State untuk menyimpan data log
  const [logData, setLogData] = useState<LogItem[]>([
    // Data awal jika diperlukan
  ]);

  // Fungsi untuk menambah data log
  const addLog = (status: string) => {
    const newLog: LogItem = {
      id: '1371082409040002', // Gantilah dengan ID yang dinamis jika diperlukan
      username: 'Ferdi', // Gantilah dengan username yang sesuai
      status: status,
      date: new Date().toLocaleString('id-ID', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    setLogData([...logData, newLog]);
    // Jika LogScreen terhubung dengan state global atau context, update data log di sana
  };

  return (
    <View style={styles.container}>
      {/* Status Garage */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusHeader}>STATUS GARAGE</Text>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>DOOR STATE</Text>
          <Text style={styles.statusText}>{doorState}</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>CAR STATE</Text>
          <Text style={styles.statusText}>{carState}</Text>
        </View>
      </View>

      {/* Door Controller */}
      <View style={styles.controllerContainer}>
        <Text style={styles.controllerHeader}>DOOR CONTROLLER</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setDoorState('Open');
            addLog('Open Door');
          }}>
          <Text style={styles.statusText}>OPEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setDoorState('Closed');
            addLog('Close Door');
          }}>
          <Text style={styles.statusText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a8bd1',
  },
  statusContainer: {
    width: '90%',
    backgroundColor: '#480bef',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  statusHeader: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  statusBox: {
    backgroundColor: '#FF4C4C',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: 'white',
  },
  controllerContainer: {
    width: '90%',
    backgroundColor: '#480bef',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  controllerHeader: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4C4C',
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    padding: 15,
  },
});
