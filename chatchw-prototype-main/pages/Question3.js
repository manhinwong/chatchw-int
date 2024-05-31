import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput, Pressable, Modal, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import ProgressBar from './components/progressbar'
import { useNavigation } from "@react-navigation/native";

const Question3 = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();


const handleClick = () => {
    let output = selectedOption || inputText;
  
    if (output) {
      setError('');
      navigation.navigate('Question4');
    } else {
      setError('Please enter an input.');
    }
  };
  
  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
    <ProgressBar progress={27} />
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
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
        
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
    {/* <Pressable style={[styles.modalButton, styles.buttonOpen, {marginHorizontal: 330}]} onPress={() => nav.goBack()}>
        <Image style={styles.image} source={{uri: 'https://static.vecteezy.com/system/resources/previews/023/790/858/original/left-arrow-icon-clipart-free-free-png.png'}}/>
      </Pressable> */}

      <Text style={styles.questionText}>What Brings The Patient Here?</Text>
      <Text style={[styles.questionText, { fontWeight: 400 }, { fontSize: 18 }, { marginTop: 0 } ]}>Please select from the options below.</Text>
      <View>
      
<TextInput style={styles.input} value={inputText} onChangeText={handleInputChange} placeholder="..." autoFocus={true}/>

{error ? <Text style={styles.errorText}>{error}</Text> : null}
<TouchableOpacity onPress={handleClick} style={styles.button}>
  <Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>

</View>
</View>
  );
}

export default Question3;


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'top', alignItems: 'left', padding: 10, backgroundColor: 'white'},
    questionText: { fontSize: 25, fontWeight: 'bold', marginBottom: 20, marginTop: 100, marginLeft: 10, textAlignVertical: 'top'}, 
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
      marginBottom: 10, marginTop: 10, width: 350, marginLeft: 10, borderRadius: 10, alignSelf: 'left'}, 
    button: { 
      backgroundColor: '#14B8A6', 
      borderRadius: 10, 
      paddingVertical: 15, 
      paddingHorizontal: 25, 
      alignSelf: 'center', 
      marginTop: 330, 
      width: 350,
    }, 
    buttonText: { fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center'}, 
    errorText: {marginLeft: 5, marginTop: 5, color: 'red', textAlign: 'center', }, 
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
