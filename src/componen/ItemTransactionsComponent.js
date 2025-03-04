const {
  View,
  Image,
  StyleSheet,
  Text,
} = require('react-native');

const ItemTransactionsComponent = (props) => {
  return (
    <View style={styles.itemTransactions}>
      <View style={[styles.iconContainer, {backgroundColor: props.color}]}>
        <Image source={props.image} style={styles.transactionIcon} />
      </View>
      <View style={styles.detailTransactions}>
        <View style={styles.transactionTextContainer}>
          <Text style={styles.transactionTitle}>{props.title}</Text>
          <Text style={styles.transactionDate}>{props.day}</Text>
        </View>
        <Text style={styles.transactionAmount}>Rp. {props.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemTransactions: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,

  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  transactionIcon: {
    width: 25,
    height: 25,
  },
  detailTransactions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTextContainer: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#14193F',
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#14193F',
    fontWeight: 'bold',
  },
});

export default ItemTransactionsComponent;
