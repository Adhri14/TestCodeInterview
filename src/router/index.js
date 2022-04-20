import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, DetailMovie} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailMovie" component={DetailMovie} />
    </Stack.Navigator>
  );
};

export default Router;
