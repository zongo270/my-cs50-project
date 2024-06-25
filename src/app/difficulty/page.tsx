import RootLayout from '../layout';
import DifficultySelection from '../components/difficultyselection';

const DifficultyPage = () => {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-800 dark:to-gray-900">
        <DifficultySelection />
      </main>
    </RootLayout>
  );
};

export default DifficultyPage;
