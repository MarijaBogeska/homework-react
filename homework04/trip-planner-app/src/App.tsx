import { useEffect } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import type { NavLink } from "./models/core.model";
import HomePage from "./Pages/HomePage/HomePage";
import OtherPages from "./Pages/OtherPages/OtherPages";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import {
  fetchCountries,
  setupLocalStoragePlanner,
} from "./state/slices/country.slice";
import { loadPlannerFromLocalStorage } from "./services/data.service";
import { Spinner } from "./Components/Spinner/Spinner";
import TripPlannerPage from "./Pages/TripPlanPage/TripPlanPage";
import TripInfoPage from "./Pages/TripInfoPage/TripInfoPage";
import TripsPage from "./Pages/TripsPage/TripsPage";

function App() {
  const navLinks: NavLink[] = [
    { text: "Home", path: "/home" },
    { text: "Asia", path: "/asia" },
    { text: "Africa", path: "/africa" },
    { text: "Europe", path: "/europe" },
    { text: "Americas", path: "/americas" },
    { text: "Oceania", path: "/oceania" },
    { text: "Planner", path: "/planner" },
    { text: "Trips", path: "/trips" },
  ];

  const isLoading = useAppSelector((state) => state.countries.isLoading);
  const countries = useAppSelector((state) => state.countries.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (!countries.length) return;

    const countriesInPlanner = loadPlannerFromLocalStorage();

    dispatch(setupLocalStoragePlanner(countriesInPlanner));
  }, [countries, dispatch]);

  return (
    <>
      {isLoading && <Spinner />}

      <div className="App">
        <Header title="Trip Planner" navData={navLinks} />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/africa" element={<OtherPages region="Africa" />} />
            <Route path="/asia" element={<OtherPages region="Asia" />} />
            <Route path="/europe" element={<OtherPages region="Europe" />} />
            <Route
              path="/americas"
              element={<OtherPages region="Americas" />}
            />
            <Route path="/oceania" element={<OtherPages region="Oceania" />} />
            <Route path="/planner" element={<TripPlannerPage />} />
            <Route path="/tripInfo" element={<TripInfoPage />} />
            <Route path="/trips" element={<TripsPage />} />
          </Routes>
        </main>
        <Footer name="Marija Bogeska" />
      </div>
    </>
  );
}

export default App;
