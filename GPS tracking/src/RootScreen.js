import React ,{useEffect,StatusBar,useState} from 'react';

import{View,Text} from 'react-native';

import { PermissionsAndroid } from 'react-native';
import RNLocation from 'react-native-location';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
RNLocation.configure({
    distanceFilter: 100, // Meters
    desiredAccuracy: {
      ios: 'best',
      android: 'balancedPowerAccuracy',
    },
    // Android only
    androidProvider: 'auto',
    interval: 5000, // Milliseconds
    fastestInterval: 10000, // Milliseconds
    maxWaitTime: 5000, // Milliseconds
    // iOS Only
    activityType: 'other',
    allowsBackgroundLocationUpdates: false,
    headingFilter: 1, // Degrees
    headingOrientation: 'portrait',
    pausesLocationUpdatesAutomatically: false,
    showsBackgroundLocationIndicator: false,
  });
  let locationSubscription = null;
  let locationTimeout = null;
export default function RootScreen(){
    const [Locations, setLocations] = useState('');

    const sendLocaions = ()=>{
        fetch("http://10.0.2.2:5000/addLocations",{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
           locations:locations


          })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)

        })
    }
 
useEffect(()=>{
    const requestPermission=async()=>{
        const backgroundgranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
            {
              title: 'Background Location Permission',
              message:
                'We need access to your location ' +
                'so you can get live quality updates.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (backgroundgranted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('permission granted')
              ReactNativeForegroundService.add_task(
                () => {
                  RNLocation.requestPermission({
                    ios: 'whenInUse',
                    android: {
                      detail: 'fine',
                    },
                  }).then((granted) => {
                    console.log('Location Permissions: ', granted);
                    // if has permissions try to obtain location with RN location
                    if (granted) {
                      locationSubscription && locationSubscription();
                      locationSubscription = RNLocation.subscribeToLocationUpdates(
                        ([locations]) => {
                          locationSubscription();
                          locationTimeout && clearTimeout(locationTimeout);
                         setLocations(locations.latitude);
                          fetch("http://10.0.2.2:5000/addLocations",{
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify({
                           AllLocations:Locations


                            })
                            }).then(res=>res.json())
                            .then(data=>{
                                console.log(data)

                            })
                            console.log(locations.latitude);
                        },
                      );
                    } else {
                      locationSubscription && locationSubscription();
                      locationTimeout && clearTimeout(locationTimeout);
                      console.log('no permissions to obtain location');
                    }
                  });
                },
                {
                  delay: 1000,
                  onLoop: true,
                  taskId: 'taskid',
                  onError: (e) => console.log('Error logging:', e),
                },
              );
            //do your thing!
          }
    }
    
    requestPermission();
},[])
//request the permission before starting the service.

    return(
        <View>
         
            <Text>welcome to background tracking</Text>
        </View>
    )
}