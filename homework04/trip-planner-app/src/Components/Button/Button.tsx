import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties
  onClick: () => void;
}

function Button({ text,onClick,style}: ButtonProps) {
  return (
    <div className="Button" >
      <button onClick={onClick} style={style}>{text}</button>
    </div>
  );
}

export default Button;
