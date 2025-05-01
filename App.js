import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const URL = 'https://promina-drnis-app.vercel.app/login';

  const openWebsite = () => {
    Linking.openURL(URL);
  };

  // Automatski otvori pri učitavanju
  useEffect(() => {
    openWebsite();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promina-Drnis</Text>
      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Kliknite za pristup aplikaciji</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});