import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage/HomePage";
import TypeDetailsPage from "./pages/TypeDetailsPage/TypeDetailsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import InfoDetailPage from "./pages/InfoDetailPage/InfoDetailPage";


function App() {
  // let location = useLocation();
  return (
    <BrowserRouter>
      <div className="App">
        
        <header className="header">
          <nav className="navbar">
            <ul>
              <li>
                <Link className="navlink start_padding_link cheked_home" to="/">Головна</Link>
              </li>
              <li>
                <Link className="navlink center_padding_link" to="/type-details">Тип·Деталі</Link>
              </li>
              <li>
                <Link className="navlink end_padding_link" to="/type-details/details">Деталь</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/type-details/details/info"
            element={<InfoDetailPage />}
          />
          <Route path="/type-details/details" element={<DetailsPage />} />
          <Route path="/type-details" element={<TypeDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h2>Erorr 404</h2>} />
        </Routes>

        <footer className="footer">

          
            <div className="wrapper_footer_menu">
                <div className="footer_menu">
                    <div className="menu_column">
                        <p className="title_column">Про компанію</p>
                        <a href="" className="link_footer">RenoDetails</a>
                        <a href="" className="link_footer">Наші контакти</a>
                        <a href="" className="link_footer">Блог</a>
                    </div>
                    <div className="menu_column">
                        <p className="title_column">Корисні силки</p>
                        <a href="" className="link_footer">Співпраця з нами</a>
                        <a href="" className="link_footer">Договір про доставку</a>
                        <a href="" className="link_footer">Доставка за адресом</a>
                    </div>
                    <div className="menu_column">
                        <p className="title_column">Слідкуйте за нами</p>
                        <a href="" className="link_footer">Instagram</a>
                        <a href="" className="link_footer">Youtube</a>
                        <a href="" className="link_footer">Facebook</a>
                        <a href="" className="link_footer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="right_reserved">© 2021 All rights reserved | RenoDetails</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
