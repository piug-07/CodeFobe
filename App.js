import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';



export default function App() {


  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, backgroundColor: "#F0F0F0" }}>
    <View style={styles.container}>
      <StackNavigator />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
