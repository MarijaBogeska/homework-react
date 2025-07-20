import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import "./SaveButton.css";

interface SaveButtonProps {
  isSaved: boolean;
  onBtnClick: () => void;
}

function SaveButton({ isSaved, onBtnClick }: SaveButtonProps) {
  return (
    <div className="Button">
      <FontAwesomeIcon
        icon={isSaved ? solidHeart : regularHeart}
        className="heart"
        style={{
          color: isSaved ? "#880808" : "#e4c5af",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        onClick={onBtnClick}
      />
    </div>
  );
}

export default SaveButton;
