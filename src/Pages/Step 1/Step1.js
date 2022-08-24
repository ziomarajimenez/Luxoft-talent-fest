import "./Step1.css";
import Frighten from "../../Assets/Frighten.svg";
import Timer from "../../Components/Timer/Timer";
function Step1() {
  return (
    <>
      <section className="informationHeader">
        {/* <img src={Frighten} alt="Frighten" /> */}
        <h1>Nombre</h1>
        <Timer />
      </section>
    </>
  );
}
export default Step1;
