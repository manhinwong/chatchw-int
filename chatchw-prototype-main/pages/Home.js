import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello,</Text>
      <Text style={globalStyles.subtitleText}>How can I help you today?</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Question1')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={globalStyles.tinyLogo}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/9259/9259956.png'}}/>
          <View style={{ marginLeft: 10 }}>
            <Text style={globalStyles.buttonText}>Diagnosis Survey</Text>
            <Text style={globalStyles.text}>
              Tell us about the patient symptoms and I’ll provide some recommendations.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.changelanguage}>
          <Text style={globalStyles.text}>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
}


