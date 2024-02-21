import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: '1vh', // Adjust the width of the line as needed
    marginVertical: '1vh', // Adjust the vertical margin as needed
  },
});

export default HorizontalLine;
