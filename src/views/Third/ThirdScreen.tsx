import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/Routes';

type ThirdScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Third'
>;

const ThirdScreen = (props: ThirdScreenNavigationProp) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Tab');
        }}
        style={{padding: 5, borderWidth: 5, borderRadius: 5, marginBottom: 10}}>
        <Text>Go to Tab Bar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({});
