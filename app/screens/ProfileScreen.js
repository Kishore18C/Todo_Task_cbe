import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
        404 Not Found
      </Text>
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
});

export default ProfileScreen;
