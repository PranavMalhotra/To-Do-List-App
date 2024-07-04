import {
  StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList, Platform, StatusBar} from 'react-native';

import { useState } from "react"
import { Entypo } from '@expo/vector-icons';

// custom component for a FlatList row
import RowComponent from './components/RowComponent';

// import the todo list
import { todoList, clearList } from './TodoList';

export default function App() {

  // set the flatlist's state variable to the todo list
  const [listData, setListData] = useState(todoList)
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName !== '') {
      const newTodo = { id: listData.length + 1, name: newTaskName, isComplete: false };

      setListData([...listData, newTodo]);

      setNewTaskName('');
    }
  }


  const handleClearList = () => {
    clearList();
    setListData([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.todoheader}>Todo List</Text>
        <Entypo name="trash" size={24} color="black" style={styles.trashIcon} onPress={handleClearList} />
      </View>

      {listData.length === 0 ? (
        <View style={styles.errorText}>
        <Text >No tasks in the list.</Text>
        </View>
      ) : (

        <FlatList
          style={styles.list}
          data={listData}
          renderItem={({ item }) => {
            return <RowComponent task={item} />;
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#CED0CE',
                marginTop: 10,
              }}
            />
          )}
        />
      )}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={newTaskName}
          onChangeText={setNewTaskName}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoheader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#add8e6',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  trashIcon: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 20,
  },
  errorText:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
