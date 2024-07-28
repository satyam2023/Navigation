import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../views/First/FirstScreen';
import SecondScreen from '../views/Second/SecondScreen';
import ThirdScreen from '../views/Third/ThirdScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../views/Tab1/Tab1';
import Tab2 from '../views/Tab2/Tab2';
import Tab3 from '../views/Tab3/Tab3';

export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
  Tab: undefined;
};

type TabParamList = {
    Tab1: undefined;
    Tab2: undefined;
    Tab3: undefined;
  };

const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<TabParamList>();

  const TabNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#E6E6E6'}}}>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{title: 'First Screen'}}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Third" component={ThirdScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
