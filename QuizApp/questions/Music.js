const questions = [
    {
      question: "Which of the following IS NOT a song by The Beatles?",
      answers: [
        { id: "1", text: "For Whom The Bells Toll", correct: true },
        { id: "2", text: "Yellow Submarine" },
        { id: "3", text: "Let It Be" },
        { id: "4", text: "Hey Jude" }
      ]
    },
    {
      question: "Who performs the song 'Bad Romance'?",
      answers: [
        { id: "1", text: "Lady Gaga", correct: true },
        { id: "2", text: "Britney Spears" },
        { id: "3", text: "Madonna" },
        { id: "4", text: "Weird Al Yankovic"}
      ]
    },
    {
        question: "Who won the Record of the Year Grammy in 2020?",
        answers: [
            { id: "1", text: "Ed Sheeran" },
            { id: "2", text: "Madonna" },
            { id: "3", text: "Billie Eilish", correct: true },
            { id: "4", text: "Ariana Grande" }
        ]
    },
    { //This 'empty' question is needed to prevent error when navigating back to the main page after the quiz.
    question: '',
    answers: []
  },
  ];
  
  export default questions;