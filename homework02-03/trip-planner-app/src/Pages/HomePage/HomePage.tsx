import CardList from "../../Components/CardList/CardList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import type { Country } from "../../models/country.model";
import "./HomePage.css";

interface HomePageProps {
  cardData: Country[];
  title: string;
  onSearch: (value: string) => void;
}

function HomePage({ title, cardData, onSearch }: HomePageProps) {
  return (
    <div className="HomePage">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <h1>{title}</h1>
      <CardList cardsData={cardData} />
    </div>
  );
}

export default HomePage;
