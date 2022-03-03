import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Selection from './Selection';
import covidsel from './covidsel';
import ckdusel from './ckdusel';
import CovidPredictions from './CovidPredictions';
import CovidMap from './CovidMap';
const RootStack = createStackNavigator();

export default function RootStackScreen({navigation}) {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignIn" component={SignIn} />
            <RootStack.Screen name="SignUp" component={SignUp} />
            <RootStack.Screen name="Selection" component={Selection} />
            <RootStack.Screen name="covidsel" component={covidsel} />
            <RootStack.Screen name="ckdusel" component={ckdusel} />
            <RootStack.Screen name="CovidPredictions" component={CovidPredictions} />
            <RootStack.Screen name="CovidMap" component={CovidMap} />
        </RootStack.Navigator>
    );
}
