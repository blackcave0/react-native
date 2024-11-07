import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, } from 'react-native'
import React, { useState } from 'react'

type AddTaskProps = {
  handleAddTask: (task: string) => void;
  // handleModal: () => void;
  handleCloseModal : () => void;
  visible: boolean
}

const AddTask = ({ handleAddTask, handleCloseModal, visible }: AddTaskProps) => {
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
    // handleModal()
  
  }

  return (

    <Modal transparent={false} animationType='fade' visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder="Task Name" autoCapitalize="none" value={task} onChangeText={handleInput} />
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Button title='Add Task' onPress={onAddTask} />
          </View>
          <View style={styles.btn}>
            <Button title='Cancel' onPress={handleCloseModal}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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

  btnGroup: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10
  },

  btn: {
    width: '40%',
    marginHorizontal: 10
  }
})
export default AddTask