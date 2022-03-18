/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
  
   Text,
   
   View,
 } from 'react-native';
 
 import RootScreen from './src/RootScreen';
 
 
 const App=() =>  {
   
   return (
     <SafeAreaView >
       <View>
       <RootScreen/>
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default App;
 