import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CounryCardTrip from "../../Components/CountryCardTrip/CountryCardTrip";
import { selectCountriesInPlanner } from "../../state/selectors";
import { useAppSelector } from "../../utils/hooks";
import "./TripPlanPage.css";

function TripPlannerPage() {
  const navigate = useNavigate();
  const countries = useAppSelector(selectCountriesInPlanner);
  const savedCountries = countries.filter((country) => country.isSaved);
  return (
    <div className="TripPlanner">
      <h1>Trip Planner</h1>
      <section className="CardList">
        {savedCountries.map((country, i) => (
          <CounryCardTrip country={country} key={i} />
        ))}
      </section>
      {savedCountries.length > 0 ? (
        <Button
          text="Save"
          onClick={() => {
            navigate("/tripInfo");
          }}
        />
      ): (<h2>Nothing saved</h2>)}
    </div>
  );
}

export default TripPlannerPage;
