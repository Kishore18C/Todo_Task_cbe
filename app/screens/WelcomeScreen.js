import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/premium-vector/data-analysis-concept_1302-12946.jpg?size=626&ext=jpg&ga=GA1.2.2111423087.1677740825&semt=ais',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome To Go Task</Text>
        <Text style={styles.tagline}>
          A work space for over 10 million influencers around the globe of the
          world.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('BottomNavBar')}
        style={styles.button}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#192841',
    textAlign: 'center',
    marginVertical: 10,
  },
  tagline: {
    textAlign: 'center',
    fontSize: 15,
    color: 'grey',
    fontWeight: '500',
    width: '70%',
    // backgroundColor:"red"
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
  image: {
    width: '100%',
    height: '50%',
  },
});

export default WelcomeScreen;
