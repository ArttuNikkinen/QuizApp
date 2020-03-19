const questions = [
    {
      question: "Which movie won the Oscar for best picture in 2020?",
      answers: [
        { id: "1", text: "Parasite", correct: true },
        { id: "2", text: "Joker" },
        { id: "3", text: "JoJo Rabbit" },
        { id: "4", text: "Marriage Story" }
      ]
    },
    {
      question: "Which franchise immortalised the line 'I am your father'?",
      answers: [
        { id: "1", text: "Harry Potter" },
        { id: "2", text: "Narnia" },
        { id: "3", text: "Star Trek" },
        { id: "4", text: "Start Wars", correct: true }
      ]
    },
    {
        question: "Which movie had the best opening weekend? As of March 2020",
        answers: [
            { id: "1", text: "Avatar" },
            { id: "2", text: "Avengers: End Game", correct: true },
            { id: "3", text: "Avengers: Infinity War" },
            { id: "4", text: "Interstellar" }
        ]
    },
    { //This 'empty' question is needed to prevent error when navigating back to the main page after the quiz.
    question: '',
    answers: []
  },
  ];
  
  export default questions;