import { StyleSheet, Text, View, Switch } from 'react-native';

// import a custom hook
import useCustomHook from '../useCustomHook';
import {changeStatus} from '../TodoList';

const RowComponent = ({task}) => {   

    const { someValue, toggle } = useCustomHook(task.isComplete ? "Finished" : "Pending");

    const btnPressed = () => {
        // call the hook's function
        toggle(0)
        changeStatus(task.id);
    }
    return (
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.text}>Task {task.id} - {task.name}</Text>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              style={styles.switch}
              value={someValue === "Finished"}
              onValueChange={btnPressed}
              testID="switch"
            />
            <Text>Status: </Text>
            <Text testID='someValue'>{someValue}</Text>
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    text:{
        fontSize:18,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      switchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
});

export default RowComponent