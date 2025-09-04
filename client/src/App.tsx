// src/App.tsx
import Button from "./components/reusable/Button";
import Paragraph from "./components/reusable/paragraph"



function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <Paragraph text="Light weight running shoes with enhanced cushioning for maximum comfort." />
     

      <div className="mt-6">
        <Button
          text="Add To Cart"
          onClick={() => alert("Button clicked!")}
          variant="primary"
          className="px-4 py-2 pl-15 pe-15 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        />
      </div>
    </main>
  );
}

export default App;
