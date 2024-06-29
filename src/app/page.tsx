import UsernameForm from './components/usernameform';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl font-bold mb-8">Welcome to The Capital City Game!</h1>
      <UsernameForm />
    </main>
  );
}
