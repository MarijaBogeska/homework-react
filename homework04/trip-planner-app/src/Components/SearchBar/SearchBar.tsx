import { useEffect, useState } from "react";
import "./SearchBar.css";

interface SearschBarProps {
  defaultValue: string | null;
  onSearch: (value: string) => void;
}

function SearchBar({ onSearch, defaultValue }: SearschBarProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) onSearch(value);
  }, [defaultValue, value, onSearch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  return (
    <section className="SearchBar">
      <input
        type="text"
        value={value}
        placeholder="Search by country name..."
        onChange={(e) => setValue(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;
