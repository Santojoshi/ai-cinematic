export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">AI Cinematic</h1>
      <p className="text-xl text-gray-300 text-center mb-6">
        Turn your photos into cinematic masterpieces with one click.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Make it Cinematic
        </button>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        © 2025 AI Cinematic. Built with ❤️
      </footer>
    </div>
  );
}
