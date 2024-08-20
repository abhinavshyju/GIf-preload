import gif from "./assets/test.gif";
import { useState } from "react";

import "./App.css";

function App() {
  const [open, setopen] = useState(true);

  if (open) {
    return (
      <div className="w-full flex justify-center items-center h-screen bg-black">
        <img src={gif} alt="" onClick={() => setopen(false)} />
      </div>
    );
  }
  return <div className="">hy</div>;
}

export default App;
