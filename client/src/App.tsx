// src/App.tsx
import Button from "./components/reusable/Button";
import Paragraph from "./components/reusable/paragraph"



function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <Paragraph text="Hello! This is a reusable paragraph." />
      <Paragraph text="It can be styled with custom classes." className="text-gray-600 mt-2" />

      <div className="mt-6">
        <Button
          text="Click Me"
          onClick={() => alert("Button clicked!")}
          variant="primary"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        />
      </div>
    </main>
  );
}

export default App;
