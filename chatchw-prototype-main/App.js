import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import DiagnosisInterface from './pages/DiagnosisInterface';
import DiagnosisResult from './pages/DiagnosisResult';
import Treatment1 from './pages/Treatment1'
import Treatment2 from './pages/Treatment2'
import Summary from './pages/Summary'
import Feedback from './pages/Feedback'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DiagnosisInterface" component={DiagnosisInterface} />
        <Stack.Screen name="DiagnosisResult" component={DiagnosisResult} />
        <Stack.Screen name="Treatment1" component={Treatment1} />
        <Stack.Screen name="Treatment2" component={Treatment2} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

