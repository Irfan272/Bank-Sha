import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class SelectBankComponent extends React.Component {
    render() {
        const { title, image, lastUpdate, isSelected, onPress } = this.props;
        
        return (
            <TouchableOpacity onPress={onPress}>
                <View
                    style={[
                        styles.container,
                        {
                            backgroundColor: isSelected ? '#d1e7ff' : 'white', // Highlight selected bank
                            borderColor: isSelected ? 'blue' : 'transparent', // Border color when selected
                            borderWidth: isSelected ? 2 : 0, // Border width when selected
                        }
                    ]}
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={image}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.lastUpdate}>{lastUpdate}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 10,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 120,
        marginRight: 10,
    },
    textContainer: {
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#14193F',
    },
    lastUpdate: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default SelectBankComponent;
