"use client";

import DifficultGame from '../../components/difficultgame';
import Link from 'next/link';

const DifficultyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">Select Difficulty</h1>
      <div className="flex gap-4">
        <Link href="/easy">
          <a className="button">Easy</a>
        </Link>
        <Link href="/medium">
          <a className="button">Medium</a>
        </Link>
        <Link href="/difficult">
          <a className="button">Difficult</a>
        </Link>
      </div>
    </div>
  );
};

export default DifficultyPage;

