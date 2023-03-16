
import { StyleSheet, Text, View } from 'react-native';
import WomensJacket from './componets/WomensJacket';
import WomensJackDetails from './componets/WomensJackDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WomensJacket/> */}
      <WomensJackDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
