// Question1.js
import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Pressable, Modal, Image } from 'react-native';
import ProgressBar from './components/progressbar';
import WheelPicker from './components/wheelpickers/wheelpicker'; // Ensure this path is correct
import GenderButton from './components/genderbutton';
import { useNavigation } from "@react-navigation/native";

const Question1 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');
  const [ageValue, setAgeValue] = useState(null); // Initialize as null
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();

  const handleClick = () => {
    let output = selectedOption && ageValue !== null; // Check for null instead of empty string

    if (output) {
      setError('');
      navigation.navigate('Question2');
    } else {
      setError("Please enter the patient's sex and age.");
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={9} />
      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to return to the main menu?</Text>
            <Pressable style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent', paddingTop: 10 }]} onPress={() => {
              setModalVisible(!modalVisible);
            }}>
              <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.modalText, { color: '#FF0000' }]}>Yes, I want to exit this survey.</Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent'}]} onPress={() => {
              setModalVisible(!modalVisible);
            }}>
              <Text style={[styles.modalText, { color: '#007AFF' }]}>No, I want to continue.</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={[styles.modalButton, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Image style={styles.image} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png' }} />
      </Pressable>

      <Text style={styles.questionText}>What Is The Patient’s Sex?:</Text>
      <Text style={[styles.questionText, { fontWeight: '400', fontSize: 18, marginTop: 0, marginBottom: -50 }]}>Please select from the options below.</Text>
      <View>
        <View style={[styles.input, { marginTop: 120, borderWidth: 0 }]}>
          <GenderButton selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </View>
        <Text style={[styles.questionText, { marginTop: 40 }]}>What Is The Patient’s Age?:</Text>
        <Text style={[styles.questionText, { fontWeight: '400', fontSize: 18, marginTop: 0, marginBottom: 50 }]}>Please enter a number below.</Text>
        <WheelPicker setAgeValue={setAgeValue} />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question1;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, backgroundColor: 'white' },
  questionText: { fontSize: 25, fontWeight: 'bold', marginBottom: 10, marginTop: 100, marginLeft: 10, textAlignVertical: 'top' },
  checkbox: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 50,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10, marginTop: 30, width: 350, marginLeft: 10, borderRadius: 10, alignSelf: 'flex-start'
  },
  button: {
    backgroundColor: '#14B8A6',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignSelf: 'center',
    marginTop: 170,
    width: 350,
  },
  buttonText: { fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' },
  errorText: { marginLeft: 15, marginTop: 5, color: 'red', textAlign: 'center' },
  // Modal styles
  modalButton: {
    backgroundColor: '#14B8A6',
    borderRadius: 10,
    alignItems: 'center',
    width: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: 200,
  },
  buttonOpen: {
    position: 'absolute',
    top: 40,
    right: 3,
    backgroundColor: '#747480',
    borderRadius: 50,
    elevation: 2,
    width: 50,
    height: 50,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 20,
    width: 300,
  },
  image: {
    position: 'absolute',
    top: 15,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
