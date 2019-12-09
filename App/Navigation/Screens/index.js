import React from 'react'
import { Start, Web } from 'App/Containers'
import { NavButton } from 'App/Components/Buttons'
import { Colors } from 'App/Themes'
import {
  Onboarding,
  Home,
  Rate,
  Settings,
  Connect,
  Play,
  Player,
  Drive,
  Beep,
  Discover,
  CodeLab,
  Lessons,
  GetStarted,
  Lab,
  WhichRobot,
  ConnectRobot} from 'App/Modules'
import {
  dynamicTitleNavigationOptions
} from 'App/Navigation/NavigationOptions'

export default {
  StartScreen: {
    screen: Start,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  WebScreen: {
    screen: Web
  },
  OnboardingScreen: {
    screen: Onboarding,
    navigationOptions: (navigation) => {
      const { navigate } = navigation.navigation
      return {
        headerRight: <NavButton style={{text: {color: Colors.primaryDark}}} onPress={() => navigate('WhichRobotScreen')} text='Skip' />
      }
    }
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Otto DIY',
      headerLeft: null
    })
  },
  RateScreen: {
    screen: Rate,
    navigationOptions: ({navigation}) => ({
      title: 'Spread the word'
    })
  },
  SettingsScreen: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings'
    })
  },
  ConnectScreen: {
    screen: Connect,
    navigationOptions: ({navigation}) => ({
      title: 'Connect'
    })
  },
  PlayScreen: {
    screen: Play,
    navigationOptions: ({navigation}) => ({
      title: 'Play & Explore'
    })
  },
  PlayerScreen: {
    screen: Player,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  DriveScreen: {
    screen: Drive,
    navigationOptions: ({navigation}) => ({
      title: 'Drive'
    })
  },
  BeepScreen: {
    screen: Beep,
    navigationOptions: ({navigation}) => ({
      title: 'Beep Beep'
    })
  },
  DiscoverScreen: {
    screen: Discover,
    navigationOptions: ({navigation}) => ({
      title: 'Discover'
    })
  },
  CodeLabScreen: {
    screen: CodeLab,
    navigationOptions: ({navigation}) => ({
      title: 'Code Lab'
    })
  },
  LearnScreen: {
    screen: Lessons,
    navigationOptions: ({navigation}) => ({
      title: 'Build & Learn'
    })
  },
  GetStartedScreen: {
    screen: GetStarted,
    navigationOptions: ({navigation}) => ({
      title: 'Get Started'
    })
  },
  LabScreen: {
    screen: Lab,
    navigationOptions: ({navigation}) => ({
      title: 'Design Lab'
    })
  },
  WhichRobotScreen: {
    screen: WhichRobot,
    navigationOptions: ({navigation}) => ({
      title: 'Which Otto?'
    })
  },
  ConnectRobotScreen: {
    screen: ConnectRobot,
    navigationOptions: dynamicTitleNavigationOptions
  }
}
