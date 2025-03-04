import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {withNavigation} from '@react-navigation/native';

import {sendPeopleData} from './data/sendPeople';
import {ListFrendlyData} from './data/frendlyTips';
import ItemMenuComponent from '../../../componen/ItemMenuComponent';
import ItemTransactionsComponent from '../../../componen/ItemTransactionsComponent';
import MoreMenuModalComponent from '../../../componen/MoreMenuModalComponent';
import ItemFriendlyTipsComponent from '../../../componen/ItemFriendlyTipsComponent';
import {listModule, moreListModul} from './data/listModul';
import {transactionData} from './data/transactionData';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      data: sendPeopleData(),
      dataFrendly: ListFrendlyData(),
      dataTransaction: transactionData(),
      dataListModule: listModule,
    };

    // Bind methods
    this.toggleModal = this.toggleModal.bind(this);
    this.pressHandlerTopUp = this.pressHandlerTopUp.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
  }

  async componentDidMount() {
    await this.getSendPeopleData();
  }

  getSendPeopleData = async () => {
    const data = sendPeopleData();
    this.setState({data});
  };

  toggleModal() {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  pressHandlerTopUp() {
    this.props.navigation.navigate('TopUpScreen');
    console.log('Top Up Screen');
  }

  pressHandler() {
    console.log('Item Pressed');
  }

  async onPressCell(dataListModule) {
    switch (dataListModule) {
      case 1:
        this.props.navigation.navigate('TopUpScreen');
        return;
      case 2:
        this.props.navigation.navigate('SendScreen');
        return;
      case 3:
        this.props.navigation.navigate('WithdrawScreen');
        return;
      case 4:
        this.toggleModal();
        return;
      case 5:
        this.props.navigation.navigate('DataScreen');
        return;
      case 6:
        this.props.navigation.navigate('WaterScreen');
        return;
      case 7:
        this.props.navigation.navigate('StreamScreen');
        return;
      case 8:
        this.props.navigation.navigate('MovieScreen');
        return;
      case 9:
        this.props.navigation.navigate('FoodScreen');
        return;
      case 10:
        this.props.navigation.navigate('TravelScreen');
        return;
      default: 
        return;
    }
  }

  render() {
    const {isModalVisible, data, dataFrendly, dataListModule, dataTransaction} =
      this.state;

    return (
      <ScrollView style={{marginHorizontal: 20}}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'rgba(0,0,0,0)'}
        />
        
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.userName}>Irfan</Text>
          </View>
          <TouchableOpacity onPress={this.pressHandlerTopUp}>
            <Image
              source={require('../../../assets/img/img-user.jpg')}
              style={styles.imageUser}
            />
          </TouchableOpacity>
        </View>

        {/* Card Section */}
        <ImageBackground
          style={styles.card}
          source={require('../../../assets/img/img_bg_card.png')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardName}>Madeline Bond</Text>
            <Text style={styles.cardNumber}>**** **** **** 1280</Text>
            <Text style={styles.cardBalanceLabel}>Balance</Text>
            <Text style={styles.cardBalance}>$5,209,400</Text>
          </View>
        </ImageBackground>

        {/* Level Progress Section */}
        <View style={styles.containerLevel}>
          <View style={styles.level}>
            <View style={styles.levelText}>
              <Text>Level 1</Text>
              <Text>55% of $10M</Text>
            </View>
            <View style={styles.progressBarBackground}>
              <View style={styles.progressBarFill} />
            </View>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.containerMenu}>
          <Text style={styles.title}>Do Something</Text>
          <FlatList
            data={dataListModule}
            keyExtractor={item => item.modulId.toString()}
            numColumns={4} // Display two items per row
            horizontal={false}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.listMenu}
            renderItem={({item}) => (
              <ItemMenuComponent
                onPress={() => this.onPressCell(item.modulId)}
                image={item.Image}
                title={item.title}
              />
            )}
            ListEmptyComponent={
              <Text style={styles.emptyListText}>No Data Available</Text>
            }
          />
        </View>

        <MoreMenuModalComponent
          isVisible={isModalVisible}
          onClose={this.toggleModal}
          navigation={this.props.navigation}
        />

        {/* Latest Transactions Section */}
        <View style={styles.containerMenu}>
          <Text style={styles.title}>Latest Transactions</Text>
          <View style={styles.listTransactions}>
            <FlatList
              data={dataTransaction}
              keyExtractor={item => item.id}
              horizontal={false}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ItemTransactionsComponent
                  image={item.image}
                  color={item.color}
                  title={item.title}
                  day={item.day}
                  amount={item.amount}
                />
              )}
            />
          </View>
        </View>

        {/* Send Again Section */}
        <View style={styles.containerMenu}>
          <Text style={styles.title}>Send Again</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={true} // Enable horizontal scrolling
            scrollEnabled={true} // Ensure scrolling is enabled
            showsHorizontalScrollIndicator={true} // Show horizontal scroll indicator
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={this.pressHandler}>
                <Image source={ item.image} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyListText}>No Data Available</Text>
            }
          />
        </View>

        {/* Friendly Tips Section */}
        <View style={styles.containerMenu}>
          <Text style={styles.title}>Friendly Tips</Text>
          <FlatList
            data={dataFrendly}
            keyExtractor={item => item.id}
            horizontal={false}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ItemFriendlyTipsComponent
                onPress={() => this.pressHandler(item)}
                image={item.image}
                title={item.title}
              />
            )}
            numColumns={2} // Display two items per row
            columnWrapperStyle={styles.listFriendly}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#14193F',
  },
  imageUser: {
    height: 72,
    width: 68,
    borderRadius: 75,
  },
  card: {
    marginTop: 30,
    height: 220,
    borderRadius: 28,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 25,
  },
  cardName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  cardNumber: {
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
  },
  cardBalanceLabel: {
    color: 'white',
    fontSize: 18,
    paddingTop: 20,
  },
  cardBalance: {
    color: 'white',
    fontSize: 24,
    paddingTop: 5,
  },
  containerLevel: {
    backgroundColor: 'white',
    height: 80,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  level: {
    flex: 1,
  },
  levelText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '55%', // Change this value to reflect the actual progress
    height: '100%',
    backgroundColor: '#22B07D',
  },
  containerMenu: {
    marginTop: 20,
    marginBottom: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#14193F',
  },
  listMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
  },
  listTransactions: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 10,
    padding: 10,
  },
  itemContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    margin: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // marginRight: 10,
    alignItems: 'center',
  },
  itemText: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },
  listFriendly: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
