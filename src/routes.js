import 'react-native-gesture-handler';
import * as React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const { height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              return <Foundation name="home" size={30} color={color} />;
            }
            if (route.name === 'Favorites') {
              iconName = focused ? 'cards-heart' : 'heart-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#A1A2A1',
          keyboardHidesTabBar: true,
          tabStyle: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 35,
            height: 35,
          },
          style: {
            backgroundColor: '#272627',
            height: height * 0.08,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
