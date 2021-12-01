import React from 'react';
import {View, Text,StyleSheet, SafeAreaView, 
  Linking, TouchableHighlight, TouchableOpacity, Image ,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native';


const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.layer}>
            <Text style={styles.textred}>Page 1</Text>
            <Text>Page 2</Text>
            <Text>Page 3</Text>
          </View>
          <View>
            <Text>hahaha---<Text style={styles.textred}>xixixi</Text>--- <Text>hehehe</Text></Text>
          </View>
          <View>
            <Text> Icons:</Text>
            <Text> <Icon name="home" size={40} color="white"/></Text>
            <Text> <Icon name="tachometer" size={40} color="violet"/></Text>
          </View>

          <View>
            <Button 
              title="go"
              onPress={() => {
                Linking.openURL("https://ll-blog-client.vercel.app/")
              }}
              style={styles.mybtn} // not working
              color="green" 

            >go</Button>
          </View>

      {/* <View>
            <Text 
              title="go2"
              onPress={() => {
                Linking.openURL("https://ll-blog-client.vercel.app/")
              }}
              style={styles.mybtn} 
              color="green" // not working

            >go</Text>
          </View> */}

          <TouchableHighlight 
            activeOpacity={0.8} 
            underlayColor="blue" 
            style={styles.mybtn}
            onPress={() => {
              console.log("haha")
            }}
          >
              <Text style={styles.textbtn}>hahaha</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            activeOpacity={0.8} 
            underlayColor="blue" 
            style={styles.mybtn}
            onPress={() => {
              console.log("haha")
            }}
          >
              <Text style={styles.textbtn}>hahaha</Text>
          </TouchableHighlight>
          <TouchableOpacity
            //activeOpacity={0.8} 
            // underlayColor="red" 
            style={styles.mybtn}
            // onPress={() => {
            //   console.log("xixixi")
            // }}
          >
            <Text style={styles.textbtn}>xixixi</Text>
          </TouchableOpacity>
          
          <View>
            <Image 
              source={require('./src/assets/Tiger_shutterstock.jpeg')}
              style={{width:400,height:300}}
              resizeMode="contain"
            />

            <Image 
              source={{
                uri:"https://images.pexels.com/photos/2564889/pexels-photo-2564889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }}
              style={{width:400,height:300}}
              resizeMode="stretch"
            />
          </View>
        </ScrollView>
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
  },
  mybtn:{
    // color:"red",
     backgroundColor:"yellow",
     height:50,
     width:200,
    // lineHeight:50,
    // textAlign:"center",
     borderRadius:25,
    // marginHorizontal:100,
    marginVertical:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },
  textbtn:{
      color:"black"
  }

})

export default App;
