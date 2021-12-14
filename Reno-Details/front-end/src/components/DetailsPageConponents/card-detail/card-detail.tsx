import './card-detail.css';

function cardDetail(props : any) {
    
    const stylePrise = {
        color: "#116530"
    }

    return(
        <div className="card_item">
            <img className="card_img" src={props.img} alt="testimg" />
            <h3 className="card_title">{props.title}</h3>
            <div className="flex">
                <p style={stylePrise} className="prise"><strong>{props.prise}</strong></p>
                <button className="button">Купити</button>
            </div>
            <p className="color_parameter">{props.color}</p>
        </div>
    )
}

export default cardDetail;