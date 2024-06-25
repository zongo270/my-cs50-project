'use client';

import { useState, useEffect } from 'react';
import { easyQuestions } from '../data/easyquestions';

export default function EasyGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [countdown, setCountdown] = useState(3); 
  const [isCountdownOver, setIsCountdownOver] = useState(false); 

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const countdownTimer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(countdownTimer);
    } else {
      setIsCountdownOver(true);
    }
  }, [countdown]);

  // Main timer logic
  useEffect(() => {
    if (!showScore && isCountdownOver && timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (isCountdownOver && timeLeft === 0) {
      handleAnswerOptionClick('');
    }
  }, [timeLeft, showScore, isCountdownOver]);

  const handleAnswerOptionClick = (answer: string) => {
    if (answer === easyQuestions[currentQuestion].correct) {
      setScore(score + 1);
    } else {
      setScore(score - 2);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < easyQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(10);
    setCountdown(3);
    setIsCountdownOver(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      {showScore ? (
        score <= 0 ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">{localStorage.getItem('username')}, your score is {score}. I know you can do better, try again!</h1>
            <button onClick={handleRestart} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Restart</button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Congratulations {localStorage.getItem('username')}, your score is {score}.</h1>
            <button onClick={handleRestart} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Restart</button>
          </div>
        )
      ) : !isCountdownOver ? (
        <h2 className="text-2xl font-bold">Starting in {countdown}...</h2>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">What is the capital of {easyQuestions[currentQuestion].country}?</h1>
          <h1 className="text-2xl font-bold mb-4">You have {timeLeft} seconds left.</h1>
          <h1 className="text-2xl font-bold mb-4"> </h1>
          <div className="grid grid-cols-1 gap-4">
            {easyQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
