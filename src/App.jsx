import gif from "./assets/test.gif";
import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (open) {
    return (
      <div className="w-full flex justify-center items-center h-screen bg-black">
        <img src={gif} alt="" onClick={() => setOpen()} className="w-[90%]" />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center h-screen">
      The other part!
    </div>
  );
}

export default App;
