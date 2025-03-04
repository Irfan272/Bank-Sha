import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const ResultScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const selectedBank = route.params?.selectedBank;

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Top Up Wallet Berhasil</Text>
                </View>
                {selectedBank ? (
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Selected Bank: {selectedBank.title}</Text>
                        <Text style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
                            Last Update: {selectedBank.lastUpdate}
                        </Text>
                    </View>
                ) : (
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>No Bank Selected</Text>
                        <Text style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
                            Please select a bank for your top-up.
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={{
                        backgroundColor: '#5142E6',
                        borderRadius: 20,
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        shadowOffset: { width: 0, height: 2 },
                    }}
                    onPress={() =>  navigation.navigate('HomeTabs')} 
                >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                            Back To Home
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ResultScreen;
