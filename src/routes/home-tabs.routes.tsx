import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {Home} from '@screens/home/view';
import {MyAds} from '@screens/MyAds';
import {useTheme} from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';

type HomeTabsRoutes = {
  home: undefined;
  myAds: undefined;
};

export type HomeTabsNavigatorRoutesProps =
  BottomTabNavigationProp<HomeTabsRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<HomeTabsRoutes>();

export function HomeTabsRoutes() {
  const {COLORS} = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.GRAY_200,
        tabBarInactiveTintColor: COLORS.GRAY_400,
        tabBarStyle: {
          backgroundColor: COLORS.GRAY_700,
          height: 86,
          paddingBottom: 30,
          paddingTop: 22,
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={30} />
          ),
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="pricetag-outline" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="logOut"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="exit-outline" size={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
