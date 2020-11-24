import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/Home';
import IconList from './components/IconList';
import Favorites from './pages/Favorites';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              return <Foundation name="home" size={40} color={color} />;
            }
            if (route.name === 'Favorites') {
              iconName = focused ? 'cards-heart' : 'heart-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={40}
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
          style: {
            backgroundColor: '#272627',
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
