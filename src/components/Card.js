import './Components.css';

const Card = (props) => {
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
            <img src={props.image_url} />
            <p>{props.content}</p>
        </div>
    )
}

export default Card;