import React, {useEffect, useState} from 'react';
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
import ItemMenuComponent from '../../../componen/ItemMenuComponent';
import ItemTransactionsComponent from '../../../componen/ItemTransactionsComponent';
import MoreMenuModalComponent from '../../../componen/MoreMenuModalComponent';
import ItemFriendlyTipsComponent from '../../../componen/ItemFriendlyTipsComponent';
import {useNavigation} from '@react-navigation/native';

const HomeScreenBackup = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  function pressHandlerTopUp() {
    navigation.navigate('TopUp');
    console.log('Top Up Screens');
  }

  function pressHandler() {
    // navigation.navigate('TopUp');
    console.log('Top Up Screens');
  }

  useEffect(() => {
    addData();
  }, []);

  function addData() {
    setData([
      {
        id: '1',
        title: '@yuanita',
        image:
          'https://media.istockphoto.com/id/171581826/id/foto/komuter-bisnis-berjalan-pulang-setelah-bekerja-sunset-backlit-gerakan-kabur.webp?b=1&s=612x612&w=0&k=20&c=ULUtU5Y8pnW48vYKpTAguSzcpKukzBTD98YMI1hufJU=',
      },
      {
        id: '2',
        title: '@gopan',
        image:
          'https://media.istockphoto.com/id/171581826/id/foto/komuter-bisnis-berjalan-pulang-setelah-bekerja-sunset-backlit-gerakan-kabur.webp?b=1&s=612x612&w=0&k=20&c=ULUtU5Y8pnW48vYKpTAguSzcpKukzBTD98YMI1hufJU=',
      },
      {
        id: '3',
        title: '@caca',
        image:
          'https://media.istockphoto.com/id/171581826/id/foto/komuter-bisnis-berjalan-pulang-setelah-bekerja-sunset-backlit-gerakan-kabur.webp?b=1&s=612x612&w=0&k=20&c=ULUtU5Y8pnW48vYKpTAguSzcpKukzBTD98YMI1hufJU=',
      },
      {
        id: '4',
        title: '@ssss',
        image:
          'https://media.istockphoto.com/id/171581826/id/foto/komuter-bisnis-berjalan-pulang-setelah-bekerja-sunset-backlit-gerakan-kabur.webp?b=1&s=612x612&w=0&k=20&c=ULUtU5Y8pnW48vYKpTAguSzcpKukzBTD98YMI1hufJU=',
      },
      {
        id: '5',
        title: '@yuli',
        image:
          'https://media.istockphoto.com/id/171581826/id/foto/komuter-bisnis-berjalan-pulang-setelah-bekerja-sunset-backlit-gerakan-kabur.webp?b=1&s=612x612&w=0&k=20&c=ULUtU5Y8pnW48vYKpTAguSzcpKukzBTD98YMI1hufJU=',
      },
    ]);
  }

  return (
    <ScrollView style={{marginHorizontal: 20}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'rgba(0,0,0,0)'}
      />
      {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.userName}>Irfan</Text>
        </View>
        <View>
          <TouchableOpacity onPress={pressHandler}>
            <Image
              source={require('../../assets/img/img-user.jpg')}
              style={styles.imageUser}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        style={styles.card}
        source={require('../../assets/img/img_bg_card.png')}>
        <View style={styles.cardContent}>
          <Text style={styles.cardName}>Madeline Bond</Text>
          <Text style={styles.cardNumber}>**** **** **** 1280</Text>
          <Text style={styles.cardBalanceLabel}>Balance</Text>
          <Text style={styles.cardBalance}>$5,209,400</Text>
        </View>
      </ImageBackground>

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

      <View style={styles.containerMenu}>
        <Text style={styles.title}>Do Something</Text>
        <View style={styles.listMenu}>
          <ItemMenuComponent
            onPress={pressHandlerTopUp}
            image={require('../../assets/icon/ic_topup.png')}
            title="Top Up"
          />
          <ItemMenuComponent
            onPress={pressHandler}
            image={require('../../assets/icon/ic_send.png')}
            title="Send"
          />
          <ItemMenuComponent
            onPress={pressHandler}
            image={require('../../assets/icon/ic_withdraw.png')}
            title="Withdraw"
          />
          <ItemMenuComponent
            onPress={toggleModal}
            image={require('../../assets/icon/ic_more.png')}
            title="More"
          />
        </View>
      </View>

      <MoreMenuModalComponent
        isVisible={isModalVisible}
        onClose={toggleModal}
      />

      <View style={styles.containerMenu}>
        <Text style={styles.title}>Latest Transactions</Text>
        <View style={styles.listTransactions}>
          <ItemTransactionsComponent
            image={require('../../assets/icon/ic_topup.png')}
            color="#E7F5FD"
            title="Top Up"
            day="Yesterday"
            amount="100.000"
          />
          <ItemTransactionsComponent
            image={require('../../assets/icon/ic_reward.png')}
            color="#F5E8F9"
            title="Cashback"
            day="Sep 11"
            amount="100.000"
          />
          <ItemTransactionsComponent
            image={require('../../assets/icon/ic_withdraw.png')}
            color="#E5F7EE"
            title="Withdraw"
            day="Sep 12"
            amount="100.000"
          />
          <ItemTransactionsComponent
            image={require('../../assets/icon/ic_send.png')}
            color="#EDEBFF"
            title="Transfer"
            day="Sep 12"
            amount="100.000"
          />
          <ItemTransactionsComponent
            image={require('../../assets/icon/fi_shopping-cart.png')}
            color="#FEF0DF"
            title="Electric"
            day="Sep 12"
            amount="100.000"
          />
        </View>
      </View>

      <View style={styles.containerMenu}>
        <Text style={styles.title}>Send Again</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={pressHandler}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No Data Available</Text>
          }
        />
      </View>

      <View style={styles.containerMenu}>
        <Text style={styles.title}>Friendly Tips</Text>
        <View style={styles.listFriendly}>
          <ItemFriendlyTipsComponent
            onPress={pressHandler}
            image={require('../../assets/img/img_tips4.png')}
            title=" Best tips for using a credit Card"
          />
          <ItemFriendlyTipsComponent
            onPress={pressHandler}
            image={require('../../assets/img/img_tips4.png')}
            title=" Best tips for using a credit Card"

        </View>
        <View style={styles.listFriendly}>
          <ItemFriendlyTipsComponent
            onPress={pressHandler}
            image={require('../../assets/img/img_tips4.png')}
            title=" Best tips for using a credit Card"
          />
          <ItemFriendlyTipsComponent
            onPress={pressHandler}
            image={require('../../assets/img/img_tips4.png')}
            title=" Best tips for using a credit Card"

        </View>
      </View>
    </ScrollView>
  );
};

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

export default HomeScreenBackup;
