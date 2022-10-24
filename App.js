import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <TouchableOpacity style={styles.myBtn} onPress={startAddGoalHandler}>
        <View style={styles.myBtn}>
          <Text style={styles.text}>Add New Goal</Text>
        </View>
      </TouchableOpacity>
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 50,
    // backgroundColor: '#1e0a5a',
    backgroundColor:'#382B74'

  },

  goalsContainer: {
    height: 600,
    width: '95%',
    marginTop: 20,
    // backgroundColor: 'red',
  },
  myBtn: {
    height: 40,
    minWidth: 100,
    backgroundColor: '#530acc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    margin: 5,
  },
  text: {
    color:'white'
  }
});

export default App;
