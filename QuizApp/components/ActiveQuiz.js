import React, { Children } from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import { Button, ButtonContainer } from './Buttons';


export default class extends React.Component {
    state = {
        correctPoints: 0,
        total: this.props.navigation.getParam('questions', []).length - 1,
        index: 0,
        answered: false,
        correctAnswer: false
    };

    answer = correct => {
        this.setState(
            state => {
                const nextState = { answered: true };

                if (correct) {
                    nextState.correctPoints = state.correctPoints + 1;
                    nextState.correctAnswer = true;
                }else {
                    nextState.correctAnswer = false;
                }

                return nextState;
            },
            () => {
                setTimeout(() => this.nextQuestion(), 100);
            }
        );
    };

    nextQuestion = () => {
        this.setState(state => {
            const nextIndex = state.index + 1;

            if (nextIndex >= state.total) {
                this.props.navigation.navigate("Quiz");
            }

            return {
                index: nextIndex,
                answered: false
            };
        });
    };

    render() {
        const questions = this.props.navigation.getParam('questions', []);
        const question = questions[this.state.index];

        return (
            <View style={[styles.container, {backgroundColor: this.props.navigation.getParam('color')}]}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.safearea}>
                    <View>
                        <Text style={styles.text}>{question.question}</Text>

                        <ButtonContainer>
                            {question.answers.map(answer => (
                                <Button key={answer.id} text={answer.text} onPress={() => this.answer(answer.correct)}/>
                            ))}
                        </ButtonContainer>

                    </View>

                    <Text style={styles.text}>
                        Correct answers: {'\n'}
                    {`${this.state.correctPoints}/${this.state.total}`} 
                    </Text>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#36B1F0",
      flex: 1,
      paddingHorizontal: 20
    },
    text: {
      color: "#fff",
      fontSize: 25,
      textAlign: "center",
      letterSpacing: -0.02,
      fontWeight: "600"
    },
    safearea: {
      flex: 1,
      marginTop: 100,
      justifyContent: "space-between"
    }
  });