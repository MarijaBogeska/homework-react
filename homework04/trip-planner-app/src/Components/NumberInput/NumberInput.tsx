import type { Country } from "../../models/country.model";
import Button from "../Button/Button";
import "./NumberInput.css";

interface NumberInputProps {
  country: Country;
  plusDays: () => void;
  minusDays: () => void
}
function NumberInput({ plusDays, minusDays, country }: NumberInputProps) {
  return (
    <div className="NumberInput">
      <p>Days</p>
      <div className="display">{country.days}</div>
      <div className="inputChangers">
        <Button
          text="+"
          onClick={plusDays}
          style={{
            fontSize: "16px",
            backgroundColor: "transparent",
            border: "1px solid var(--desert-sand)",
            color: "var(--desert-sand)",
          }}
        />
        <Button
          text="-"
          onClick={minusDays}
          style={{
            fontSize: "16px",
            backgroundColor: "transparent",
            border: "1px solid var(--desert-sand)",
            color: "var(--desert-sand)",
          }}
        />
      </div>
    </div>
  );
}

export default NumberInput;
