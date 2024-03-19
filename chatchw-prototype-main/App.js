import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import DiagnosisInterface from './pages/DiagnosisInterface';


import { logger, consoleTransport } from "react-native-logs";
import { FileLogger } from "react-native-file-logger";

FileLogger.configure();

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  enabled: true,
};

var log = logger.createLogger(defaultConfig);

log.debug("Debug message");
log.info({ message: "hi!" });

const Stack = createNativeStackNavigator();

export default function App() {
  
  const sendLogToDesktop = (message) => {

    const desktopIP = '192.168.50.140'; // Replace with your actual desktop IP address
    const serverURL = `http://${desktopIP}:8084/log`;

    fetch(serverURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error sending log:', error));
  };

  // Log a message when the app starts
  sendLogToDesktop('App started');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DiagnosisInterface" component={DiagnosisInterface} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
