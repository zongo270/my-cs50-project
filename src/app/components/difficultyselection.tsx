'use client';

import { useRouter } from 'next/navigation';

const DifficultySelection = () => {
  const router = useRouter();

  const handleSelectDifficulty = (difficulty: string) => {
    localStorage.setItem('difficulty', difficulty);
    router.push(`/game/${difficulty}`);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-medium mb-4">Select your level of difficulty</h2>
      <button
        onClick={() => handleSelectDifficulty('easy')}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        Easy
      </button>
      <button
        onClick={() => handleSelectDifficulty('medium')}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
      >
        Medium
      </button>
      <button
        onClick={() => handleSelectDifficulty('difficult')}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Difficult
      </button>
    </div>
  );
};

export default DifficultySelection;
