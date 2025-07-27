import type { Country } from "../../models/country.model";
import {
  addDayInCountry,
  removeDayInCountry,
  toggleSaveCounry,
} from "../../state/slices/country.slice";
import { useAppDispatch } from "../../utils/hooks";
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import "./CounryCardTrip.css";

interface CountyCardTripProps {
  country: Country;
}

function CounryCardTrip({ country }: CountyCardTripProps) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="CardTrip"
      style={{
        border: country.landlocked ? "5px solid #0BDA51" : "5px solid #406b8c",
      }}
    >
      <div className="section">
        <div className="countryDetails">
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>

        <div className="sectionTwo">
          <NumberInput
            minusDays={() => {
              dispatch(removeDayInCountry(country));
            }}
            plusDays={() => {
              dispatch(addDayInCountry(country));
            }}
            country={country}
          />
          <Button
            text="✗"
            onClick={() => {
              dispatch(toggleSaveCounry(country.name.common));
            }}
            style={{ fontSize: "20px", width: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CounryCardTrip;
