import { StyleSheet, TextInput, View, Button, Modal, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require('../assets/images/target.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Add course goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={props.onCancel} >
            <Text style={styles.text}>Cancel</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.myBtn} onPress={addGoalHandler}>
            <Text style={styles.text}>Add Goal</Text>
         </TouchableOpacity>
        
     
    
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: 'white',
    paddingLeft: 16,
    backgroundColor:'#382B74'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    padding: 10,
    width: '90%',
    height: 34.9,
    borderRadius: 6,
    padding:6,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
    top: 20,
    marginBottom: 20,
    // paddingBottom:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:16,
  },
  button: {
    width: 100,
    marginHorizontal:8,
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
  myBtn: {
    height: 40,
    width: 100,
    backgroundColor: '#530acc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 5,
  },
  text: {
    color:'white'
  },

  cancelBtn: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#f31282',
    margin: 5,
  }
});

export default GoalInput;
