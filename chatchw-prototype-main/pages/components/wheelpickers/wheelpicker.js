import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select';

const WheelPicker = ({ ageValue, setAgeValue }) => { 
  const options = Array.from(Array(100).keys()).map((num) => ({ label: `${num + 1} Years Old`, value: `${num + 1} Years Old` }));

  
  return ( 
    <View style={styles.container}> 
      <RNPickerSelect 
        onValueChange={(value) => setAgeValue(value)} 
        items={options} 
        value={ageValue} 
      /> 
    </View> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 10, 
    margin: 10,
    height: 70,
    borderRadius: 10,
    marginTop: -30,
    width: 350,
  } 
});

export default WheelPicker;
