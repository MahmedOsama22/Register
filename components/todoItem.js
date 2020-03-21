import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  CheckBox,
  View
} from 'react-native';
import TaskDetail from '../screens/taskDetail';

export default function TodoItem({ item, press, navigation, pres }) {
  const presshand = () => {
    navigation.navigate('TaskDetail', item);
    // navigation.goBack();
    // navigation.pop();
  };

  // const [text, setText] = useState('');
  // const change = val => {
  //   setText(val);
  // };

  // const submit = text => {
  //   if (text.length > 3) {
  //     setText(prevTodos => {
  //       return [{ text: text, id: Math.random().toString() }, ...prevTodos];
  //     });
  //   } else {
  //     Alert.alert('oops!', 'Todos must be over 3 chars long');
  //   }
  // };

  return (
    <TouchableOpacity onPress={() => press(item.id)}>
      <Text style={item.isDone ? styles.itemf : styles.item}>
        {item.title /*item.text */}
      </Text>

      <Button title='task detail' onPress={presshand}>
        {/* <TaskDetail submit={submit} /> */}
      </Button>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20
        }}
      >
        <Text>clickhere to del</Text>
        <Button
          title='delete'
          onPress={
            () =>
              pres(
                item.id
              ) /*todo => todo.id != id /*() => navigation.navigate('TaskDetail')*/
          }
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 20
  },
  itemf: {
    padding: 16,
    marginTop: 16,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'line-through'
  },
  ch: {}
});
