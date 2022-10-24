import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,

} from 'react-native';

function GoalItem(props) {
  return (
    
      <TouchableOpacity onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goal}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  goal: {
    height: 40,
    width: '97%',
    backgroundColor: '#5e0acc',
    padding: 10,
    marginBottom: 10,
    margin: 5,
    borderRadius: 10,
    // color:'white'
  },
  text: {
    color: 'white',
  },
});

export default GoalItem;
