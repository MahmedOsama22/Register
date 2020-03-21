import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  CheckBox
} from 'react-native';
import TodoItem from '../components/todoitem';
import AddTodo from '../components/addtodo';

import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskDetail from './taskDetail';
// import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  // const presshand = () => {
  //   navigation.navigate('TodoItem');
  //   // navigation.goBack();
  //   // navigation.pop();
  // };
  const [data, setTodos] = useState([
    // { text: 'cs101', id: 0, isDone: false },
    // { text: 'cs201', id: 1, isDone: false },
    // { text: 'cs202', id: 2, isDone: false },
    // { text: 'cs303', id: 3, isDone: false },
    // { text: 'cs305', id: 4, isDone: false }
  ]);

  useEffect(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const data = await response.json();
    const item = data;
    setTodos(item);
  }, []);

  const press = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(
        todo => {
          if ((todo.id != id) == false) {
            todo.isDone = !todo.isDone;
          }
          return true;
        } /*todo => todo.id != id*/
      );
    });
  };
  const pres = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };

  const submit = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        return [{ title: title, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('oops!', 'Todos must be over 3 chars long');
    }
  };
  // ------------------------------------------
  // const edit = (id,title) => {
  //   setTodos(prevTodos => {
  //     return prevTodos.filter(
  //       todo => {
  //         if ((todo.id != id) == false) {
  //           todo.title = title;
  //         }
  //         return true;
  //       } /*todo => todo.id != id*/
  //     );
  //   });
  //   navigation.navigate('Todo')
  // };
  // -------------------------------------------

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View style={styles.content}>
        <ScrollView>
          <AddTodo submit={submit} />
          <View style={styles.list} /*style={globalStyles.container}*/>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  press={press}
                  navigation={navigation}
                  pres={pres}
                  // submit={submit}
                ></TodoItem>
              )}
            />
            {/* <Button title='task detail' onPress={presshand} /> */}
            {/* <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('title')}</Text> */}
            {/* <Button title='back to home Screen ' onPress={press} /> */}
          </View>
        </ScrollView>
        <Button title='Refresh' />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center'
  // },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
