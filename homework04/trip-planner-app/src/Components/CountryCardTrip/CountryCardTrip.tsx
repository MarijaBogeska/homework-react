import type { Country } from "../../models/country.model";
import "./CounryCardTrip.css";

interface CountyCardTripProps {
  country: Country;
}

function CounryCardTrip({ country }: CountyCardTripProps) {
  return (
    <div className="Card" style={{border: country.landlocked ? "5px solid #0BDA51" : "5px solid #406b8c"}}>
      <div className="section">
        <h3>{country.name.common}</h3>
        <input type="number" max={30} min={1} />
      </div>

      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  );
}

export default CounryCardTrip;
