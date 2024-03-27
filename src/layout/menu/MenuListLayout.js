import React from 'react';
import { View, Text } from 'react-native';

export default function MenuListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Function 1</Text>
      <Text>Function 2</Text>
      <Text>Function 3</Text>
      {/* Add more functions as needed */}
    </View>
  );
}