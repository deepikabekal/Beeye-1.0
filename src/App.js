// import "./styles.css";
import React from "react";
import Header from "../src/components/Header";
import TeamSection from "./components/TeamSection";
import LeftMenu from "./components/LeftMenu";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <LeftMenu />
        <TeamSection />
      </div>
    </>
  );
}

export default App;
