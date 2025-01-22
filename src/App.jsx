import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white text-black"
        } h-screen flex flex-col justify-center items-center gap-5 transition-all ease-in duration-300`}
      >
        <h1 className="text-3xl font-bold">Light/Dark Mode</h1>
        <button
          onClick={handleMode}
          className="bg-teal-400 py-2 px-5 rounded-md text-black"
        >
          Dark Mode
        </button>
      </div>
    </>
  );
}

export default App;
