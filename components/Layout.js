export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Any Business Connect</h1>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-black text-white p-4 mt-8 text-center">
        &copy; 2025 Any Business Connect Inc.
      </footer>
    </div>
  );
}