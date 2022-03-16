
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions,StatusBar,} from 'react-native';
import {Component } from 'react';

//import AppLoading from 'expo-app-loading';
import {
    LineChart,

    PieChart,

  } from "react-native-chart-kit";


export default class App extends Component {

constructor(props) {
    super(props);
    this.state = {
    data1:100,
    data2:200,
    data3:300,

    };
    }

   componentDidMount() {
    
 fetch('http://10.0.2.2:5000/covidUpdates')

  .then(res => res.json()
  )
  .then(data => {
  //console.log(  data.Count[0].Confirmed)
this.setState({ data1: data.Count[0].Confirmed})
this.setState({ data2: data.Count[0].Deaths})
 this.setState({ data3: data.Count[0].Recovered})
 // console.log(data.Count)
 
  })
  .catch(console.error)

}


  render() {
    

    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#ff6b65' barStyle="light-content"/>
      <Text style={styles.textStyle}>COVID 19 Updates</Text>
   
        
<PieChart
data={ [
  {
    name: "Confirmed Cases",
    population: this.state.data1,
    color: "#ff8c00",
    legendFontColor: "black",
    legendFontSize: 13
  },
  {
    name: "Deaths",
    population: this.state.data2
    ,
    color: "#dc143c",
    legendFontColor: "black",
    legendFontSize: 13
  },
  {
    name: "Recovered",
    population: this.state.data3
    ,
    color: "#006400",
    legendFontColor: "black",
    legendFontSize: 13
  },
  
 ]}
width={Dimensions.get("window").width} // from react-native
height={220}

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

}}
accessor={"population"}
backgroundColor={"transparent"}
paddingLeft={"5"}
center={[10, 10]}

/>
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
},

}}

bezier
style={{
marginVertical: 8,
borderRadius: 16,
paddingTop:20

}}
/>
       </View>
    );
  }
  

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#f6b1a7ff'
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 8,
    fontSize:20
  }
 
});