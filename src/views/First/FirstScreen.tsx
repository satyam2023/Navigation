import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../routes/Routes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type FirstScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'First'
>;

const FirstScreen = (navigation: FirstScreenNavigationProp) => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: opacity,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Second');
        }}
        style={{padding:5,borderWidth:5,borderRadius:5,marginBottom:10}}
        >
        <Text>Go to Next Screen</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FirstScreen;
