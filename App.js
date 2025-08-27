import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './src/screens/SearchScreen';
import { BookDetailsScreen } from './src/screens/BookDetailsScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Search" 
          component={SearchScreen}
          options={{ title: 'Book Search' }}
        />
        <Stack.Screen 
          name="BookDetails" 
          component={BookDetailsScreen}
          options={{ title: 'Book Details' }}
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen}
          options={{ title: 'My Favorites' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
