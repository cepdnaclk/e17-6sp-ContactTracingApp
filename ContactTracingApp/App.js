
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext} from './components/context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//RootStackScreen
import RootStackScreen from './Screens/RootStackScreen';
import { defaultProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const App =()=> {
  return(
<NavigationContainer>
  

      <RootStackScreen/>
</NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
