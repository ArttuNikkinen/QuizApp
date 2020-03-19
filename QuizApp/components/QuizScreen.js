import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, StatusBar } from 'react-native';
import firebase from 'firebase';
import { RowItem } from './RowItem';
import VaasaQuestions from '../questions/Vaasa';
import MusicQuestions from '../questions/Music';
import SportsQuestions from '../questions/Sports';
import MoviesQuestions from '../questions/Movies';

export default class QuizScreen extends React.Component{
    render() {
        return(
<ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Vaasa"
      color="lightblue"
      onPress={() =>
        this.props.navigation.navigate("OpenQuiz", {
          title: "Vaasa",
          questions: VaasaQuestions,
          color: "lightblue"
        })
      }
    />
    <RowItem
      name="Music"
      color="lightblue"
      onPress={() =>
        this.props.navigation.navigate("OpenQuiz", {
          title: "Music",
          questions: MusicQuestions,
          color: "lightblue"
        })
      }
    />
    <RowItem
      name="Sports"
      color="lightblue"
      onPress={() =>
        this.props.navigation.navigate("OpenQuiz", {
          title: "Sports",
          questions: SportsQuestions,
          color: "lightblue"
        })
      }
    />
     <RowItem
      name="Movies"
      color="lightblue"
      onPress={() =>
        this.props.navigation.navigate("OpenQuiz", {
          title: "Movies",
          questions: MoviesQuestions,
          color: "lightblue"
        })
      }
    />
  </ScrollView>
        );
    }
}