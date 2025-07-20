import { useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import type { NavLink } from "./models/core.model";
import HomePage from "./Pages/HomePage/HomePage";
import countiriesData from "../src/data/countries.json";
import OtherPages from "./Pages/OtherPages/OtherPages";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const navLinks: NavLink[] = [
    { text: "Home", path: "/home" },
    { text: "Asia", path: "/asia" },
    { text: "Africa", path: "/africa" },
    { text: "Europe", path: "/europe" },
    { text: "Americas", path: "/americas" },
    { text: "Oceania", path: "/oceania" },
  ];

  const [filteredData, setFilteredData] = useState(countiriesData);

  const onSearch = (value: string) => {
    setFilteredData(
      countiriesData.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  

  return (
    <div className="App">
      {/* Header */}
      <Header title="Trip Planner" navData={navLinks} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route
            path="/home"
            element={
              <HomePage
                cardData={filteredData}
                onSearch={onSearch}
                title="10 Most popular tourist destinations"
              />
            }
          />
          <Route path="/africa" element={<OtherPages title="Africa Page" cardData={countiriesData.filter(coutry=> coutry.region === "Africa")}/>} />
          <Route path="/asia" element={<OtherPages title="Asia Page" cardData={countiriesData.filter(coutry=> coutry.region === "Asia")}/>} />
          <Route path="/europe" element={<OtherPages title="Europe Page" cardData={countiriesData.filter(coutry=> coutry.region === "Europe")} />} />
          <Route
            path="/americas"
            element={<OtherPages title="Americas Page" cardData={countiriesData.filter(coutry=> coutry.region === "Americas")} />}
          />
          <Route
            path="/oceania"
            element={<OtherPages title="Oceania Page" cardData={countiriesData.filter(coutry=> coutry.region === "Oceania")}/>}
          />
        </Routes>
      </main>
      {/* Footer */}
      <Footer name="Marija Bogeska" />
    </div>
  );
}

export default App;
