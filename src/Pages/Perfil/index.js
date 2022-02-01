import { StatusBar } from 'expo-status-bar';
import {useForm} from 'react-hook-form'
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

const Tab = createBottomTabNavigator();

export default function Perfil() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Principal") {
            iconName = "home";
          } else if (route.name === "Perfil") {
            iconName = "user";
          }

          
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}