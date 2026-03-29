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

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      email: '',
      password: '',
    };
  }

  handleUsernameChange = text => {
    this.setState({username: text});
  };

  handleFullNameChange = text => {
    this.setState({fullname: text});
  };

  handleEmailChange = text => {
    this.setState({email: text});
  };

  handlePasswordChange = text => {
    this.setState({password: text});
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
          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              value={this.state.username}
              onChangeText={this.handleUsernameChange}
              placeholder="Enter your username"
            />
          </View>

          {/* Full Name Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={this.state.fullname}
              onChangeText={this.handleFullNameChange}
              placeholder="Enter your full name"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder="Enter your email"
              keyboardType="email-address" // Sets the keyboard type for email
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder="Enter your password"
              secureTextEntry={true} // Hides the input for passwords
            />
          </View>

          {/* Button Continue */}

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#5142E6',
                borderRadius: 20,
                paddingVertical: 15,
                paddingHorizontal: 20,
                marginTop: 10,
                marginBottom: 20,
                // elevation: 3, // Shadow for Android
                // shadowColor: '#000', // Shadow for iOS
                shadowOpacity: 0.1,
                shadowRadius: 5,
                shadowOffset: {width: 0, height: 2},
              }}
              onPress={() => this.props.navigation.navigate('')}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: '#ffff'}}>
                  Continue
                </Text>
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
});

export default ProfileScreen;
