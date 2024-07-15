import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput, Pressable, Modal, Image, ScrollView } from 'react-native';
import ProgressBar from './components/progressbar';
import WheelPicker from './components/wheelpickers/wheelpicker';
import GenderButton from './components/genderbutton';
import { useNavigation } from "@react-navigation/native";

const QuestionsTest = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  
  const [currentQuestion, setCurrentQuestion] = useState("");
  //const [answer, setAnswer] = useState(""); 
  const [textInput, setTextInput] = useState("");
  const [answers, setAnswers] = useState({});
  const [rounds, setRounds] = useState(0);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState('');
  const questions_init = [
    {
      question: "What is the patient's sex?",
      type: "MC",
      options: [
        {"id": 1, "text": "Male"},
        {"id": 2, "text": "Female"},
        {"id": 3, "text": "Non-binary"},
      ]
    },
    {
      question: "What is the patient's age?",
      type: "NUM",
      options: [],
      range: {
        "min": 0,
        "max": 24
      }
    },
    {
      question: "Is the Patient with a Caregiver?",
      type: "YN",
      options: [
        {"id": "yes", "text": "Yes"},
        {"id": "no", "text": "No"}
      ]
    }
  ];
  const [questions, setQuestions] = useState(questions_init);

  const handleClick = () => {
    let output = selectedOption && ageValue;


  
    if (output) {
      setError('');
      navigation.navigate('Question2');
    } else {
      setError("Please enter the patient's sex and age.");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                // Handle "Yes" button press
                // Add your logic for "Yes" here
                setModalVisible(!modalVisible);
              }}>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
                  <Text style={[styles.modalText, { color: '#FF0000' }]}>Yes, I want to exit this survey.</Text>
                </TouchableOpacity>
              </Pressable>
              <Pressable style={[styles.modalButton, styles.buttonClose, { backgroundColor: 'transparent'}]} onPress={() => {
                // Handle "No" button press
                // Add your logic for "No" here
                setModalVisible(!modalVisible);
              }}>
                <Text style={[styles.modalText, { color: '#007AFF' }]}>No, I want to continue.</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

              


        <Pressable style={[styles.modalButton, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png'}}/>
        </Pressable>

        {/* <Pressable style={[styles.modalButton, styles.buttonOpen, {marginHorizontal: 330}]} onPress={() => nav.goBack()}>
          <Image style={styles.image} source={{uri: 'https://static.vecteezy.com/system/resources/previews/023/790/858/original/left-arrow-icon-clipart-free-free-png.png'}}/>
        </Pressable> */}

        {questions.map((question, index) => (
          
          <View key={index}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.type === "NUM" && (
              <View>
              <Text style={[styles.questionText, { fontWeight: 400 }, { fontSize: 18 }, { marginTop: 0, marginBottom: 50 } ]}>Please enter a number below.</Text>
              <WheelPicker setAgeValue={setAgeValue} />
              </View>
            )}

            {question.options.map((option, optionIndex) => (
              <View key={optionIndex}>
                <TouchableOpacity style={answers[question.question] === option.text ? styles.buttonSelected : styles.buttonUnSelected}

                  onPress={() => {
                    setCurrentQuestion(question.question);
                    setAnswers({ ...answers, [question.question]: option.text});
                    console.log(answers);
                  }}>
                    <Text style={styles.buttonText}>{option.text}</Text>
                </TouchableOpacity>
            
                
              </View>
            ))}
            
          </View>
          
        ))}


        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};




export default QuestionsTest;


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'top', alignItems: 'left', padding: 10, backgroundColor: 'white'},
    questionText: { fontSize: 25, fontWeight: 'bold', marginBottom: 10, marginTop: 100, marginLeft: 10, textAlignVertical: 'top'}, 
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
      marginBottom: 10, marginTop: 30, width: 350, marginLeft: 10, borderRadius: 10, alignSelf: 'left'}, 
    buttonSelected: { 
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      elevation: 5,
      backgroundColor: '#14B8A6'
    }, 
    buttonUnSelected: { 
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      elevation: 5,
      backgroundColor: 'gray'
    }, 
    buttonText: { fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'}, 
    errorText: {marginLeft: 15, marginTop: 5, color: 'red', textAlign: 'center', }, 
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
