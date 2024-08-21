import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Login from './pages/authentication/Login/Login';
//import Register from './pages/authentication/Register/Register';
import Home from './pages/Home';
import Questions from './pages/Questions';
import DiagnosisResult from './pages/DiagnosisResult';
import Feedback from './pages/Feedback'


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="DiagnosisResult" component={DiagnosisResult} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

