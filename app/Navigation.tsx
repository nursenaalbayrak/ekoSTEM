import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BagisScreen from './BagisScreen';
import CO2Screen from './CO2Screen';
import CocuklarScreen from './CocuklarScreen';
import KitDetayScreen from './KitDetayScreen';
import KitiniTakipEtScreen from './KitiniTakipEtScreen';
import KonumDetayScreen from './KonumDetayScreen';
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import OdevlerimScreen from './OdevlerimScreen';
import OgretmenPaneliScreen from './OgretmenPaneliScreen';
import RozetlerimScreen from './RozetlerimScreen';
import STEMScreen from './STEMScreen';
import TaskScreen from './TaskScreen';
import ToplumsalEtkiScreen from './ToplumsalEtkiScreen';
import WelcomeScreen from './WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Harita" component={MapScreen} />
      <Tab.Screen name="Görevler" component={TaskScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Giris" component={WelcomeScreen} />
      <Stack.Screen name="AnaMenü" component={MainTabs} />
      <Stack.Screen name="CO2" component={CO2Screen} />
      <Stack.Screen name="Cocuklar" component={CocuklarScreen} />
      <Stack.Screen name="Bagis" component={BagisScreen} />
      <Stack.Screen name="KitiniTakipEt" component={KitiniTakipEtScreen} />
      <Stack.Screen name="KitDetay" component={KitDetayScreen} />
      <Stack.Screen name="STEM" component={STEMScreen} />
      <Stack.Screen name="Rozetlerim" component={RozetlerimScreen} />
      <Stack.Screen name="Harita" component={MapScreen} />
      <Stack.Screen name="OgretmenPaneli" component={OgretmenPaneliScreen} />
      <Stack.Screen name="Odevlerim" component={OdevlerimScreen} />
      <Stack.Screen name="KonumDetay" component={KonumDetayScreen} />
      <Stack.Screen name="Görevler" component={TaskScreen} />
      <Stack.Screen name="ToplumsalEtki" component={ToplumsalEtkiScreen} />
    </Stack.Navigator>
  );
}
