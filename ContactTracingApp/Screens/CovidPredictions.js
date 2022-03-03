import React, { useState } from 'react';
//import AppLoading from 'expo-app-loading';
import {
    StyleSheet, Text, View, Button, Dimensions,
    Image, TouchableOpacity, StatusBar,
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  export default function CovidPredictions(){
      return(
        <View style={styles.container}>
             <StatusBar backgroundColor='#f6b1a7ff' barStyle="light-content"/>
             <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
           1,2,4,18,34, 45,67 ,123,45
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#0000",
      backgroundGradientFrom: "#ff6b65",
      backgroundGradientTo: "#0000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "4",
        stroke: "red"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
            </View>
             /*  <View style={styles.container}>
               
               <PieChart
      data={ [
        {
          name: "Seoul",
          population: 2150,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 280,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        
      ]}
      width={Dimensions.get("window").width} // from react-native
      height={220}

      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
       
      }}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"10"}
      center={[10, 50]}
      
    />
              </View>*/
      );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f6b1a7ff'
    }
   
})
