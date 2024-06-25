import { useCallback, useEffect, useRef, useState } from "react";
import { observableObject } from "./ObservableClass";
import { Toaster, toast } from "react-hot-toast";
import nextId from "react-id-generator";
import "./App.css";

function App() {
  const [changeTriggers, setChangeTriggers] = useState<JSX.Element[]>([]);
  const useEffectRef = useRef<boolean>(false);

  const triggerAlertObserver = useCallback((dataToDisplay: string) => {
    toast.success(dataToDisplay);
  }, []);

  const triggerLoggerObserver = useCallback((dataToDisplay: string) => {
    const loggedInfo: JSX.Element = <div key={nextId()}>{dataToDisplay}</div>;
    setChangeTriggers((prevState) => [...prevState, loggedInfo]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBtnClick = () => {
    observableObject.notifyObservers("The button was clicked!");
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const logInputChange: string =
      ev.target.value.length === 0 ? "Emptied input" : ev.target.value;
    observableObject.notifyObservers(`New input change: ${logInputChange}`);
  };

  const handleAlertUnsub = () => {
    observableObject.unsubscribe(triggerAlertObserver);
  };

  const handleLoggerUnsub = () => {
    observableObject.unsubscribe(triggerLoggerObserver);
  };

  useEffect(() => {
    if (!useEffectRef.current) {
      observableObject.subscribe(triggerAlertObserver);
      observableObject.subscribe(triggerLoggerObserver);
      useEffectRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="observerShowCase">
        <h1>Observer pattern</h1>
        <div className="eventsContainer">
          <input
            onChange={handleInputChange}
            placeholder="Type something..."
          ></input>
          <button onClick={handleBtnClick}>Click</button>
        </div>
        <div className="unsubContainer">
          <button onClick={handleAlertUnsub}>Unsub alert</button>
          <button onClick={handleLoggerUnsub}>Unsub logger</button>
        </div>
        <code>{changeTriggers}</code>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
