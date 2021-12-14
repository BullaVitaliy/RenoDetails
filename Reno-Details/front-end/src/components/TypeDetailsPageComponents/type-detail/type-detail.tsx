import { Link } from 'react-router-dom';
import "./type-detail.css";
import Interpoint from "./../../interpoint/interpoint";

//import images
import BumperImg from "./../../../components/images/TypeDetailsPage/bumper200.png";
import BodyImg from "./../../../components/images/TypeDetailsPage/auto-body200.png";
import HeadlightsImg from "./../../../components/images/TypeDetailsPage/headlights200.png";
import ElectronicsImg from "./../../../components/images/TypeDetailsPage/electronics200.png";
import EngineImg from "./../../../components/images/TypeDetailsPage/engine200.png";
import TransmissionImg from "./../../../components/images/TypeDetailsPage/transmission200.png";
import BrakeImg from "./../../../components/images/TypeDetailsPage/brake-system200.png";
import FilterImg from "./../../../components/images/TypeDetailsPage/filters200.png";
import SteringImg from "./../../../components/images/TypeDetailsPage/stering200.png";
import CoolingImg from "./../../../components/images/TypeDetailsPage/cooling200.png";


function typeDetail() {
  return (
    <div className="wrapper_type_detail">
      <div className="type_detail">
        <Link to="/type-details/details" className="card_type_detail">
          <img src={BumperImg} alt={"BumperImg"} />
          <p className="type_detail_title">Бампера</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail margin-center">
          <img src={BodyImg} alt={"BodyImg"} />
          <p className="type_detail_title">Кузов</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={HeadlightsImg} alt={"HeadlightsImg"} />
          <p className="type_detail_title">Фари</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={ElectronicsImg} alt={"ElectronicsImg"} />
          <p className="type_detail_title">Електроніка</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail margin-center">
          <img src={EngineImg} alt={"EngineImg"} />
          <p className="type_detail_title">Двигун·Система вихлопу</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={TransmissionImg} alt={"TransmissionImg"} />
          <p className="type_detail_title">Коробка передач</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={BrakeImg} alt={"BrakeImg"} />
          <p className="type_detail_title">Гальмівна система</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail margin-center">
          <img src={FilterImg} alt={"FilterImg"} />
          <p className="type_detail_title">Для технічного огляду</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={SteringImg} alt={"SteringImg"} />
          <p className="type_detail_title">Підвіска·Рульове</p>
        </Link>
        <Link to="/type-details/details" className="card_type_detail">
          <img src={CoolingImg} alt={"CoolingImg"} />
          <p className="type_detail_title">Охолодження·Опалення</p>
        </Link>
      </div>
      <Interpoint />
    </div>
  );
}

export default typeDetail;
