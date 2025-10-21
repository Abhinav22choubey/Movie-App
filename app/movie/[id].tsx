import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const Details = () => {

    const {id} = useLocalSearchParams();
  return (
    <View >
      <Text> Movies details :{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Details;
