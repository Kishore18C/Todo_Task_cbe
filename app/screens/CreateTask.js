import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  DatePickerIOSBase,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FAIcons from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker';
import {addTasks} from '../db/taskDatabase';

function CreateTask({}) {
  const navigation = useNavigation();

  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateModal, setDateModal] = useState(false);
  const [startTimeModal, setStartTimeModal] = useState(false);
  const [endTimeModal, setEndTimeModal] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dateNumber = date.toLocaleDateString('en-US', {
    day: 'numeric',
  });
  const month = date.toLocaleDateString('en-US', {
    month: 'long',
  });

  const day = weekdays[date.getDay()];

  const handleSave = () => {
    const task = {
      title: text,
      date: `${dateNumber} ${month}, ${day}`,
      startTime: startTime.toLocaleTimeString(),
      endTime: endTime.toLocaleTimeString(),
      description,
    };
    const response = addTasks(task);

    if (response) {
      Alert.alert('Task saved Successfully...');
      return navigation.navigate('Empty');
    }

    return Alert.alert('Unknown Error!');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          width: '90%',
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Task Name</Text>
        <TextInput
          placeholder="Title..."
          placeholderTextColor="grey"
          style={{
            height: 55,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            color: 'grey',
            paddingLeft: 10,
          }}
          onChangeText={setText}
          value={text}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Category</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{backgroundColor: 'dodgerblue', borderRadius: 10}}>
            <Text style={styles.categoryBtnText}>Design</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'dodgerblue', borderRadius: 10}}>
            <Text style={styles.categoryBtnText}>Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'dodgerblue', borderRadius: 10}}>
            <Text style={styles.categoryBtnText}>Research</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, color: 'black'}}>Date & Time</Text>
        <View
          style={{
            height: 55,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 18, color: 'grey'}}>
                {dateNumber} {month},{day}
              </Text>
            </View>

            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => setDateModal(true)}>
              <FAIcons
                name="calendar"
                size={30}
                color="dodgerblue"
                style={{
                  backgroundColor: '#cecdcd',
                  paddingHorizontal: 6,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '40%'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Start Time</Text>
            <TouchableOpacity
              onPress={() => setStartTimeModal(true)}
              style={{
                height: 55,
                width: '100%',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{color: 'grey'}}>
                {startTime.toLocaleTimeString()}
              </Text>
              <FAIcons name="chevron-down" size={30} color="dodgerblue" />
            </TouchableOpacity>
          </View>
          <View style={{width: '40%'}}>
            <Text style={{fontSize: 20, color: 'black'}}>End Time</Text>
            <TouchableOpacity
              onPress={() => setEndTimeModal(true)}
              style={{
                height: 55,
                width: '100%',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{color: 'grey'}}>
                {endTime.toLocaleTimeString()}
              </Text>
              <FAIcons name="chevron-down" size={30} color="dodgerblue" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 20, color: 'black'}}>Description</Text>
        <TextInput
          placeholder="Description..."
          multiline={true}
          numberOfLines={5}
          placeholderTextColor="grey"
          style={{
            height: 100,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            textAlignVertical: 'top',
            color: 'grey',
          }}
          onChangeText={setDescription}
          value={description}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: 'dodgerblue',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.categoryBtnText}>Create Task</Text>
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        open={dateModal}
        mode={'date'}
        date={date}
        onConfirm={date => {
          setDateModal(false);
          setDate(new Date(date));
        }}
        onCancel={() => {
          setDateModal(false);
        }}
      />
      <DatePicker
        modal
        open={startTimeModal}
        mode={'time'}
        date={startTime}
        onConfirm={newTime => {
          setStartTime(new Date(newTime));
          setStartTimeModal(false);
        }}
        onCancel={() => {
          setStartTimeModal(false);
        }}
      />
      <DatePicker
        modal
        open={endTimeModal}
        mode={'time'}
        date={endTime}
        onConfirm={newTime => {
          setEndTime(new Date(newTime));
          setEndTimeModal(false);
        }}
        onCancel={() => {
          setEndTimeModal(false);
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, backgroundColor: 'white'},
  categoryBtnText: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inputTexts: {
    height: 55,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default CreateTask;
