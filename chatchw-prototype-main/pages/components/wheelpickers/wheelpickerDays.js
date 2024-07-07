import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select';

const WheelPickerDays = ({ DaysValue, setDaysValue }) => { 
  const options = Array.from(Array(100).keys()).map((num) => ({ label: `${num + 1} Days`, value: `${num + 1} Days` }));

  
  return ( 
    <View style={styles.container}> 
      <RNPickerSelect 
        onValueChange={(value) => setDaysValue(value)} 
        items={options} 
        value={DaysValue} 
      /> 
    </View> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    borderWidth: 1, 
    borderColor: 'black', 
    height: 50, 
    margin: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 350,
  } 
});

export default WheelPickerDays;
