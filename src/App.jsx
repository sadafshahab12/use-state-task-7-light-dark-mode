import { useState } from "react";
import "./App.css";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

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
          className="bg-teal-400 py-2 px-5 rounded-md text-black flex items-center gap-2"
        >
          {mode ? "Light Mode" : "Dark Mode"}
          {mode ? (
            <IoSunnyOutline className="w-6 h-6" />
          ) : (
            <IoIosMoon className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
}

export default App;
