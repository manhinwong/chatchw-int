import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const App = () => {
  const [shadowOpacity, setShadowOpacity] = useState(0.5);

  const handleClick = () => {
    setShadowOpacity(shadowOpacity === 0.5 ? 0.8 : 0.5);
  };

  const buttonStyle = {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: shadowOpacity,
  };

  return (
    <Pressable
      style={buttonStyle}
      onPress={handleClick}
      android_ripple={{ color: 'lightgrey' }}
    >
      <Text style={styles.text}>Click Me</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
