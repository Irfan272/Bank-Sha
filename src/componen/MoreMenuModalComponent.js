import React, {Component} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import ItemMenuComponent from './ItemMenuComponent';
import {moreListModul} from '../screens/tabScreen/Home/data/listModul';
import {FlatList} from 'react-native-gesture-handler';

class MoreMenuModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible, // Fixed to use props
      onClose: this.props.onClose, // Fixed to use props
      moreListModul: moreListModul,
    };
  }

  async onPressCell(dataListModule) {
    const {navigation} = this.props;

    switch (dataListModule) {
      case 1:
        navigation.navigate('TopUpScreen');
        return;
      case 2:
        navigation.navigate('SendScreen');
        return;
      case 3:
        navigation.navigate('WithdrawScreen');
        return;
      case 4:
        navigation.navigate('DataScreen');
        return;
      case 5:
        navigation.navigate('DataScreen');
        return;
      case 6:
        navigation.navigate('WaterScreen');
        return;
      case 7:
        navigation.navigate('StreamScreen');
        return;
      case 8:
        navigation.navigate('MovieScreen');
        return;
      case 9:
        navigation.navigate('FoodScreen');
        return;
      case 10:
        navigation.navigate('TravelScreen');
        return;
      default:
        return;
    }
  }

  render() {
    const {isVisible, onClose} = this.props; // Fixed to use props

    return (
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Do More With Us</Text>
            </View>
            <View style={styles.menuContainer}>
              <FlatList
                data={moreListModul}
                keyExtractor={item => item.modulId.toString()}
                scrollEnabled={true}
                numColumns={3} // Display three items per row
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
                columnWrapperStyle={styles.menuRow} // Apply the new style for row spacing
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    position: 'relative',
    alignItems: 'center', // Center content horizontally
  },
  modalHeader: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'column',
    width: '100%', // Ensure it takes full width
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space evenly between items
    flexWrap: 'wrap', // Allow items to wrap to the next line if needed
  },
  emptyListText: {
    textAlign: 'center',
    color: '#A0A0A0',
  },
});

export default MoreMenuModalComponent;
