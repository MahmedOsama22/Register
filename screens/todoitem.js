import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  CheckBox
} from 'react-native';
import { createAppContainer } from 'react-navigation';
export default function TodoItem({ item, press, navigation }) {
  const presshand = () => {
    navigation.navigate('Home');
    // navigation.goBack();
    // navigation.pop();
  };

  return (
    <TouchableOpacity onPress={() => press(item.id)}>
      {/* <Text style={styles.item}> {item.text}</Text> */}
      <Text style={styles.item}>
        {item.text}
        <CheckBox style={styles.ch}></CheckBox>
      </Text>
      <Button title='task detail' onPress={presshand} />
      {/* <CheckBox style={styles.item}>{item.text}</CheckBox> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 20,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 20
  },
  ch: {}
});
