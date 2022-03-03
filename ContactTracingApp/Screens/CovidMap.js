import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from "react-native-maps";

export default function CovidMap() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
          }} > 
          <Marker coordinate={{
               latitude: 37.78825,
               longitude: -122.4324}} />
          </MapView>
    </View>
  );
}
const fetchlocations = () => {
    fetch('http://localhost:5000/getallLocations', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
    });
 }
 fetchlocations();
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