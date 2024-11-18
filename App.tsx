import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './src/components/Menu';
import More from './src/components/More';
import Cart from './src/components/Cart';
import Item from './src/components/Item';
import MyInfo from './src/components/MyInfo';
import PaymentMethods from './src/components/PaymentMethods';
import CardInfo from './src/components/CardInfo';
import OrderPlaced from './src/components/OrderPlaced';
import Auth from './src/components/Auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for screens not in tabs
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="CardInfo" component={CardInfo} />
      <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
    </Stack.Navigator>
  );
}

// Tab Navigator wrapping the Stack
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Auth" component={Auth} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

// Main App Component
export default function App() {
  try {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  } catch (error) {
    console.error('Navigation error:', error);
  }
}
