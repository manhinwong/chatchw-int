import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GenderButton = ({ selectedOption, setSelectedOption }) => {
  const [maleShadowOpacity, setMaleShadowOpacity] = useState(0);
  const [femaleShadowOpacity, setFemaleShadowOpacity] = useState(0);
  const [nonbinaryShadowOpacity, setNonbinaryShadowOpacity] = useState(0);

  const handleMaleClick = () => {
    setMaleShadowOpacity(maleShadowOpacity === 0.95 ? 0 : 0.95);
    setFemaleShadowOpacity(0);
    setNonbinaryShadowOpacity(0);
    setSelectedOption('Male');
  };

  const handleFemaleClick = () => {
    setFemaleShadowOpacity(femaleShadowOpacity === 0.95 ? 0 : 0.95);
    setMaleShadowOpacity(0);
    setNonbinaryShadowOpacity(0);
    setSelectedOption('Female');
  };

  const handleNonbinaryClick = () => {
    setNonbinaryShadowOpacity(nonbinaryShadowOpacity === 0.95 ? 0 : 0.95);
    setMaleShadowOpacity(0);
    setFemaleShadowOpacity(0);
    setSelectedOption('Nonbinary');
  };

  const handleReset = () => { if 
    (maleShadowOpacity === 0 && 
      femaleShadowOpacity === 0 && 
      nonbinaryShadowOpacity === 0) 
      { setSelectedOption(''); } };

  const buttonStyle = {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  };

  const nonbinarybuttonStyle = {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={{ ...buttonStyle, shadowOpacity: maleShadowOpacity, marginRight: 20 }}
          onPress={handleMaleClick}
          android_ripple={{ color: 'lightgrey' }}
        >
          <Text style={styles.text}>Male</Text>
        </Pressable>

        <Pressable
          style={{ ...buttonStyle, shadowOpacity: femaleShadowOpacity, marginLeft: 20 }}
          onPress={handleFemaleClick}
          android_ripple={{ color: 'lightgrey' }}
        >
          <Text style={styles.text}>Female</Text>
        </Pressable>
      </View>

      <View style={styles.nonbinaryContainer}>
        <Pressable
          style={{ ...nonbinarybuttonStyle, shadowOpacity: nonbinaryShadowOpacity }}
          onPress={handleNonbinaryClick}
          android_ripple={{ color: 'lightgrey' }}
        >
          <Text style={styles.nonbinaryText}>Nonbinary</Text>
        </Pressable>
      </View>
      {handleReset()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    width: 150,
    padding: 14,
    borderRadius: 10,
  },
  nonbinaryContainer: {
    marginTop: 5,
  },
  nonbinaryText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    width: 350,
    padding: 14,
    borderRadius: 10,
  },
});

export default GenderButton;
