import {View, Text, StyleSheet} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1
  }
})

export default App;
