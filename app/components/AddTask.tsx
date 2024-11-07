import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

type AddTaskProps = {
  handleAddTask: (task: string) => void
}

const AddTask = ({ handleAddTask }: AddTaskProps) => {
  // user input and add task using useState
  const [task, setTask] = useState('');

  // handles user input
  const handleInput = (text: string) => {
    setTask(text);
  };

  const onAddTask = () => {
    if (!task) {
      return Alert.alert('Error', 'Please enter a task');
    }
    handleAddTask(task); 
    setTask('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputBox} placeholder="Task Name" autoCapitalize="none" value={task} onChangeText={handleInput} />
      <Button title='Add Task' onPress={ onAddTask } />

    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  },

  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    padding: 7,
    borderRadius: 10
  },
})
export default AddTask