import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';


export default class LoginScreen extends React.Component {

    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    //Method that checks firebase if the user exists
    handleLogin = () => {
        const { email, password } = this.state;

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {'Hello there! \nWelcome to Quiz App!'}
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

            <View style={styles.form}>

                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        ></TextInput>
                </View>

                <View style={{marginTop: 32}}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        ></TextInput>
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{fontWeight: "bold"}}>Sign in!</Text>
            </TouchableOpacity>

            <TouchableOpacity //This is used to redirect to register screen!
                style={{alignSelf: "center", marginTop: 32}}
                onPress={() => this.props.navigation.navigate("Register")}
                >
                <Text style={{fontSize: 13}}>
                    New to Quiz App? <Text style={{fontWeight: "500", color: "lightblue"}}>Sign Up!</Text>
                </Text>
            </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        fontWeight: "400",
        textAlign: "center"
    },
    error: {
        color: 'red',
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: 'black',
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'black'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: 'lightblue',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});