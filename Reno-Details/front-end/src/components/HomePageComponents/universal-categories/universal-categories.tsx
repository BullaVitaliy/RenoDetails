import { Link } from 'react-router-dom';

// import styles
import './universal-categories.css';

// import images
import BateryImg from './../../../components/images/HomePage/batery200x200.jpg'
import TiresWheelsImg from './../../../components/images/HomePage/wheelsTiers.png'
import OilsImg from './../../../components/images/HomePage/oils200x200.jpg'
import ToolsImg from './../../../components/images/HomePage/tools.png'
import autoChemistryImg from './../../../components/images/HomePage/auto-chemistry.png'
import autoFilmsImg from './../../../components/images/HomePage/auto-films.png'

function UniversalCategories () {

    return(
        <div className="wrapper_universal_categories">
            <div className="universal_categories">
                <Link to="/type-details/details" className="card_categories">
                    <img src={BateryImg} alt={"BateryImg"} />
                    <p className="category_title">Акумулятори</p>
                </Link>
                <Link to="/type-details/details" className="card_categories margin_center">
                    <img src={TiresWheelsImg} alt={"TiresWheelsImg"} />
                    <p className="category_title">Шини·Диски</p>
                </Link>
                <Link to="/type-details/details" className="card_categories">
                    <img src={OilsImg} alt={"OilsImg"} />
                    <p className="category_title">Масла·Олії·Рідини</p>
                </Link>
                <Link to="/type-details/details" className="card_categories">
                    <img src={ToolsImg} alt={"ToolsImg"} />
                    <p className="category_title">Інструменти·Аксесуари</p>
                </Link>
                <Link to="/type-details/details" className="card_categories margin_center">
                    <img src={autoChemistryImg} alt={"autoChemistryImg"} />
                    <p className="category_title">Автохімія</p>
                </Link>
                <Link to="/type-details/details" className="card_categories">
                    <img src={autoFilmsImg} alt={"autoFilmsImg"} />
                    <p className="category_title">Автоплівка</p>
                </Link>
            </div>
        </div>
    )
}


export default UniversalCategories;