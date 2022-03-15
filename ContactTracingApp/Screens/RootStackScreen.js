import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Selection from './Selection';
import Covidsel from './Covidsel';
import Ckdusel from './Ckdusel';
import CovidPredictions from './CovidPredictions';
import CovidMap from './CovidMap';
import CKDuPredictions from './CKDuPredictions';
import CKDuMap from './CKDuMap';
const RootStack = createStackNavigator();

export default function RootStackScreen({navigation}) {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignIn" component={SignIn} />
            <RootStack.Screen name="SignUp" component={SignUp} />
            <RootStack.Screen name="Selection" component={Selection} />
            <RootStack.Screen name="Covidsel" component={Covidsel} />
            <RootStack.Screen name="Ckdusel" component={Ckdusel} />
            <RootStack.Screen name="CovidPredictions" component={CovidPredictions} />
            <RootStack.Screen name="CovidMap" component={CovidMap} />
            <RootStack.Screen name="CKDuPredictions" component={CKDuPredictions} />
            <RootStack.Screen name="CKDuMap" component={CKDuMap} />
        </RootStack.Navigator>
    );
}
