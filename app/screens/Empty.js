import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Empty({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.replace('BottomNavBar')}
        style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
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
  button: {
    width: '75%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#2929ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Empty;
