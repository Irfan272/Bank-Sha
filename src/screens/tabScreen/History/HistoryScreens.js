import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class HistoryScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'rgba(0,0,0,0)'}
        />
        <View style={styles.profileContainer}>
          <View style={styles.profileCard}>
            <View style={styles.profileInfo}>
              <Image
                source={require('../../../assets/img/img_friend4.png')}
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>Irfan Fadillah</Text>
            </View>

            {/* Edit Profile */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_edit_profile.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>Edit Profile</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* My PIN */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_pin.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>My PIN</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Wallet Setting */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_wallet.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>Wallet Setting</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* My Rewards */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_reward.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>My Rewards</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Help Center */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_help.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>Help Center</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Logout */}
            <TouchableOpacity>
              <View style={styles.itemTransactions}>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.iconContent}
                    source={require('../../../assets/icon/ic_logout.png')}
                  />
                </View>
                <View style={styles.detailTransactions}>
                  <Text style={styles.transactionTitle}>Logout</Text>
                </View>
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
    paddingTop: 80, // Tambahkan padding sesuai dengan tinggi header
    // backgroundColor: '#F6F8FB',
    marginHorizontal: 20,
  },
  profileContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
  },
  profileInfo: {
    // flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 25,
    // marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14193F',
    marginTop: 10,
  },
  itemTransactions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderTopWidth: 1, // Menambahkan border atas
    borderBottomWidth: 1, // Menambahkan border bawah
    borderColor: '#E0E0E0', // Warna border (misalnya abu-abu terang)
  },
  iconContainer: {
    // width: 24,
    // height: 24,
    // borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F0F0F0',
    marginRight: 15,
  },
  iconContent: {
    width: 30,
    height: 30,
    // borderRadius: 25,
  },
  detailTransactions: {
    flex: 1,
    justifyContent: 'center',
  },
  transactionTitle: {
    fontSize: 16,
    color: '#14193F',
    fontWeight: 'bold',
  },
});

export default HistoryScreens;
