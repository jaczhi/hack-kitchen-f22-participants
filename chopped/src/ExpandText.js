import React, {useState} from 'react';
import './ExpandText.css';

function ExpandText(props) {
    const [expanded, setExpanded] = useState(false);
    return(<>
    <div class="ExpandTextPad">
        <h1 class="ExpandTextHead" role="button" onClick={()=>setExpanded(!expanded)}>{props.head} 
        {expanded? <>&#9660;</> : <>&#9654;</>}</h1>
        {expanded ? props.body : null}
    </div>
    </>)
}
export default ExpandText;