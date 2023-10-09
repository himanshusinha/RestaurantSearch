import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constant/routes';
import SearchScreen from '../screens/search/SearchScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.HOME_SCREEN}
          component={HomeScreen}
          options={{title: 'Business Search'}}
        />
        <Stack.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
