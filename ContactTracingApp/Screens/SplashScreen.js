import React, { useState } from 'react';
//import AppLoading from 'expo-app-loading';
import {
    StyleSheet, Text, View, Button, Dimensions,
    Image, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import SignIn from './SignIn';
import Selection from './Selection';
import CovidPredictions from './CovidPredictions';
import CovidMap from './CovidMap';

export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#f6b1a7ff' barStyle="light-content"/>
        <View style={styles.header}>
        <Text style={[styles.hText, {
            fontFamily: 'Nunito-ExtraBoldItalic'
        }]}>Tracey</Text>
        <Animatable.Image
        //delay={1500}
        animation={"bounceIn"}
        //source={require('../assets/quarantine-icon.png')}
        style={styles.logo}
        resizeMode='stretch'
        />
        </View>
        <Animatable.View
        style={styles.footer}
        animation={"fadeInUpBig"}
        >
        <Text style={[styles.title, {
            fontFamily: 'Nunito-ExtraBoldItalic'
        }]}>Trace together for a safer Sri Lanka.</Text>
        <Text style={styles.text}>Sign in here</Text>
        <View style={styles.button}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('CovidMap')}
        style={[styles.signin, {
            backgroundColor: '#ff6b65',
            borderColor:'#ff6b65',
            borderWidth: 1,
            marginTop: 15,
           
        }]}
        >
        <Text
        style={{
            color: 'white',
            fontFamily: 'Nunito-ExtraBoldItalic'
        }}
        >Get Started</Text>
        {/* chevron-double-right */}
        </TouchableOpacity>
        </View>
        </Animatable.View>
        </View>
        )
    }
    
    const { height } = Dimensions.get("screen");
    const heightLogo = height * 0.28;
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#f6b1a7ff'
        },
        header:{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            //fontWeight: 'bold',
        },
        hText: {
            fontSize: 30,
            padding: 30,
            fontFamily: 'Nunito-ExtraBoldItalic',
            color:'#000000'
        },
        footer: {
            flex: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30,
            //fontFamily: 'Nunito-ExtraBoldItalic',
        },
        logo: {
            width: heightLogo,
            height:heightLogo,
        },
        title: {
            color: '#05375a',
            fontSize: 25,
            fontFamily: 'Nunito-ExtraBoldItalic',
        },
        text: {
            color: 'grey',
            marginTop: 5,
            fontFamily: 'Nunito-Italic',
        },
        button: {
            alignItems: 'flex-end',
            marginTop: 30,
        },
        signin: {
            width: 150,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            flexDirection:'row'
            
        },
        textSign: {
            color: 'white',
        },
    })