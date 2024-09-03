import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Sesuaikan path jika perlu
import LogScreen from './LogScreen';   // Sesuaikan path jika perlu
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home'; // Nilai default

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Log') {
            iconName = 'list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false, // Menghapus header untuk semua tabs
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Log" component={LogScreen} />
    </Tab.Navigator>
  );
}
