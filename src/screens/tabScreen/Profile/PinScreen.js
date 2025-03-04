import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class PinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPin: '',
      newPin: '',
    };
  }

  handleOldPinChange = (text) => {
    this.setState({oldPin: text});
  };

  handleNewPinChange = (text) => {
    this.setState({newPin: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'rgba(0,0,0,0)'}
        />
        <View style={styles.inputContainer}>
          {/* Old PIN Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Old PIN</Text>
            <TextInput
              style={styles.input}
              value={this.state.oldPin}
              onChangeText={this.handleOldPinChange}
              placeholder="Enter your Old PIN"
              keyboardType="numeric" // Numeric keyboard for PIN input
              secureTextEntry={true} // Hide the PIN for security
            />
          </View>

          {/* New PIN Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>New PIN</Text>
            <TextInput
              style={styles.input}
              value={this.state.newPin}
              onChangeText={this.handleNewPinChange}
              placeholder="Enter your New PIN"
              keyboardType="numeric" // Numeric keyboard for PIN input
              secureTextEntry={true} // Hide the PIN for security
            />
          </View>

          {/* Button Continue */}
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('AccountScreen')}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
  },
  inputWrapper: {
    marginTop: 10,
  },
  label: {
    color: '#14193F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#5142E6',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PinScreen;
