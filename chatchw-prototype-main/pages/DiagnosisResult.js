// pages/DiagnosisResult.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, Alert, Pressable, Image} from 'react-native';
import ProgressBar from './components/progressbar';

const DiagnosisResult = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const showExplanationAlert = () => {
    Alert.alert(
      "Explanation",
      "This could be due to a bacterial or viral gastrointestinal infection.",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  };
  const showExplanationAlert2 = () => {
    Alert.alert(
      "Explanation",
      "Proper hygiene, safe food/water, and cleanliness help prevent diarrhea with fever.",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <ProgressBar progress={70} />
     {/* Modal */}
    <Modal animationType="slide" transparent={true} visible={modalVisible}onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>Are you sure you want to return to the main menu?</Text>
        <Pressable
            style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent', paddingTop: 10 }]}
            onPress={() => {
            // Handle "Yes" button press
            // Add your logic for "Yes" here
            setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        
            <Text style={[styles.modalText, { color: '#FF0000' }]}>Yes, I want to exit this survey.</Text>
            </TouchableOpacity>
        </Pressable>
        <Pressable
            style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent'}]}
            onPress={() => {
            // Handle "No" button press
            // Add your logic for "No" here
            setModalVisible(!modalVisible);
            }}>
            <Text style={[styles.modalText, { color: '#007AFF' }]}>No, I want to continue.</Text>
        </Pressable>
        </View>
    </View>
    </Modal>

    <Pressable
    style={[styles.modalButton, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}>
    <Image style={styles.image}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png'}}/>
    </Pressable>

      <Text style={styles.resultTitle}>The patient appears to have...</Text>
      <Text style={styles.result}>Diarrhea with Fever</Text>
      <Text style={styles.explain} onPress={showExplanationAlert}>[Explain why I am given this diagnosis]</Text>
      <Text style={styles.explain} onPress={showExplanationAlert2}>[Explain how to prevent it]</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Treatment1')}>
      <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 10,
    
  },
  resultTitle: {
    verticalAlign: 'top',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 100,
  },
  result: {
    lineHeight: 20,
    fontSize: 20,
    marginTop: 10,
    marginStart: 15,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  explain: {
    lineHeight: 20,
    fontSize: 20,
    marginTop: 7,
    marginStart: 15,
    alignSelf: 'flex-start',
  },
  nextButton: {
    padding: 10,
    marginTop: 450,
    backgroundColor: '#14B8A6', 
      borderRadius: 10, 
      paddingVertical: 15, 
      paddingHorizontal: 25, 
      alignSelf: 'center', 
      width: 350
},
button: {
    borderRadius: 10, 
    paddingHorizontal: 25, 
    alignSelf: 'center', 
    width: 350
},

  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
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

export default DiagnosisResult;