import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function NavigationBar() {
  return (
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "pink",
    bottom: 0, 
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1,
    backgroundColor: "grey",
    borderRadius: 100,
    height: "100%",
  }
  
});
