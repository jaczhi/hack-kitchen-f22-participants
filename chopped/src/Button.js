import './Button.css';

function Button(props) {
    const handleClick = () => {
        props.pressed = !props.pressed;
    };
    return (
      <div>
        <button type="button" class="rectangle" onClick={handleClick}>{props.label}</button>
      </div>
    );
  }
  
  export default Button;