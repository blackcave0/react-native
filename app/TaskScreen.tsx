import { View, Text, Button, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import TasksData from './components/TasksData';
import AddTask from './components/AddTask';

type TaskScreenProps = {
  task : string;
  id : string;
};


const TaskScreen = () => {
  const router = useRouter();

  // storing task in an array
  const [taskList, setTasks] = useState<TaskScreenProps[]>([]);

  // handles add task
  const handleAddTask = (task: string) => {
    setTasks((prevTask)  => [...prevTask, { task: task, id: Math.random().toString() }]);
  };

  // handles delete task
  const handleDeleteTask = (id: string) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
    console.log('Delete Task');
  };

  return (
    <View style={styles.container}>
      <Text>TaskScreen</Text>
      <AddTask handleAddTask={handleAddTask} />

      {
        taskList.length === 0 ? <Text style={styles.textTitle}>Please Add Task</Text> :
          <Text style={styles.textTitle}>Your Tasks : </Text>
      }

      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TasksData item={item} handleDeleteTask={handleDeleteTask} />
        )}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />

      {/* display task list */}
      {/* 
        <ScrollView>
          <View>
            <Text style={styles.textTitle}>Your Tasks : </Text>
            <View>
              {taskList?.map((task, index) => (
                <Text style={styles.taskItem} key={index}>{task}</Text>
              ))}
            </View>
          </View>
        </ScrollView> 
      */}

      <Button title="Go to HomeScreen" onPress={() => router.push("/")} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
export default TaskScreen