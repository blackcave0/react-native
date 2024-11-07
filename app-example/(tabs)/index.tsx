import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Image source={require('../../assets/images/Snap.png')} style={styles.image} />

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    /*************  ✨ Codeium Command 🌟  *************/
    backgroundColor: '#452B1F'
    /******  da34d384-a5bb-4ef7-936b-47ee5e9604f9  *******/
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
})