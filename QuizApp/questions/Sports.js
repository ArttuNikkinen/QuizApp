const questions = [
    {
      question: "Which team won the NHL 2019 Stanley Cup?",
      answers: [
        { id: "1", text: "New York Rangers" },
        { id: "2", text: "Los Angeles Kings" },
        { id: "3", text: "Philadelphia Penguins" },
        { id: "4", text: "St. Louis Blue", correct: true }
      ]
    },
    {
      question: "Which team won the NBA 2019?",
      answers: [
        { id: "1", text: "Golden State Warriors" },
        { id: "2", text: "Milwaukee Bucks" },
        { id: "3", text: "Boston Celtics" },
        { id: "4", text: "Toronto Raptors", correct: true }
      ]
    },
    {
        question: "Who won the Formula 1 championship 2019?",
        answers: [
            { id: "1", text: "Max Verstappen" },
            { id: "2", text: "Lewis Hamilton", correct: true },
            { id: "3", text: "Valtteri Bottas" },
            { id: "4", text: "Charles Leclerc" }
        ]
    },
    { //This 'empty' question is needed to prevent error when navigating back to the main page after the quiz.
    question: '',
    answers: []
  },
  ];
  
  export default questions;