import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const WheelPickerTemp = ({ TempValue, setTempValue }) => {
  const options = Array.from(Array(100).keys()).map((num) => ({ label: `${num + 1} °C`, value: `${num + 1} °C` }));

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setTempValue(value)}
        items={options}
        value={TempValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 350,
  }
});

export default WheelPickerTemp;
