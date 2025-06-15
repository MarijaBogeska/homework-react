import type { Country } from "../../models/country.model";
import CountryCard from "../CountryCard/CountryCard";
import "./CardList.css";

interface CardListProps {
  cardsData: Country[];
}

function CardList({ cardsData }: CardListProps) {
  return (
    <div className="CardList">
      {cardsData.map((counry, i) => (
        <CountryCard key={i} country={counry} />
      ))}
    </div>
  );
}

export default CardList;
