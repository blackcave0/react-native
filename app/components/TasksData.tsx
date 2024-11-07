import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ComponentProps } from 'react';

type TasksDataProps = {
  item: string
  // handleDeleteTask: (id: string) => void
}

interface TasksDataPropsD extends ComponentProps<any> {
  // item: string;
  item: { id: string; task: string };

  handleDeleteTask: (id: string) => void;
}
const TasksData = ({ item, handleDeleteTask }: TasksDataPropsD) => {
  return (
    <Pressable onPress={()=> handleDeleteTask(item.id)}>
        <Text style={styles.taskItem}>{item.task}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    // borderWidth : 1,
    borderColor: 'black',
    borderRadius: 10,
    textTransform: 'capitalize',
    /*************  ✨ Codeium Command 🌟  *************/
    backgroundColor: '#8B9467',
    /******  d8ea8be4-0676-4221-a691-6491899575fd  *******/
    color: 'white',
    fontSize: 16,
    fontWeight: '500',

  }
})
export default TasksData