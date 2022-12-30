import "./RatingStar.css";

function RatingStar() {
  return (
    <div className="rating-stars">
      <input type="radio" name="rating" id="rs0" checked />
      <label htmlFor="rs0"></label>
      <input type="radio" name="rating" id="rs1" />
      <label htmlFor="rs1"></label>
      <input type="radio" name="rating" id="rs2" />
      <label htmlFor="rs2"></label>
      <input type="radio" name="rating" id="rs3" />
      <label htmlFor="rs3"></label>
      <input type="radio" name="rating" id="rs4" />
      <label htmlFor="rs4"></label>
      <input type="radio" name="rating" id="rs5" />
      <label htmlFor="rs5"></label>
      <span className="rating-counter"></span>
    </div>
  );
}

export default RatingStar;
