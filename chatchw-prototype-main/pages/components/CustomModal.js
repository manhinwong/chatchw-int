import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible, navigation }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to return to the main menu?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonYes]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.textStyle}>Yes, I want to exit this survey.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonNo]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>No, I want to continue.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonYes: {
    backgroundColor: '#FF0000',
  },
  buttonNo: {
    backgroundColor: '#007AFF',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomModal;
