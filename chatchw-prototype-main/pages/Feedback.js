import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import ProgressBar from './components/progressbar'
import { useNavigation } from "@react-navigation/native";


const Feedback = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (text) => {
    setInputText(text);
  }
  const nav = useNavigation();
  
  return (
    <View style={globalStyles.container}>
      <ProgressBar progress={100} />
      {/* <Pressable style={[styles.modalButton, styles.buttonOpen, {marginHorizontal: 330}]} onPress={() => nav.goBack()}>
        <Image style={styles.image} source={{uri: 'https://static.vecteezy.com/system/resources/previews/023/790/858/original/left-arrow-icon-clipart-free-free-png.png'}}/>
      </Pressable> */}
      <Text style={[globalStyles.titleText,{marginTop: 30}]}>Thank You!</Text>
      <Text style={globalStyles.subtitleText}>Thanks for taking the time to use ChatCHW.</Text>
      <Text style={globalStyles.subtitleText}>If you have suggestions or feedback to improve this app, please add it below.</Text>
      <TextInput 
  style={[styles.input, {textAlignVertical: 'top'}]} 
  value={inputText} 
  onChangeText={handleInputChange} 
  placeholder="Feedback and Suggestions..."
/>
      <TouchableOpacity style={[styles.nextButton, {marginTop: 20}]} onPress={() => navigation.navigate('Question1')}>
      <Text style={styles.nextButtonText}>New Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.nextButton, {marginTop: 10}]} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.nextButtonText}>Main Menu</Text>
      </TouchableOpacity>
    </View>

  );
}

export default Feedback;

const styles = StyleSheet.create({
  input: { 
    height: 300, 
    borderColor: 'black', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
    paddingBottom: 30,
    marginBottom: 10, 
    marginTop: 10, 
    width: 370, 
    borderRadius: 10, 
    alignSelf: 'left',
  },
  nextButton: {
    padding: 10,
    marginTop: 500,
    backgroundColor: '#14B8A6', 
      borderRadius: 10, 
      paddingVertical: 15, 
      paddingHorizontal: 25, 
      alignSelf: 'center', 
      marginTop: 140, 
      width: 350
},
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
},
});
