import type { Country } from "../../models/country.model";
import CountryCard from "../CountryCard/CountryCard";
import "./CardList.css";

interface CardListProps {
  cardsData: Country[];
}

function CardList({ cardsData }: CardListProps) {
  return (
    <div className="CardList">
      { cardsData.length > 0 ? cardsData.map((country, i) => (
        <CountryCard key={i} country={country} style={{border: country.landlocked ? "5px solid #0BDA51" : "5px solid #406b8c"}}/>
      )) : <h4>Data not found</h4>}
    </div>
  );
}

export default CardList;
