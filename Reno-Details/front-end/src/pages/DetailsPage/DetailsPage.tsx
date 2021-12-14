import { useSelector, useDispatch } from "react-redux";
import { setList } from "./../../store/detailListSlicer";
import CardDetail from "./../../components/DetailsPageConponents/card-detail/card-detail";
import "./../../components/DetailsPageConponents/card-detail/card-detail.css";

import './../../components/DetailsPageConponents/card-detail/card-detail.css'

function DetailsPage() {

  const dispatch = useDispatch();
  const request = new XMLHttpRequest();
  window.addEventListener("load", () => {
    request.open("GET", "http://localhost:3003/detail");
    request.onload = function () {
      dispatch(setList(JSON.parse(request.response)));
    };
    request.send();
  });

  let allDetails = useSelector((state: any) => state.detailList.value);
  let list: any = [];
  allDetails.forEach(function (value: any) {
    list.push(
      <CardDetail
        title={value.detailName}
        color={value.detailColor}
        img={"data:image/png;base64," + value.detailImg}
        prise={value.detailPrise}
      />
    );
  });

  function loading() {
    window.location.reload();
  }

  return (
    <>
      <button className="loading" onClick={loading}>Натисніть для завантаження деталей</button>
      
      <div className="wrapper_card">
        <div className="card">{list}</div>
      </div>
    </>
  );
}

export default DetailsPage;
