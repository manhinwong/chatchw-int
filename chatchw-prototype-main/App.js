import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';
import Question6 from './pages/Question6';
import Question7 from './pages/Question7';
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
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Question5" component={Question5} />
        <Stack.Screen name="Question6" component={Question6} />
        <Stack.Screen name="Question7" component={Question7} />
        <Stack.Screen name="DiagnosisResult" component={DiagnosisResult} />
        <Stack.Screen name="Treatment1" component={Treatment1} />
        <Stack.Screen name="Treatment2" component={Treatment2} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

