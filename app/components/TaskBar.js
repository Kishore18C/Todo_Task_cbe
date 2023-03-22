import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TaskBar({title, start, end}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="list" size={35} color="#4889f0" />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>
          {start} - {end}
        </Text>
      </View>
      <Icon name="chevron-right" size={35} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    shadowColor: 'black',
    width: '100%',
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9eafc',
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#192841',
    marginBottom: 5,
  },
  time: {
    color: 'grey',
  },
});

export default TaskBar;
