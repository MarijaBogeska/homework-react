import Button from "../../Components/Button/Button";
import "./TripInfoPage.css";

function TripInfoPage() {
  return (
    <div className="TripInfoPage">
      <h2>Trip Information</h2>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required/>
        <label htmlFor="budget">Budget</label>
        <input type="text" name="budget" required/>
        <label htmlFor="passport">Passport number</label>
        <input type="text" name="passport" required/>
        <label htmlFor="comments">Comments</label>
        <textarea name="comments"></textarea>
        <Button text="Submit" onClick={()=>{}}/>
      </form>
    </div>
  );
}

export default TripInfoPage;
