import { useState } from "react";

function App() {
  const [color, setColour] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColour("red")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColour("green")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColour("blue")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColour("black")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => setColour("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColour("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>

            <button
              onClick={() => setColour("magenta")}
              className="outline-none px-4 py-1 rounded-full text-white  shdow-lg"
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>

            <button
              onClick={() => setColour("white")}
              className="outline-none px-4 py-1 rounded-full text-black  shdow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
