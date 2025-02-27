import React, { useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export default function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(getRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess)) {
      setMessage("Please enter a valid number.");
    } else if (numGuess > targetNumber) {
      setMessage("Too high! Try again.");
    } else if (numGuess < targetNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Congratulations! You guessed the number.");
    }
  };

  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">Number Guessing Game</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="p-2 border rounded mb-2"
      />
      <button
        onClick={handleGuess}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Guess
      </button>
      <p className="mt-4 text-lg font-semibold">{message}</p>
    </div>
  );
}