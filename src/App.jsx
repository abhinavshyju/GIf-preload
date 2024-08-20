import gif from "./assets/test.gif";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {open ? (
        <div className="w-full flex justify-center items-center h-screen bg-black">
          <img src={gif} alt="Loading..." onClick={() => setOpen(false)} />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center bg-white">
          <h1>Welcome to the App!</h1>
        </div>
      )}
    </>
  );
}

export default App;
