import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function PlusOption() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CreateTask')}
      style={styles.container}>
      <View style={styles.plusContainer} transform={[{rotate: '45deg'}]}>
        <View style={{padding: 5}} transform={[{rotate: '45deg'}]}>
          <AntIcon name="pluscircleo" size={30} color={'white'} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 25,
  },
  plusContainer: {
    backgroundColor: '#2929ff',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  mainContainer2: {
    width: '100%',
  },
});

export default PlusOption;
