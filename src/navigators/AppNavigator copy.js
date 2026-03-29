import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/tabScreen/Home/HomeScreen';
import TopUpScreens from '../screens/modulesPage/TopUp/TopUpScreen';
import BCAScreens from '../screens/modulesPage/TopUp/ResultScreen';
import ProfileScreens from '../screens/tabScreen/Profile/AccountScreens';
import DataScreen from '../screens/modulesPage/Data/DataScreen';
import FoodScreen from '../screens/modulesPage/Food/FoodScreen';
import MovieScreen from '../screens/modulesPage/Movie/MovieScreen';
import SendScreen from '../screens/modulesPage/Send/SendScreen';
import StreamScreen from '../screens/modulesPage/Stream/StreamScreen';
import TravelScreen from '../screens/modulesPage/Travel/TravelScreen';
import WaterScreens from '../screens/modulesPage/Water/WaterScreen';
import WaterScreen from '../screens/modulesPage/Water/WaterScreen';
import WithdrawScreen from '../screens/modulesPage/Withdraw/WithdrawScreen';
import HistoryScreens from '../screens/tabScreen/History/HistoryScreens';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpScreen"
        component={TopUpScreens}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="DataScreen"
        component={DataScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="SendScreen"
        component={SendScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="StreamScreen"
        component={StreamScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="TravelScreen"
        component={TravelScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="WaterScreen"
        component={WaterScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
      <Stack.Screen
        name="WithdrawScreen"
        component={WithdrawScreen}
        options={{
          tabBarVisible: false, // Sembunyikan BottomTabBar pada halaman ini
        }}
      />
    </Stack.Navigator>
  );
};

// Example Top Tab Navigator
function TopUpTopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="BCA" component={BCAScreens} />
      <TopTab.Screen name="Another" component={ProfileScreens} />
    </TopTab.Navigator>
  );
}

// Example Bottom Tab Navigator
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'TopUp') {
            iconName = 'credit-card';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <BottomTab.Screen name="Home" component={HomeStackNavigator} />
      <BottomTab.Screen name="History" component={HistoryScreens} />
      <BottomTab.Screen name="Profile" component={ProfileScreens} />
    </BottomTab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreens} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreens} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
