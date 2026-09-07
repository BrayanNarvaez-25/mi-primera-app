import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import EmployeList from './src/components/EmployeList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
      <SafeAreaProvider >
        <StatusBar style='light'/>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.appContainer}>
            <EmployeList />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea:{
    flex: 1,
    backgroundColor: '#2196F3'
  },
  appContainer:{
    flex: 1,
    backgroundColor: '#ffff'
  }
});
