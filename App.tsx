import React from 'react';
import WorldClock from './src/components/WorldClockComponent/WorldClockComponent';
import { SafeAreaView, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <WorldClock />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
});

export default App;
