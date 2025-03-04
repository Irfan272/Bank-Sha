import React, {Component} from 'react';
import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Img from '../../../assets/img';
import {SelectBank} from './data/selectBank';
import SelectBankComponent from './component/SelectBankComponent';

class TopUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBank: SelectBank(),
      selectedBank: null,
    };
  }

  handleBankSelection = (id) => {
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

  async onPressCell(bankId) {
    switch (bankId) {
      case 1:
        this.props.navigation.navigate('ResultScreen', {selectedBank: bankId});
        return;
      case 2:
        this.props.navigation.navigate('ResultScreen', {selectedBank: bankId});
        return;
      case 3:
 this.props.navigation.navigate('ResultScreen', {selectedBank: bankId});
        return;
      case 4:
        this.props.navigation.navigate('ResultScreen');
        return;
      case 5:
        this.props.navigation.navigate('ResultScreen');
        return;
      default:
        this.props.navigation.navigate('ResultScreen');
        return;
    }
  }

  render() {
    const {dataBank, selectedBank} = this.state;

    return (
      <ScrollView style={{marginHorizontal: 15}}>
        <View style={{marginTop: 30}}>
          <Text style={{fontWeight: 'bold', color: '#14193F', fontSize: 16}}>
            Wallet
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-start',
            }}>
            <View>
              <Image
                source={require('../../../assets/img/img_bg_card.png')}
                style={{
                  height: 55,
                  width: 80,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}
              />
            </View>
            <View style={{marginLeft: 10, marginVertical: 5}}>
              <Text
                style={{fontWeight: 'bold', color: '#14193F', fontSize: 16}}>
                123112312312323423
              </Text>
              <Text>Irfan</Text>
            </View>
          </View>
        </View>

        {/* Select Bank */}
        <View style={{marginTop: 20}}>
          {/* Select Bank Header */}
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
              Select Bank
            </Text>
          </View>

          <FlatList
            data={dataBank}
            keyExtractor={item => item.id}
            horizontal={false}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <SelectBankComponent
                title={item.title}
                image={item.image}
                lastUpdate={item.lastUpdate}
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

export default TopUpScreen;
