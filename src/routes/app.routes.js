import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchButton from '../components/SearchButton';

import NewsScreen from '../screens/News';
import CreateNews from '../screens/CreateNews';

const Stack = createNativeStackNavigator()

export default function AppScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen
          name="CreateNews"
          component={CreateNews}
          options={{ title: 'Criar Notícia' }}
        />
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: 'Notícias',
            headerRight: props => <SearchButton {...props} />
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

