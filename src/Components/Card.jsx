import "../Styles/App.css";
import "../Styles/Card.css";

function Card(props) 
{
    return (
            <div className="card" style={{width: "28rem"}}>
            <img src={props.image} alt="News image" id="image" />
            <div className="card-body">
            <h2 id="title">{props.title.slice(0, 230)}</h2> 
            <h4 id="description">
                <span>Description :</span> {
                    //If description length > 5, only then display it with slicing otherwise display it without slicing
                    (String(props.description).length > 5) ? props.description.slice(0, 180) : props.description
                }
            </h4>
            <p id="source">[{props.source}, {props.date.slice(0, 10)}]</p>
            <br/>
            <a href={props.url} id="url">Click to read full article🔗</a>
            </div>
        </div>
        
            
    );
}

export default Card