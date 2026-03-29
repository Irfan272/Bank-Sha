import React, {Component} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {sendPeopleData} from './data/sendPeople';
import SelectPeopleComponent from './component/SelectPeopleComponent';

class SendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sendPeopleData(),
      selectedBank: null,
    };
  }

  handleBankSelection = id => {
    this.setState({selectedBank: id});
  };

  handleContinue() {
    const {selectedBankId} = this.state;
    if (selectedBankId) {
      console.log('Selected Bank: ', selectedBankId);
    } else {
      alert('Please select a bank before continue');
    }
  }

  render() {
    const {data, selectedBank} = this.state;

    return (
      <ScrollView style={{marginHorizontal: 15}}>
        <View style={{marginTop: 30}}>
          <Text style={{fontWeight: 'bold', color: '#14193F', fontSize: 16}}>
            Search
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              placeholder="Enter your email"
              // keyboardType="email-address" // Sets the keyboard type for email
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Select Bank */}
        <View style={{marginTop: 20}}>
          {/* Select Bank Header */}
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
              Recend Users
            </Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={false}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <SelectPeopleComponent
                name={item.name}
                image={item.image}
                tag={item.tag}
                isSelected={selectedBank == item.id}
                onPress={() => this.handleBankSelection(item.id)}
              />
            )}
          />
        </View>

        {/* Button Continue */}

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            disabled={!selectedBank}
            style={{
              backgroundColor: selectedBank ? '#5142E6' : '#ccc',
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
            onPress={() => this.onPressCell(selectedBank)}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ffff'}}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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

export default SendScreen;
