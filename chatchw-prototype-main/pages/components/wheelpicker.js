import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const WheelPicker = () => {
    return (
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />
    );
  };
  
  export default WheelPicker;
  