import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Sony from './assets/sony-logo.png';

export default function App() {
  return (
    <SafeAreaView>
      <Text> Estácio</Text>
      <Image source={header} style={styles.header}></Image>
      <Text> Xbox Series</Text>
      <Image source={Sony} />
    </SafeAreaView>
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
