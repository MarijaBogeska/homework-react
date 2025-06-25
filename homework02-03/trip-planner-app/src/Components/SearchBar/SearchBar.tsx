  import { useEffect, useState } from "react";
import "./SearchBar.css";

interface SearschBarProps {
  onSearch: (value: string) => void
}

function SearchBar({ onSearch }: SearschBarProps) {
  const [value, setValue] = useState("");

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      onSearch(value);
    },500)

    return ()=>{
      clearTimeout(timerId)
    }
  },[value])
  return (
    <section className="SearchBar">
      <input type="text"
      value={value}
      placeholder="Search by country name..."
      onChange={e=> setValue(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;
