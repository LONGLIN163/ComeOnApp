import React from 'react';
import {View, Text,StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.layer}>
          <Text style={styles.textred}>Page 1</Text>
          <Text>Page 2</Text>
          <Text>Page 3</Text>
        </View>
        <View>
          <Text>hahaha---<Text style={styles.textred}>xixixi</Text>--- <Text>hehehe</Text></Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"orange"
  },
  layer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  textred:{
    color:"red"
  }

})

export default App;
