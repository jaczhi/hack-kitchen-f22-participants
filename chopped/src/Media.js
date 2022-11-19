import "./media.css";

const Media = (props) => {
    const _handleClick = () => {
        console.log("Showing in full screen!");
    }

    return (
        <div className="container">
            <img src={props.source} alt={props.alt} className="image"/>
            <div className="middle">
                <a href={props.source} target="_blank" rel="noreferrer">
                    <button onClick={_handleClick} className="text">Show in Fullscreen</button>
                </a>
            </div>
        </div>
    );
}

export default Media;