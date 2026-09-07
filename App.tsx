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
    backgroundColor: '#0A0A0A',
  },

  header: {
    flex: 3,
    backgroundColor: '#111111',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
  },

  list: {
    flex: 7,
    backgroundColor: '#0A0A0A',
    paddingHorizontal: 16,
  },
});
