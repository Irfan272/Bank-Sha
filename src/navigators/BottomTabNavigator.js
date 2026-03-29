import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryScreens from '../screens/tabScreen/History/HistoryScreens';
import AccountScreens from '../screens/tabScreen/Profile/AccountScreens';
import HomeScreen from '../screens/tabScreen/Home/HomeScreen';
import {StyleSheet, Text, View} from 'react-native';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreens}
        options={{
          headerTitle: () => <CustomHeaderTitle title="History" />,
          headerStyle: {backgroundColor: 'transparent'},
          headerTransparent: true, // Membuat header menjadi transparan
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

// Stack for Profile Screen
const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreens}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Account" />,
          headerStyle: {backgroundColor: 'transparent'},
          headerTransparent: true, // Membuat header menjadi transparan
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const CustomHeaderTitle = ({title}) => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

// Bottom Tab Navigator
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else if (route.name === 'Account') {
            iconName = 'account';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryStackNavigator} // Use History Stack
        options={{tabBarLabel: 'History'}}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountStackNavigator} // Use Profile Stack
        options={{tabBarLabel: 'Account'}}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#14193F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
