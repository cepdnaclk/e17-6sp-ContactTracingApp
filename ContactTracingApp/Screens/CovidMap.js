import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from "react-native-maps";
import { useState,useEffect } from 'react';
import {Component } from 'react';

/*const [restaurants, setRestaurants] = useState([]);
useEffect(() => {
   let data = fetchData();
   setRestaurants(data)
      });*/

 //const [reports, setRestaurants] = useState([]); 
export default class App extends Component {
  
 

  state = { reports: [] }
   componentDidMount() {
    /*fetch('http://10.0.2.2:5000/getallLocations', {
   method: 'GET'
})*/
 fetch('http://10.0.2.2:5000/getallLocations')

  .then(res => res.json()
  )
  .then(data => {
  //console.log( data.Alllocations)
 this.setState({ reports: data.Alllocations})
  //console.log(data.reports[0])
 
  })
  .catch(console.error)

}

mapMarkers = () => {
return this.state.reports.map((report) => <Marker
  key={report.unique_id}

  coordinate={{ latitude: report.lat, longitude: report.lon }}

  
>
</Marker >)
}

  render() {
    return (
      <MapView style={{ ...StyleSheet.absoluteFillObject }}
      initialRegion={{
        latitude: 37.1,
        longitude: -95.7,
        latitudeDelta: 10,
        longitudeDelta: 45
      }} >
      {this.mapMarkers()}
    </MapView>
    );
  }
  /*fetchlocations = async () => {
    fetch('http://10.0.2.2:5000/getallLocations', {
      method: 'GET'
   })

   .then((responseJson) => {
    console.log(responseJson);
    //console.log(responseJson.Alllocations);
    this.setState({ reports: responseJson.Alllocations })

 })
 .catch((error) => {
    console.error(error);
 });

  };*/

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});