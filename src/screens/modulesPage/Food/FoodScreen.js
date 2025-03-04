import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

class FoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Wallet</Text>
          <View>
            <View>
              <Text>Img</Text>
            </View>
            <View>
              <Text>123123</Text>
              <Text>Irfan</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FoodScreen;
