import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import TaskSummary from '../components/TaskSummary';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TaskBar from '../components/TaskBar';
import {getTasks} from '../db/taskDatabase';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState();
  const [tasksCount, setTasksCount] = useState(0);

  useEffect(() => {
    const response = getTasks();
    setTasks(response);
    setTasksCount(response.length);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => Alert.alert('Hello!')}
            style={styles.iconContainer}>
            <Icon name="account" size={25} color="grey" />
          </TouchableOpacity>
          <Text style={{color: '#192841', fontSize: 20, fontWeight: 400}}>
            Home Page
          </Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'No notification available at the moment, please try again!',
              )
            }
            style={styles.iconContainer}>
            <Icon name="bell" size={25} color="grey" />
          </TouchableOpacity>
        </View>
        {tasksCount >= 0 && <TaskSummary count={tasksCount} />}

        <>
          <Text style={{color: '#192841', fontSize: 20, fontWeight: 200}}>
            Today's Tasks
          </Text>
          {tasks && (
            <FlatList
              data={tasks}
              renderItem={({item, ind}) => (
                <TouchableOpacity
                  key={ind}
                  onPress={() =>
                    navigation.navigate('TaskDetails', {data: item})
                  }>
                  <TaskBar
                    title={item.title}
                    start={item.startTime}
                    end={item.endTime}
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 25,
  },
  iconContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f4f4',
    borderRadius: 5,
  },
});

export default HomeScreen;
