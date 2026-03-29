import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';

const ItemMenuComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.itemMenu}>
      <View style={styles.menuItemBackground}>
        <Image style={styles.imageMenu} source={props.image} />
      </View>
      <Text style={styles.menuItemText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemMenu: {
    width: '23%',
    alignItems: 'center',
    marginVertical: 10, // Pastikan ada ruang vertikal yang cukup
  },
  pressed: {
    opacity: 0.7,
  },
  menuItemBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  imageMenu: {
    width: 40,
    height: 40,
  },
  menuItemText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ItemMenuComponent;
