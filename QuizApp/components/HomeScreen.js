import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import React from 'react';


export default class HomeScreen extends React.Component {

    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName })
    }

    //Method to sign out the user
    signOutUser = () => {
        firebase.auth().signOut();
    }

    render () {
    return(
        <View style={styles.container}>
            <Text style={styles.greeting}>
                Hello {this.state.displayName}!
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Quiz")}
            >
                <Text style={{fontWeight: "bold"}}>Begin the Quiz!</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.logout} onPress={this.signOutUser}>
                <Text style={{color: 'red'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: 'lightblue',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        width: 400
    },
    greeting: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    logout: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});