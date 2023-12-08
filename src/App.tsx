import { useState } from "react";
import "./App.css";
import PropsView from "./components/PropsView/PropsView";

function App() {
  const [isMobx, setIsMobx] = useState(true);

  return (
    <div>
      <div className="btnContainer">
        <button
          onClick={() => setIsMobx(true)}
          className={`leftBtn ${isMobx ? "activeBtn" : ""}`}
        >
          Props
        </button>
        <button
          onClick={() => setIsMobx(false)}
          className={!isMobx ? "activeBtn" : ""}
        >
          Mobx
        </button>
      </div>
      {isMobx ? <PropsView /> : <h1>Complex view</h1>}
    </div>
  );
}

export default App;
