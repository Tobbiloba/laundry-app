// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View >
      <SafeAreaView>
      <StatusBar barStyle="dard-content" backgroundColor="#164e63" />
      <HomeScreen />
      </SafeAreaView>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
