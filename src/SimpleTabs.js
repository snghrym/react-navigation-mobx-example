/**
 * @flow
 */

import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';
import { inject } from 'mobx-react/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import SampleText from './SampleText';

const MyNavScreen = inject('navigationStore')(({ navigationStore, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigationStore.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigationStore.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button
      onPress={() => navigationStore.goBack(null)}
      title="Go back"
    />
  </ScrollView>
));

const MyHomeScreen = () => (
  <MyNavScreen
    banner="Home Tab"
  />
);

MyHomeScreen.navigationOptions = {
  tabBar: {
    label: 'Home',
    icon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  },
};

const MyPeopleScreen = () => (
  <MyNavScreen
    banner="People Tab"
  />
);

MyPeopleScreen.navigationOptions = {
  tabBar: {
    label: 'People',
    icon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-people' : 'ios-people-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  },
};

const MyChatScreen = () => (
  <MyNavScreen
    banner="Chat Tab"
  />
);

MyChatScreen.navigationOptions = {
  tabBar: {
    label: 'Chat',
    icon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  },
};

const MySettingsScreen = () => (
  <MyNavScreen
    banner="Settings Tab"
  />
);

MySettingsScreen.navigationOptions = {
  tabBar: {
    label: 'Settings',
    icon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  },
};

const SimpleTabs = TabNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '',
  },
  People: {
    screen: MyPeopleScreen,
    path: 'cart',
  },
  Chat: {
    screen: MyChatScreen,
    path: 'chat',
  },
  Settings: {
    screen: MySettingsScreen,
    path: 'settings',
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default SimpleTabs;
