const questions = [
    {
      question: "How many people live in Vaasa? As of 2014",
      answers: [
        { id: "1", text: "66 405", correct: true },
        { id: "2", text: "57 766" },
        { id: "3", text: "77 811" },
        { id: "4", text: "117 072" }
      ]
    },
    {
      question: "Where in Vaasa is the University of Vaasa?",
      answers: [
        { id: "1", text: "Centrum" },
        { id: "2", text: "Gerby" },
        { id: "3", text: "Palosaari", correct: true },
        { id: "4", text: "Hietasaari" }
      ]
    },
    {
        question: "When did Vaasa burn down?",
        answers: [
            { id: "1", text: "1822" },
            { id: "2", text: "1852", correct: true },
            { id: "3", text: "1766" },
            { id: "4", text: "1911" }
        ]
    },
    { //This 'empty' question is needed to prevent error when navigating back to the main page after the quiz.
      question: '',
      answers: []
    },
  ];
  
  export default questions;