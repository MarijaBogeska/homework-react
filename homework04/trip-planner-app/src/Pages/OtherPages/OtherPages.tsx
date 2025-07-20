import CardList from "../../Components/CardList/CardList";
import { useAppSelector } from "../../utils/hooks";
import "./OtherPages.css";

interface PageProps {
  region: string;
}

function OtherPages({ region }: PageProps) {
  const countries = useAppSelector((state) => state.countries.value);
  const regionCountries = countries.filter(
    (coutry: any) => coutry.region === region
  );
  return (
    <div className="OtherPages">
      <h1>{region}</h1>;
      <CardList cardsData={regionCountries} />
    </div>
  );
}

export default OtherPages;
