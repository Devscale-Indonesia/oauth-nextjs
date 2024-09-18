export default function Layout({ children }) {
  return (
    <main>
      <header className="bg-indigo-500 text-white font-medium p-4 flex justify-between items-center">
        <div className="font-bold text-lg">Devscale.id</div>
        <div className="flex items-center space-x-4">
          <div>Your name here</div>
          <div className="w-8 h-8 rounded-full bg-white text-indigo-600 font-bold flex justify-center items-center">Y</div>
        </div>
      </header>
      <div className="max-w-6xl m-auto py-12">{children}</div>
    </main>
  );
}
