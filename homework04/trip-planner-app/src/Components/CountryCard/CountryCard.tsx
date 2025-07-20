import type { Country } from "../../models/country.model";
import SaveButton from "../SaveButton/SaveButton";
import "./CountyCard.css";
import { useAppDispatch } from "../../utils/hooks";
import { toggleSaveCounry } from "../../state/slices/country.slice";

interface CountyCardProps {
  country: Country;
}

function CountryCard({ country }: CountyCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="Card"
      style={{
        border: country.landlocked ? "5px solid #0BDA51" : "5px solid #406b8c",
      }}
    >
      <div className="section">
        <h3>{country.name.common}</h3>
        <SaveButton
          isSaved={country.isSaved}
          onBtnClick={() => {
            dispatch(toggleSaveCounry(country.name.common));
          }}
        />
      </div>

      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  );
}

export default CountryCard;
