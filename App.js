import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./scr/theme";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import StorePantalla from "./scr/caracteristicas/stores/pantallaStore/StorePantalla";
import { restaurantsRequest } from "./scr/services/restaurants/restaurants.service";
import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const Maps = () => <Text>Mapa</Text>;
  const Settings = () => <Text>Ajustes</Text>;

  return (
    <ThemeProvider theme={theme}>
      {/* <StorePantalla /> */}
      <NavigationContainer>
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = focused
                ? 'md-restaurant'
                : 'ios-restaurant-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >

          <Tab.Screen name="Restaurants" component={StorePantalla} />
          <Tab.Screen name="Map" component={Maps} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
