import React, { useState } from 'react';
import './QuizApp.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
    explanation: "Paris is the capital city of France, known for its art, fashion, and culture.",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    explanation: "2 + 2 equals 4, which is a basic arithmetic operation.",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
    answer: "Elon Musk",
    explanation: "Elon Musk is the CEO and founder of Tesla, known for his work in the electric car industry.",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [explanation, setExplanation] = useState("");

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestion].answer;
    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    setIsAnswerSubmitted(true);
    setExplanation(questions[currentQuestion].explanation);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswerSubmitted(false);
      setSelectedAnswer("");
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Challenge</h1>
      {isQuizFinished ? (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <>
          <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`option ${
                    isAnswerSubmitted
                      ? option === selectedAnswer
                        ? option === questions[currentQuestion].answer
                          ? 'correct'
                          : 'incorrect'
                        : ''
                      : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {isAnswerSubmitted && (
              <div className="answer-feedback">
                <p>{selectedAnswer === questions[currentQuestion].answer ? "Correct!" : "Wrong!"}</p>
                <p><strong>Explanation:</strong> {explanation}</p>
              </div>
            )}
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
