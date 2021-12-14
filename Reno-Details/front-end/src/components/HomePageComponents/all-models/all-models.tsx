import "./all-models.css";
import { Link } from "react-router-dom";

//import images models
import sanderoImg from "./../../../components/images/HomePage/sandero.jpg";
import loganImg from "./../../../components/images/HomePage/logan.jpg";
import lodgyImg from "./../../../components/images/HomePage/lodgy.jpg";
import meganeImg from "./../../../components/images/HomePage/megane.jpg";
import masterImg from "./../../../components/images/HomePage/master.jpg";
import traficImg from "./../../../components/images/HomePage/trafic.jpg";
import dusterImg from "./../../../components/images/HomePage/duster.jpg";
import stepwayImg from "./../../../components/images/HomePage/stepway.jpg";
import koleosImg from "./../../../components/images/HomePage/koleos.jpg";

function AllModels() {
  return (
    <div className="wrapper_block_all_models">
      <div className="block_all_models">
        <Link to="/type-details/" className="modelcard sandero">
          <img src={sanderoImg} alt={"sanderoImg"} />
          <p className="model_title">SANDERO</p>
        </Link>
        <Link to="/type-details/" className="modelcard logsan center_margin">
          <img src={loganImg} alt={"loganImg"} />
          <p className="model_title">LOGAN</p>
        </Link>
        <Link to="/type-details/" className="modelcard lodgy">
          <img src={lodgyImg} alt={"lodgyImg"} />
          <p className="model_title">LODGY</p>
        </Link>
        <Link to="/type-details/" className="modelcard megan">
          <img src={meganeImg} alt={"meganeImg"} />
          <p className="model_title">MEGANE</p>
        </Link>
        <Link to="/type-details/" className="modelcard master center_margin">
          <img src={masterImg} alt={"masterImg"} />
          <p className="model_title">MASTER</p>
        </Link>
        <Link to="/type-details/" className="modelcard trafic">
          <img src={traficImg} alt={"traficImg"} />
          <p className="model_title">TRAFIC</p>
        </Link>
        <Link to="/type-details/" className="modelcard duster">
          <img src={dusterImg} alt={"dusterImg"} />
          <p className="model_title">DUSTER</p>
        </Link>
        <Link to="/type-details/" className="modelcard duster center_margin">
          <img src={stepwayImg} alt={"stepwayImg"} />
          <p className="model_title">STEPWAY</p>
        </Link>
        <Link to="/type-details/" className="modelcard duster">
          <img src={koleosImg} alt={"koleosImg"} />
          <p className="model_title">KOLEOS</p>
        </Link>
      </div>
      <div className="interpoint">
        <p className="interpoint_text">▢ ▢ ▢ ▢ ▢</p>
      </div>
    </div>
  );
}

export default AllModels;
