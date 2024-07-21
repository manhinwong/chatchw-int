// components/wheelpickers/WheelPicker.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WheelPicker = ({ setTempValue }) => {
  const [selectedTemp, setSelectedTemp] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const generatePickerItems = () => {
    let items = [];
    for (let i = 1; i <= 100; i++) {
      items.push(<Picker.Item key={i} label={`${i} °C`} value={i} />);
    }
    return items;
  };

  const handleSelectTemp = (day) => {
    setSelectedTemp(day);
    setTempValue(day);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.placeholderButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.placeholderText}>
          {selectedTemp ? `${selectedTemp} °C` : 'Select Temperature'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.label}>Select Temperature</Text>
            <Picker
              selectedValue={selectedTemp}
              onValueChange={(itemValue) => handleSelectTemp(itemValue)}
              style={styles.picker}
            >
              {generatePickerItems()}
            </Picker>
            <Button title="Done" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'left',
    marginHorizontal: 10,
  },
  placeholderButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: 350,
  },
  placeholderText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    height: 200,
  },
});

export default WheelPicker;
