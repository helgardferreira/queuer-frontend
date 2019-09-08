import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AppointmentScreen from '../screens/AppointmentScreen';
import AuthScreen from '../screens/AuthScreen';
import QRScreen from '../screens/QRScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const QRStack = createStackNavigator(
  {
    QR: QRScreen,
  },
  config,
);

QRStack.navigationOptions = {
  tabBarLabel: 'QR',
};

QRStack.path = '';

const FeedbackStack = createStackNavigator(
  {
    Feedback: FeedbackScreen,
  },
  config,
);

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Feedback',
};

FeedbackStack.path = '';

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  config,
);

AuthStack.navigationOptions = {
  tabBarLabel: 'Auth',
  tabBarVisible: false,
};

AuthStack.path = '';

const AppointmentStack = createStackNavigator(
  {
    Appointments: AppointmentScreen,
  },
  config,
);

AppointmentStack.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

AppointmentStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config,
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  // AuthStack,
  AppointmentStack,
  ProfileStack,
});

tabNavigator.path = '';

export { tabNavigator, AuthStack, FeedbackStack, QRStack };
