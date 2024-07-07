import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#f2f2f2',
    height: 10,
    marginTop: 10,

  },
  progressBar: {
    backgroundColor: '#14B8A6',
    height: '100%',
  },
});

export default ProgressBar;
