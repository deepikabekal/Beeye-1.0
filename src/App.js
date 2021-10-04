// import "./styles.css";
import { React, useState } from "react";
import Header from "../src/components/Header";
import TeamSection from "./components/TeamSection";
import LeftMenu from "./components/LeftMenu";
import Task from "./components/Task";
import TempPage from "./components/TempPage";

function App() {
  const [elementId, setElementId] = useState("Tâches");
  function renderSection(event) {
    setElementId(event.target.id);
  }

  return (
    <>
      <Header />
      <div className="container">
        <LeftMenu onClick={renderSection} />
        {elementId === "Tâches" ? (
          <Task name={elementId} />
        ) : (
          <TempPage name={elementId} />
        )}
        <TeamSection />
      </div>
    </>
  );
}

export default App;
