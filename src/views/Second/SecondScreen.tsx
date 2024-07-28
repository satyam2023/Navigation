import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import { RootStackParamList } from '../../routes/Routes';
type SecondScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Second'
>;

const SecondScreen = (navigation: SecondScreenNavigationProp) => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={{flex: 1, opacity: opacity,justifyContent:'center',alignItems:'center'}}>
     
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.goBack();
        }}
        style={{padding:5,borderWidth:5,borderRadius:5,marginBottom:10}}
    >
        <Text >Go to Back Screen Via GoBack method</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigation.replace('Third');
        }}
        style={{padding:5,borderWidth:5,borderRadius:5,marginBottom:10}}
       >
        <Text>Go to Next Screen Via Replace</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SecondScreen;
