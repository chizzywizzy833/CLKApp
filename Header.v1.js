import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#56b870', '#006400']}
        style={styles.background}
      />
      <Text style={styles.header}>Welcome back</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'centre',
    justifyContent: 'centre',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    fontFamily: 'Montserrat',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'top',
    marginTop: 80,
    marginBottom: 40,
    marginLeft: 10,
  },
});
