'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UsernameForm = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem('username', username);
      router.push('/difficulty');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <label htmlFor="username" className="text-lg font-medium">Enter your username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Your name"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Start Game</button>
    </form>
  );
};

export default UsernameForm;