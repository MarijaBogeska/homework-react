import { useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import type { NavLink } from "./models/core.model";
import HomePage from "./Pages/HomePage/HomePage";
import countiriesData from "../src/data/countries.json";
import OtherPages from "./Pages/OtherPages/OtherPages";

function App() {
  const navLinks: NavLink[] = [
    { text: "Home", path: "./home" },
    { text: "Asia", path: "./asia" },
    { text: "Africa", path: "./africa" },
    { text: "Europe", path: "./europe" },
    { text: "Americas", path: "./americas" },
    { text: "Oceania", path: "./oceania" },
  ];

  const [selectedPage, setSelectedPage] = useState<string>("Home");

  const page = () => {
    switch (selectedPage) {
      case "Home":
        return (
          <HomePage
            title="10 most popular tourist destinations"
            cardData={countiriesData}
          />
        );
      case "Africa":
        return <OtherPages title="Africa Page" />;
      case "Asia":
        return <OtherPages title="Asia Page" />;
      case "Europe":
        return <OtherPages title="Europe Page" />;
      case "Americas":
        return <OtherPages title="Americas Page" />;
      case "Oceania":
        return <OtherPages title="Oceania Page" />;
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <Header
        title="Trip Planner"
        navData={navLinks}
        onPageClick={(pg) => {
          console.log("Selected page:", pg);
          setSelectedPage(pg);
        }}
      />
      <main>{page()}</main>
      {/* Footer */}
      <Footer name="Marija Bogeska" />
    </div>
  );
}

export default App;
