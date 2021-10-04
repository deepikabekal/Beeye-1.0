// import "./styles.css";
import React from "react";
import Header from "../src/components/Header";
import TeamSection from "./components/TeamSection";
import LeftMenu from "./components/LeftMenu";
import Task from "./components/Task";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <LeftMenu />
        <Task />
        <TeamSection />
      </div>
    </>
  );
}

export default App;
