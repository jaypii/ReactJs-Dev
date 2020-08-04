import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View
    style={{
      flexDirection: 'row',
      height: 50,
      padding: 5,
    }}>
    <View style={{backgroundColor: 'blue', flex: 0.1}}>
    <Text>col1</Text>
    </View>
    <View style={{backgroundColor: 'red', flex: 0.4}}>
    <TextInput
      style={{ height: 15, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    /> 
    </View>
    <View style={{backgroundColor: 'green', flex: 0.4}} />
    <View style={{backgroundColor: 'yellow', flex: 0.1}} />
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
});
