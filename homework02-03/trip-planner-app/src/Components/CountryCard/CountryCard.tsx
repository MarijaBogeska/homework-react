import type { Country } from "../../models/country.model";
import "./CountyCard.css"

interface CountyCardProps{
    country: Country;
    style: React.CSSProperties;
}

function CountryCard({country, style}: CountyCardProps){
    return (
        <div className="Card" style={style}>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
    )

}

export default CountryCard;