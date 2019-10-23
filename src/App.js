import React, { useState } from "react";
import { useThrottle } from "use-throttle";
import { useDebounce } from "use-debounce";

function App() {
    const [text, setText] = useState("");

    const throttleText = useThrottle(text, 1000);
    const debounceText = useDebounce(text, 1000);

    return (
        <div className="App">
            <label>Input</label> <br />
            <input type="text" onChange={e => setText(e.target.value)} />
            <hr />
            <span>
                <b>Text atual: </b> {text}
            </span>
            <br />
            <span>
                <b>Text Throttle: </b> {throttleText}
            </span>
            <br />
            <span>
                <b>Text Debounce: </b> {debounceText}
            </span>
        </div>
    );
}

export default App;
