// pages/DiagnosisResult.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, Alert, Pressable, Image} from 'react-native';
import ProgressBar from './components/progressbar';
import { useNavigation } from "@react-navigation/native";
import { runDiagnosis } from './AIConnection';
const DiagnosisResult = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const  [diagnosisResult, setDiagnosisResult] = useState(null);
  const  [modalText, setModalText] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const { answers } = route.params;
  const getResult = () => {
    setButtonDisabled(true);
    runDiagnosis(answers).then(response => {
      setDiagnosisResult(JSON.parse(response));
      setButtonDisabled(false);
    });}

    if (!initialized) {
      setInitialized(true);
      getResult();
    }
  
  const showImmediateActions= () => {
    if (diagnosisResult === null) {
      getResult();
    }
    setModalText(diagnosisResult["Immediate actions"]);
    setModalVisible(true);
  };
  const showFurtherTreatments = () => {
    if (diagnosisResult === null) {
      getResult();
    }
    setModalText(diagnosisResult["Further treatments"]);
    setModalVisible(true);
  };
  const showDiagnosis = () => {
    if (diagnosisResult === null) {
      getResult();
    }
    let texts = [];
    console.log(diagnosisResult);
    for (let i = 0; i < diagnosisResult["Health issues"].length; i++) {
      texts.push("\nPossible issue: ");
      texts.push(diagnosisResult["Health issues"][i]["Issue"]);
      texts.push("\nReason: ");
      texts.push(diagnosisResult["Health issues"][i]["Reason"]);
    }
  setModalText(texts);
  setModalVisible(true);
  };
  

  async function sendData() {
    const data = { key: 'value' };
    const response = await fetch('http://127.0.0.1:5000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <ProgressBar progress={100} />
     {/* Modal */}
    <Modal animationType="slide" transparent={true} visible={modalVisible}onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalText}>{modalText}</Text>
        <Pressable
            style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent'}]}
            onPress={() => {
            // Handle "No" button press
            // Add your logic for "No" here
            setModalVisible(!modalVisible);
            }}>
            <Text style={[styles.modalText, { color: '#007AFF' }]}>Close</Text>
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
    {/* <Pressable style={[styles.modalButton, styles.buttonOpen, {marginHorizontal: 330}]} onPress={() => nav.goBack()}>
        <Image style={styles.image} source={{uri: 'https://static.vecteezy.com/system/resources/previews/023/790/858/original/left-arrow-icon-clipart-free-free-png.png'}}/>
      </Pressable> */}

      <Text style={styles.resultTitle}>Here is the diagnosis result</Text>
      <TouchableOpacity onPress={showDiagnosis} style={styles.nextButton} disabled={buttonDisabled}> 
        <Text style={styles.nextButtonText}>Issues</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showImmediateActions} style={styles.nextButton} disabled={buttonDisabled}> 
        <Text style={styles.nextButtonText}>Immediate Actions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showFurtherTreatments} style={styles.nextButton} disabled={buttonDisabled}> 
        <Text style={styles.nextButtonText}>Further Treatments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={() => {
        sendData();
        setDiagnosisResult(null);
        navigation.navigate('Feedback');}}>
      <Text style={styles.nextButtonText}>Finish</Text>
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
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 100,
    marginStart: 12,

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
    fontSize: 18,
    marginTop: 7,
    marginStart: 15,
    alignSelf: 'flex-start',
  },
  nextButton: {
    marginTop: 320,
    backgroundColor: '#14B8A6', 
      borderRadius: 10, 
      paddingVertical: 15, 
      paddingHorizontal: 5, 
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