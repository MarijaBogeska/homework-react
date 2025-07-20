import CounryCardTrip from "../../Components/CountryCardTrip/CountryCardTrip";
import { selectCountriesInPlanner } from "../../state/selectors";
import { useAppSelector } from "../../utils/hooks";
import "./TripPlanPage.css";

function TripPlannerPage() {
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
    </div>
  );
}

export default TripPlannerPage;
