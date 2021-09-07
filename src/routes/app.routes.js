import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchButton from '../components/SearchButton';

import NewsScreen from '../screens/News';
import CreateNews from '../screens/CreateNews';
import DetailNews from '../screens/DetailNews';

const Stack = createNativeStackNavigator()

export default function AppScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="News"
        screenOptions={{
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
        }}>

        <Stack.Screen
          name="CreateNews"
          component={CreateNews}
          options={({ route }) => ({ title: route.params ? 'Editar Notícia' : 'Criar Notícia' })}
        />

        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: 'Notícias',
            headerRight: props => <SearchButton {...props} />
          }} />

        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={{
            title: 'Notícia',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

