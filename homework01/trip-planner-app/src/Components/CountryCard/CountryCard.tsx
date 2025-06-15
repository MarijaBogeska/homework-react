import type { Country } from "../../models/country.model";
import "./CountyCard.css"

interface CountyCardProps{
    country: Country;
}

function CountryCard({country}: CountyCardProps){
    return (
        <div className="Card">
            <p>{country.name.common}</p>
        </div>
    )

}

export default CountryCard;