import CardList from "../../Components/CardList/CardList";
import type { Country } from "../../models/country.model";
import "./OtherPages.css";

interface PageProps {
  title: string;
  cardData: Country[];
}

function OtherPages({ title,cardData }: PageProps) {
  return (
    <div className="OtherPages">
      <h1>{title}</h1>;
      <CardList cardsData={cardData}/>
    </div>
  );
}

export default OtherPages;
