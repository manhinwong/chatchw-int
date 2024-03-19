import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import Voice from 'react-native-voice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';


const NextButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const VoiceButton = ({ onPress, isListening }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon
      name={isListening ? 'microphone' : 'microphone'}
      size={24}
      color={isListening ? 'red' : 'gray'}
    />
  </TouchableOpacity>
);

export default function App() {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [idk, setIDK] = useState(false);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = () => {
      setIsListening(true);
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };

    Voice.onSpeechResults = (event) => {
      const transcription = event.value[0];
      setInputText(transcription);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === 'yes') {
      setYes(!yes);
      if (!yes) {
        setNo(false);
        setIDK(false);
      }
    } else if (checkbox === 'no') {
      setNo(!no);
      if (!no) {
        setYes(false);
        setIDK(false);
      }
    } else if (checkbox === 'idk') {
      setIDK(!idk);
      if (!idk) {
        setYes(false);
        setNo(false);
      }
    }
  };

  const handleClick = () => {
    if ((yes || no || idk) && inputText) {
      // Show the modal confirmation using Alert.alert
      Alert.alert(
        'Confirmation',
        'Are you sure you want to exit this survey?',
        [
          {
            text: 'No, I want to continue',
            style: 'cancel',
          },
          {
            text: 'Yes, I want to exit',
            onPress: () => {
              // Handle "Yes" button press (close the modal or perform additional actions)
              setModalVisible(true); // Show the modal
            },
          },
        ],
        { cancelable: true }
      );
      return;
    }
  
    let output = '';
    if (yes) {
      output = 'Yes';
    } else if (no) {
      output = 'No';
    } else if (idk) {
      output = "I don't know";
    } else if (inputText) {
      output = inputText;
    }
  
    if (output) {
      Alert.alert(output);
      setError('');
    } else {
      setError('Please select a checkbox or enter additional information.');
    }
  };
  

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (error) {
      console.log('Error starting voice recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.log('Error stopping voice recognition:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Does the patient have a fever?</Text>
      <View style={styles.checkboxGroup}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={yes ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('yes')}
          />
          <Text style={styles.checkboxText}>Yes</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={no ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('no')}
          />
          <Text style={styles.checkboxText}>No</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={idk ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('idk')}
          />
          <Text style={styles.checkboxText}>I don't know</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
          placeholder="Other"
        />
        <VoiceButton onPress={isListening ? stopListening : startListening} isListening={isListening} />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <NextButton onPress={handleClick} />


      {/* Modal */}
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Are you sure you want to return to the main menu?</Text>
      <Pressable
        style={[styles.button, styles.buttonClose, { backgroundColor: 'transparent', paddingTop: 10 }]}
        onPress={() => {
          // Handle "Yes" button press
          // Add your logic for "Yes" here
          setModalVisible(!modalVisible);
        }}>
        <Text style={[styles.textStyle, { color: 'red' }]}>Yes, I want to exit this survey.</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonClose, { backgroundColor: 'transparent', paddingTop: 10 }]}
        onPress={() => {
          // Handle "No" button press
          // Add your logic for "No" here
          setModalVisible(!modalVisible);
        }}>
        <Text style={[styles.textStyle, { color: 'blue' }]}>No, I want to continue.</Text>
      </Pressable>
    </View>
  </View>
</Modal>

<Pressable
  style={[styles.button, styles.buttonOpen]}
  onPress={() => setModalVisible(true)}>
  <Text style={styles.textStyle}>Exit</Text>
</Pressable>

</View>
  );
}

const styles = StyleSheet.create({
  separator: {
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',  // Color of the separator line
  marginBottom: 10,  // Adjust the margin as needed
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'left',
    
  },
  checkboxGroup: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxText: {
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 200,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  button: {
    margintop: 20,
    marginLeft: 0,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 35,
    paddingHorizontal: 25,
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
  buttonOpen: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#747480',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
