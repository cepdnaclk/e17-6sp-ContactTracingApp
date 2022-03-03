//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function ckdusel({ navigation }) {
    
    
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={{
            color: 'white',
            fontFamily: 'Nunito-ExtraBoldItalic',
            fontSize:20
        }}>High risk zones</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={{
            color: 'white',
            fontFamily: 'Nunito-ExtraBoldItalic',
            fontSize:20
        }}>Future predictions </Text>
        </TouchableOpacity>
        
        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
        
        image: {
            marginBottom: 40,
        },
        
        inputView: {
            backgroundColor: "#FFC0CB",
            borderRadius: 30,
            width: "70%",
            height: 45,
            marginBottom: 20,
            
            alignItems: "center",
        },
        
        TextInput: {
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,
        },
        
        forgot_button: {
            height: 30,
            marginBottom: 30,
        },
        
        loginBtn: {
            width: "40%",
            borderRadius: 25,
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            backgroundColor: "#ff6b65",
            //#ff6b65
            //#f6b1a7ff
            
        },
    });