import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Screens
import HomeScreen from '../screens/tabScreen/Home/HomeScreen';
import TopUpScreens from '../screens/modulesPage/TopUp/TopUpScreen';
import DataScreen from '../screens/modulesPage/Data/DataScreen';
import FoodScreen from '../screens/modulesPage/Food/FoodScreen';
import MovieScreen from '../screens/modulesPage/Movie/MovieScreen';
import SendScreen from '../screens/modulesPage/Send/SendScreen';
import StreamScreen from '../screens/modulesPage/Stream/StreamScreen';
import TravelScreen from '../screens/modulesPage/Travel/TravelScreen';
import WaterScreen from '../screens/modulesPage/Water/WaterScreen';
import WithdrawScreen from '../screens/modulesPage/Withdraw/WithdrawScreen';
import HistoryScreens from '../screens/tabScreen/History/HistoryScreens';

import {StyleSheet, Text, View} from 'react-native';
import ResultScreen from '../screens/modulesPage/TopUp/ResultScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/tabScreen/Profile/ProfileScreen';
import PinScreen from '../screens/tabScreen/Profile/PinScreen';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const CustomHeaderTitle = ({title}) => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

// Main Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopUpScreen"
          component={TopUpScreens}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Top Up" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DataScreen"
          component={DataScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Data" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FoodScreen"
          component={FoodScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Food" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Movie" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="SendScreen"
          component={SendScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Transfer" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="StreamScreen"
          component={StreamScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Stream" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="TravelScreen"
          component={TravelScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Travel" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="WaterScreen"
          component={WaterScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Water" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="WithdrawScreen"
          component={WithdrawScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Withdraw" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Profile" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
         <Stack.Screen
          name="PinScreen"
          component={PinScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle title="Edit PIN" />,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
