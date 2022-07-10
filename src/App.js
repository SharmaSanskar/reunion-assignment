import UserInput from "./components/UserInput";
import Properties from "./components/Properties";
import { PropertyProvider } from "./contexts/PropertyContext";

function App() {
  return (
    <PropertyProvider>
      <div className="min-h-screen px-12 py-8 bg-gray-100">
        <h2 className="text-center font-bold text-3xl mb-10 text-purple-600">
          reunion
        </h2>
        <UserInput />
        <Properties />
      </div>
    </PropertyProvider>
  );
}

export default App;
