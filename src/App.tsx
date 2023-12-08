import { useState } from "react";
import "./App.css";
import PropsView from "./components/PropsView/PropsView";
import MobxView from "./components/MobxView/MobxView";

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
      {isMobx ? <PropsView /> : <MobxView />}
    </div>
  );
}

export default App;
