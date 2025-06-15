import CardList from "../../Components/CardList/CardList";
import type { Country } from "../../models/country.model";
import "./HomePage.css";

interface HomePageProps {
  cardData: Country[];
  title: string;
}

function HomePage({ title, cardData }: HomePageProps) {
  return (
    <div className="HomePage">
      <h1>{title}</h1>
      <CardList cardsData={cardData}/>
    </div>
  );
}

export default HomePage;
