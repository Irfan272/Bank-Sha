import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ItemFriendlyTipsComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.containerFriendly}>
      <Image source={props.image} style={styles.imageFriendly} />
      <Text style={styles.tipText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerFriendly: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imageFriendly: {
    width: '100%',
    height: 100, // Adjusted to ensure it fills the container properly
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#14193F',
  },
});

export default ItemFriendlyTipsComponent;
