import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import EmployeList from './src/components/EmployeList';
import { StatusBar } from 'expo-status-bar';
import CompanyHeader from './src/components/CompanyHeader';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <CompanyHeader />
        </View>

        <View style={styles.list}>
          <EmployeList />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 3,
  },

  list: {
    flex: 7,
  },
});
