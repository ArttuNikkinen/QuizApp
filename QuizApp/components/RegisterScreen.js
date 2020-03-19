import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';


export default class RegisterScreen extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    //Method that updates firebase with a new user
    handleSignUp = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {'Hello there! \nWelcome to Quiz App! \nEnter your information below!'}
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

            <View style={styles.form}>

            <View>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                        ></TextInput>
                </View>
                
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

            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={{fontWeight: "bold"}}>Register!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}>
                <Text style={{fontSize: 13}}>
                    Already registered? <Text style={{fontWeight: "500", color: "lightblue"}}>Login!</Text>
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