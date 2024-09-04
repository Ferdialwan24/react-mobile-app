import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  // State untuk mengelola status pintu
  const [doorState, setDoorState] = useState('Closed');

  // State untuk mengelola status mobil
  const [carState, setCarState] = useState('Inside');

  return (
    <View style={styles.container}>
      {/* Status Garage */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusHeader}>STATUS GARAGE</Text>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>DOOR STATE</Text>
          <Text style={[styles.statusText, { color: doorState === 'Opened' ? 'green' : 'red' }]}>
            {doorState}
          </Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>CAR STATE</Text>
          <Text style={[styles.statusText, { color: carState === 'Inside' ? 'green' : 'red' }]}>
            {carState}
          </Text>
        </View>
      </View>

      {/* Door Controller */}
      <View style={styles.controllerContainer}>
        <Text style={styles.controllerHeader}>DOOR CONTROLLER</Text>
        <TouchableOpacity
          style={styles.buttonOpen}
          onPress={() => setDoorState('Opened')}>
          <Text style={styles.statusText}>OPEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => setDoorState('Closed')}>
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
    backgroundColor: 'white',
  },
  statusContainer: {
    width: '90%',
    backgroundColor: '#480bef',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  statusHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  statusBox: {
    backgroundColor: '#6b94ee',
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
  buttonOpen: {
    backgroundColor: '#49e056',
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    padding: 15,
  },
  buttonClose: {
    backgroundColor: '#FF4C4C',
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    padding: 15,
  },
});
