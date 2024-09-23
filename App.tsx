// App.tsx

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TaskScreen from './src/tasks/ui/components/pages/TaskScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskScreen />
      <StatusBar style="auto" />
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
