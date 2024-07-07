import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CTAButton = ({ title, onPress, variant }) => {
  return (
    <TouchableOpacity
      style={variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CTAButton;