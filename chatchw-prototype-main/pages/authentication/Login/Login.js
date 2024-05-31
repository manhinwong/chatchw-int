import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Pressable, Keyboard, Alert } from "react-native";
import CTAButton from '../../components/CTAButton';
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const nav = useNavigation(); 
    const goToRegistration = () => { nav.push("Register"); };
    const auth = FIREBASE_AUTH;


    const goToMainFlow = async () => { // Login Query };
       setLoading(true);
       try {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Success", "Logged In!");
        nav.replace("Home");
       } catch (e) {
            Alert.alert("Oops", "Please check your form and try again")
        } finally {
            setLoading(false);
        }
    }


    return (
        <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.contentView}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ChatCHW</Text>
                    </View>
                    <View style={styles.mainContent}>
                        <TextInput style={styles.loginTextField} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" inputMode="email" />
                        <TextInput style={styles.loginTextField} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                    </View>

                    <CTAButton title="Login" onPress={goToMainFlow} variant="primary" />
                    <CTAButton title="Sign Up" onPress={goToRegistration} variant="secondary" />
                </View>
            </SafeAreaView>
        </Pressable>
    );
};



const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        marginHorizontal: 50,
        backgroundColor: "white",
        paddingTop: 20,
    },
    titleContainer: {
        flex: 1.2,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 45,
        textAlign: "center",
        fontWeight: "200",
    },
    loginTextField: {
        borderBottomWidth: 1,
        height: 60,
        fontSize: 30,
        marginVertical: 10,
        fontWeight: "300",
    },
    mainContent: {
        flex: 6,
    },
});

export default Login;
