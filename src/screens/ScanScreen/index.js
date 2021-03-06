import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { auth, firestore } from '../../firebase/config'

const ScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const checkIn = ({type, data}) => {
    firestore().collection('queues')
    .doc(data)
    .update({status: true})
    .then(doc => {
      Alert.alert('Person Checked In');
    })
    .catch(error => Alert.alert('ERROR'));
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        style={{ flex: 1 }}
        onBarCodeScanned={checkIn}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </BarCodeScanner>
    </View>
  );
}

export default ScanScreen;