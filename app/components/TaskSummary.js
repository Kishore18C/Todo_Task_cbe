import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

function TaskSummary({count}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#4889f0', '#1d6ff2', '#2929ff']}
      style={styles.linearGradient}>
      <View>
        <Text style={styles.header}>Today's progress summary </Text>
        <Text style={styles.time}>{count} Tasks</Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text>Progress</Text>
          <Text>60%</Text>
        </View>
        <Progress.Bar
          formatText="60"
          progress={0.6}
          showsText={true}
          width={300}
          color="white"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 200,
    borderRadius: 25,
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  header: {
    marginBottom: 15,
    marginLeft: 25,
    color: 'white',
  },
  time: {
    marginLeft: 25,
    color: 'white',
  },
  progressBar: {
    alignItems: 'center',
    marginBottom: 25,
  },
});

export default TaskSummary;
