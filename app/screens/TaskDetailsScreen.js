import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

const members = [
  {
    id: 1,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBauguPXr446mG4-PiURldL9R1faH0C1iqVQ&usqp=CAU',
  },
  {
    id: 2,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aKmovWKA8z7mQAQNGSK2oPSMGsMa8McatQ&usqp=CAU',
  },
  {
    id: 3,
    pic: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg',
  },
  {
    id: 4,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_MHk4Z5RYiScjbzH5UVnS_KAc-_FIH3dOg&usqp=CAU',
  },
  {
    id: 5,
    pic: 'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw',
  },
  {
    id: 6,
    pic: 'data:image/jpeg;base64,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',
  },
  {
    id: 7,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTfvIZRyxXCRCH3jOyEemcyNEr_XZJhwNHw&usqp=CAU',
  },
  {
    id: 8,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_MHk4Z5RYiScjbzH5UVnS_KAc-_FIH3dOg&usqp=CAU',
  },
  {
    id: 9,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBauguPXr446mG4-PiURldL9R1faH0C1iqVQ&usqp=CAU',
  },
  {
    id: 10,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aKmovWKA8z7mQAQNGSK2oPSMGsMa8McatQ&usqp=CAU',
  },
  {
    id: 11,
    pic: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg',
  },
  {
    id: 12,
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_MHk4Z5RYiScjbzH5UVnS_KAc-_FIH3dOg&usqp=CAU',
  },
];
function TaskDetails(props) {
  const [task, setTask] = useState();

  const route = useRoute();

  const {data} = route.params;

  useEffect(() => {
    setTask(data);
  }, []);

  const myItemSeperator = () => {
    return <View style={{marginHorizontal: 10}} />;
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      {task && (
        <View style={styles.container}>
          <Text style={styles.header}>{task.title}</Text>
          <View style={styles.timeContainer}>
            <View style={styles.iconContainer}>
              <Icon name="calendar-month" size={25} color="#2929ff" />
            </View>
            <Text style={styles.time}>{task.date}</Text>
          </View>
          <View style={{marginBottom: 15}}>
            <Text
              style={[
                styles.header,
                {
                  fontSize: 15,
                  fontWeight: 300,
                  marginVertical: 0,
                  marginBottom: 5,
                },
              ]}>
              In progress
            </Text>
            <Progress.Bar
              formatText="60"
              progress={0.6}
              showsText={true}
              width={null}
            />
          </View>

          <View style={{marginBottom: 20}}>
            <Text
              style={[
                styles.header,
                {fontSize: 20, fontWeight: 300, marginVertical: 15},
              ]}>
              Members
            </Text>
            <FlatList
              data={members}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL(item.pic)}>
                    <Image
                      style={{width: 54, height: 54, borderRadius: 27}}
                      source={{uri: item.pic}}
                    />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.id}
              horizontal={true}
              ItemSeparatorComponent={myItemSeperator}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text
            style={[
              styles.header,
              {fontSize: 20, fontWeight: 300, marginVertical: 15},
            ]}>
            Description
          </Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  header: {
    fontSize: 25,
    fontWeight: '400',
    color: '#192841',
    marginVertical: 10,
    marginBottom: 20,
    marginTop: 25,
  },
  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: '#d9eafc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 15,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: 'grey',
  },
  description: {
    color: 'grey',
    lineHeight: 25,
    letterSpacing: 0.5,
  },
});

export default TaskDetails;
