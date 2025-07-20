import { useCallback, useEffect, useState } from "react";
import CardList from "../../Components/CardList/CardList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useAppSelector } from "../../utils/hooks";
import "./HomePage.css";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const countries = useAppSelector((state) => state.countries.value);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const onSearch = useCallback((value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set("q", value);
      return prevParams;
    });

    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLocaleLowerCase().includes(value)
      )
    );
  },[countries,setSearchParams]);

  useEffect(()=> {
    setFilteredCountries(countries)
  },[query,onSearch])

  useEffect(()=> {
    if(query) onSearch(query)
  },[query,onSearch])

  return (
    <div className="HomePage">
      <div>
        <SearchBar onSearch={onSearch} defaultValue={query}/>
      </div>
      <h1>10 Most popular tourist destinations</h1>
      <CardList cardsData={filteredCountries} />
    </div>
  );
}

export default HomePage;
